import ActionType from '@/redux/actionType'

export interface ActionStore {
    type: typeof ActionType.ADD_LIKE
    payload: Like
  }
  
export interface StateStore {
    like: Like[]
    bookmark: Like | null
  }

export interface ListSurat {
    nomor: number
    namaLatin: string
    arti: string
  }

  export interface Like {
    nomorSurat: number | undefined
    nomorAyat: number | undefined
    namaSurat?: string | undefined
    url?: string | undefined
    timestamp?: number | undefined
  }