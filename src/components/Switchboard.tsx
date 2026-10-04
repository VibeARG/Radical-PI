import { useEffect, useRef, useState } from 'react'
import { telephone } from '../config/telephone'
type CallState = 'idle' | 'connecting' | 'awaiting recording' | 'playing' | 'ended'
export function Switchboard({ onClose, inquiry }: { onClose: () => void; inquiry?: string }) {
  const [state, setState] = useState<CallState>('idle')
  const [error, setError] = useState('')
  const dialog = useRef<HTMLDialogElement>(null)
  const returnFocus = useRef(document.activeElement as HTMLElement | null)
  const audio = useRef<HTMLAudioElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const attempt = useRef(0)
  const stop = () => {
    attempt.current += 1
    if (timer.current) clearTimeout(timer.current)
    if (audio.current) { audio.current.pause(); audio.current.currentTime = 0 }
  }
  useEffect(() => {
    const opener = returnFocus.current
    const player = audio.current
    dialog.current?.showModal()
    return () => {
      attempt.current += 1
      if (timer.current) clearTimeout(timer.current)
      if (player) { player.pause(); player.currentTime = 0 }
      opener?.focus()
    }
  }, [])
  const call = () => {
    stop(); setError(''); setState('connecting')
    timer.current = setTimeout(() => setState('awaiting recording'), 850)
  }
  const play = async () => {
    if (!audio.current) return
    stop()
    const currentAttempt = attempt.current
    setError('')
    try {
      await audio.current.play()
      if (currentAttempt === attempt.current) setState('playing')
    } catch {
      if (currentAttempt === attempt.current) { setError('Recording unavailable. Please try again later.'); setState('ended') }
    }
  }
  const close = () => { stop(); onClose() }
  return <dialog ref={dialog} className="switchboard" aria-labelledby="phone-title" onCancel={event => { event.preventDefault(); close() }}>
    <div className="titlebar"><span id="phone-title">RADICAL-PI / OFFICE SWITCHBOARD</span><button aria-label="Close switchboard" onClick={close}>×</button></div>
    <div className="switchboard-body"><span className="eyebrow">PRIVATE LINE · EXT. CONFIDENCE</span><div className="phone-face" aria-hidden="true">☎</div>{inquiry && <p>Inquiry: {inquiry}</p>}
      <div className="phone-display" role="status"><strong>{state.toUpperCase()}</strong><p>{error || ({ idle: 'Line ready. Make your move.', connecting: 'Connecting to the office…', 'awaiting recording': telephone.recordingSrc ? 'Recording ready. Press Play Recording.' : 'Answering machine recording pending.', playing: 'Playing office recording.', ended: 'Call ended.' }[state])}</p></div>
      <div className="phone-controls"><button onClick={call} disabled={state !== 'idle' && state !== 'ended'}>Call</button><button onClick={() => { stop(); setError(''); setState('ended') }} disabled={state === 'idle' || state === 'ended'}>Hang Up</button>{telephone.recordingSrc && <button onClick={play} disabled={state !== 'awaiting recording' && state !== 'ended'}>{state === 'ended' ? 'Replay' : 'Play Recording'}</button>}</div>
      <details className="transcript"><summary>Recording transcript</summary><p>{telephone.transcript || 'Transcript pending.'}</p></details><small>In-page switchboard · no real call is placed.</small>
      {telephone.recordingSrc && <audio ref={audio} src={telephone.recordingSrc} preload="none" onEnded={() => setState('ended')} onError={() => { stop(); setError('Recording unavailable. Please try again later.'); setState('ended') }}/>}</div>
  </dialog>
}
