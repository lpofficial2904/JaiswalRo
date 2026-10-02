export default function Icon({ name, size = 20, ...props }) {
  const paths = {
    chat: <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5Z"/>,
    phone: <path d="M6.6 3.8 9.2 3l1.6 4.2-2.1 1.7a15.2 15.2 0 0 0 6.5 6.5l1.7-2.1 4.2 1.6-.8 2.6a2.7 2.7 0 0 1-2.8 1.9C9.9 18.8 5.2 14.1 4.7 6.6a2.7 2.7 0 0 1 1.9-2.8Z"/>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"/><path d="M8.6 8.2c.3-.6.6-.6.9-.6h.4l.8 1.9-.8.8c.7 1.4 1.8 2.5 3.2 3.2l.8-.8 1.9.8v.4c0 .3 0 .6-.6.9-.4.2-1 .2-1.8-.2-2.3-1-4.2-2.9-5.2-5.2-.4-.8-.4-1.4-.2-1.8Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></>,
    linkedin: <><rect x="3" y="8" width="4" height="13" rx="1"/><circle cx="5" cy="3.5" r="1.5"/><path d="M11 21V8h4v2c4-4 6-1 6 3v8h-4v-7c0-3-2-3-2 0v7Z"/></>,
    youtube: <><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    diagonal: <path d="M6 18 18 6M7 6h11v11"/>,
    sliders: <><circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/><path d="M10 7h10M4 17h10"/></>,
    wrench: <path d="M14 4a6 6 0 0 0-7 7L3 17a3 3 0 0 0 4 4l7-8a6 6 0 0 0 7-7l-4 4-3-3 3-4Z"/>,
    filter: <><rect x="4" y="14" width="7" height="7" rx="1"/><path d="M6 10V7h3m5-3h3v3m3 4h-3m-3-1-3 3M4 3v2m5-2v2m11-1h1M4 10H2"/></>,
    sparkles: <><path d="m13 3 2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 3ZM4 3v5M1.5 5.5h5M20 2v4m-2-2h4"/></>,
    verified: <><path d="m12 2 3 2 3 .5 1.5 3 2 2.5-1 3.5-.5 3-3 1.5-2.5 2-3.5-1-3-.5-1.5-3-2-2.5 1-3.5.5-3 3-1.5Z"/><path d="m8 11 3 3 5-5"/></>,
    receipt: <><path d="m5 3 2 1 2-1 3 1 3-1 2 1 2-1v18l-2-1-2 1-3-1-3 1-2-1-2 1Z"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
    package: <><path d="m12 2 9 5v9l-9 6-9-6V7l9-5Zm-9 5 9 5 9-5M12 12v10M7 5l10 5v5"/><path d="m16 18 2 2 4-4"/></>,
    timer: <><circle cx="12" cy="14" r="8"/><path d="M9 2h6M12 14l3-4m3-5 2 2"/></>,
    scan: <path d="M8 3H4a1 1 0 0 0-1 1v4m13-5h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m13-5v4a1 1 0 0 1-1 1h-4M8 12h8"/>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    shield: <><path d="m12 3 7 3v5c0 5-7 9-7 9s-7-4-7-9V6l7-3Z"/><path d="m9 11 2 2 4-4"/></>,
    water: <><path d="M13 3s7 7 7 12a6 6 0 0 1-10 4"/><path d="M7 5s-4 4-4 7a4 4 0 0 0 8 0C11 9 7 5 7 5Z"/><path d="M16 13v2"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 6v6h4"/></>,
    calendar: <><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v5m8-5v5M4 10h16m-12 5 3 3 5-5"/></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
    close: <path d="m6 6 12 12M6 18 18 6"/>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}



