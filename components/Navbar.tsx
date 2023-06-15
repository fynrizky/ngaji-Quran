'use client'
import * as React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '@/redux/actions/theme'
import ToggleDarkMode from './ToggleDarkMode'
import ProgressBar from './ProgressBar'
import Image from 'next/image'
import LOGO from '../assets/logo_ku.png'
import ButtonNav from './ButtonNav'
import { RootState } from '@/interfaces'
import SaveStore from '@/services/SaveStore'
import { restore } from '@/redux/actions/store'


const Navbar = () => {
  const stores = useSelector((state: RootState) => state.store)
  const [scrollY, setScrollY] = React.useState<number>(0)
  const dispatch = useDispatch()

  React.useEffect(()=> {
    function handleScroll() {
      setScrollY(window.scrollY)
    }

    dispatch(restore())
    dispatch(setTheme(localStorage.getItem('theme') as string))

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  React.useEffect(()=> {
    SaveStore(stores)
  },[stores]) 

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
          <Image
            src={LOGO}
            width={70}
            height={70}
            alt="logo alquran ku"
            className="cursor-pointer"
          />
          <h1 className="text-[22px] sm:text-[25px] font-bold italic text-[var(--primary)] drop-shadow-md ">
           ngaji-Quran
          </h1>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <ToggleDarkMode />
          <ButtonNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar