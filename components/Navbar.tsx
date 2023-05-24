import * as React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav
      className={`h-[70px] bg-white/50 dark:bg-slate-800/70 backdrop-blur-lg sticky top-0 z-10 shadow-md shadow-grey-700 dark:shadow-slate-700`}>
        {/*  */}
      <div className="flex justify-between items-center px-4 sm:px-10 my-3">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-4">
          {/*  */}
          <h1 className="text-[22px] sm:text-[25px] font-bold italic text-[var(--primary)] drop-shadow-md ">
           ngaji'in-Ajaa
          </h1>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          {/*  */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar