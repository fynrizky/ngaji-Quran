'use client'
import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, detailSurat } from '@/interfaces'
import { unsetModal } from '@/redux/actions/modal'
import useSWR from 'swr'
import { removeBook } from '@/redux/actions/store'

async function fetchData(ayatTafsir: string) {
    const res = await fetch(`https://equran.id/api/v2${ayatTafsir}`)
    const data = await res.json()
    return data.data
  }
  


export default function ModalTafsir({params} : {params : {nosurat: string}}) {
    const { isOpen, type, message } = useSelector((state:RootState) => state.modal)
    const { data, error } = useSWR(`/tafsir/${params.nosurat}?ayat=${message}`, fetchData)
    const [detail, setDetail] = React.useState<detailSurat | undefined>(undefined)
    const [selectedAyat, setSelectedAyat] = React.useState<number | null>(null)
    const dispatch = useDispatch()
    
    React.useEffect(()=> {
        setDetail(data)
        setSelectedAyat(message ? parseInt(message) : null)
        
    },[data, message])

    if (error) return <div>Failed to load data</div>
    
    return (
        <Transition appear show={isOpen && type === 'tafsir'} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" 
            onClose={() => {
                dispatch(unsetModal())
                dispatch(removeBook())
                
                }}>
                <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-50" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                         as={React.Fragment}
                         enter="ease-out duration-300"
                         enterFrom="opacity-0 scale-95"
                         enterTo="opacity-100 scale-100"
                         leave="ease-in duration-200"
                         leaveFrom="opacity-100 scale-100"
                         leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-4 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="div" className="arab text-[24px] flex justify-center">
                                    {/* <LoadingAnimate /> */}
                                    {detail?.nama}
                                </Dialog.Title>

                                <div className="h-max flex flex-col gap-2">
                                    {Array.isArray(detail?.tafsir) &&
                                        detail?.tafsir?.map((tafsir) => {
                                            if (tafsir.ayat === selectedAyat) {
                                                return (
                                            <div key={tafsir.ayat} className="bg-white/50 backdrop-blur-sm rounded-[10px] p-4 sm:p-5 flex flex-col gap-2 dark:bg-slate-700/50">
                                                <p className="text-[24px] font-semibold text-gray-400">{detail?.namaLatin}</p>
                                                <p className="text-[16px] font-semibold text-gray-400">
                                                {detail?.tempatTurun} • {detail?.arti} • {detail?.jumlahAyat} Ayat
                                                </p>
                                                <p className="text-[14px] font-semibold text-gray-400">{detail?.nomor} : {tafsir.ayat}</p>
                                                <p className="text-sm font-YatraOne text-gray-400 text-justify whitespace-pre-wrap my-2">{tafsir.teks}</p>
                                            </div>
                                            )
                                        }
                                        return null
                                    })}
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

