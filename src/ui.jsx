import React, { useState } from 'react'
export function Card({ className='', children }) {
  return <div className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 shadow-sm ${className}`}>{children}</div>
}
export function CardContent({ className='', children }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
export function Badge({ children, variant='default' }) {
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs border'
  const styles = variant === 'secondary'
    ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
    : variant === 'outline'
    ? 'border-zinc-300 dark:border-zinc-700'
    : 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white'
  return <span className={`${base} ${styles}`}>{children}</span>
}
export function Button({ href, children, variant='default', size='md', onClick }) {
  const base = 'inline-flex items-center justify-center rounded-2xl border font-medium transition hover:opacity-90'
  const sizes = { sm:'px-3 py-1.5 text-sm', md:'px-4 py-2', lg:'px-5 py-2.5 text-base' }
  const styles = variant==='outline'
    ? 'border-zinc-300 dark:border-zinc-700'
    : variant==='ghost'
    ? 'border-transparent'
    : 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white'
  const cls = `${base} ${sizes[size]} ${styles}`
  if (href) return <a className={cls} href={href} target={href?.startsWith('http')?'_blank':undefined} rel="noreferrer">{children}</a>
  return <button className={cls} onClick={onClick}>{children}</button>
}
