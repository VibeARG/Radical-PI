export type Post = { id: string; title: string; date: string; excerpt: string; body: string; image?: string }
export const posts: Post[] = [
  { id: 'online', title: 'The agency is on the line.', date: '2026-10-04', excerpt: 'A website. A breakthrough. Several buttons I did not ask for.', body: 'This space is reserved for an official observation. The observation is still being observed.' },
  { id: 'discretion', title: 'A brief note on discretion.', date: '2026-10-02', excerpt: 'I would tell you more. That would defeat the point.', body: 'Notes will follow when the appropriate level of mystery has been established.' },
  { id: 'desk', title: 'Everything is under control.', date: '2026-10-01', excerpt: 'The desk is organized according to a system.', body: 'Further documentation of the system is pending. Confidence remains unaffected.' },
]
