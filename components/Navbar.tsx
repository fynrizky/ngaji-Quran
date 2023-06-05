'use client'
import * as React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setTheme } from '@/redux/actions/theme'
import ToggleDarkMode from './ToggleDarkMode'
import ProgressBar from './ProgressBar'

const Navbar = () => {
  const [scrollY, setScrollY] = React.useState<number>(0)
  const dispatch = useDispatch()

  React.useEffect(()=> {
    function handleScroll() {
      setScrollY(window.scrollY)
    }

    dispatch(setTheme(localStorage.getItem('theme') as string))

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  return (
    <nav
      className={`h-[70px] bg-white/50 dark:bg-slate-800/70 backdrop-blur-lg sticky top-0 z-10 ${
        scrollY > 100 && 'shadow-md shadow-grey-700 dark:shadow-slate-700'
      }`}>
      {/*  */}
      <ProgressBar />
      <div className="flex justify-between items-center px-4 sm:px-10 my-3">
        <Link
          href="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-2 sm:gap-4">
          {/*  */}
          <h1 className="text-[22px] sm:text-[25px] font-bold italic text-[var(--primary)] drop-shadow-md ">
           ngaji-Quran
          </h1>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <ToggleDarkMode />
        </div>
      </div>
    </nav>
  )
}

export default Navbar