'use client'

import { Clock3, Mail } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between gap-3 px-4 text-[11px] md:px-6">
        <div className="flex items-center gap-2.5">
          <a href="#" aria-label="Facebook" className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-full border border-white/70 text-[9px] font-semibold transition-opacity hover:opacity-80">
            f
          </a>
          <a href="#" aria-label="LinkedIn" className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-sm border border-white/70 text-[8px] font-semibold transition-opacity hover:opacity-80">
            in
          </a>
          <a href="#" aria-label="YouTube" className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-full border border-white/70 text-[8px] font-semibold transition-opacity hover:opacity-80">
            yt
          </a>
        </div>

        <div className="hidden items-center gap-1.5 lg:flex">
          <span className="rounded-sm bg-white/15 px-2.5 py-0.5 font-medium">WTI Crude: <span className="text-white/80">$84.65</span></span>
          <span className="rounded-sm bg-white/15 px-2.5 py-0.5 font-medium">Brent Crude: <span className="text-white/80">$84.36</span></span>
          <span className="rounded-sm bg-white/15 px-2.5 py-0.5 font-medium">Natural Gas: <span className="text-white/80">$3.06</span></span>
        </div>

        <div className="flex items-center gap-4 whitespace-nowrap text-[11px] md:gap-5">
          <a href="mailto:customer@bettercastings.com" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">customer@bettercastings.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            <span className="hidden md:inline">Open Hours: 9.30am to 5.30pm IST</span>
          </div>
        </div>
      </div>
    </div>
  )
}
