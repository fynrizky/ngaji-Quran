import ActionType from '@/redux/actionType'

export interface ListSurat {
    nomor: number
    namaLatin: string
    arti: string
  }

// export interface ActionStore {
//     type: typeof ActionType.ADD_LIKE
//     payload: Like
//   }

export interface ActionTheme {
    type: typeof ActionType.SET_THEME
    payload: {
      mode: string
    }
  }

  export interface ActionModal {
    type: typeof ActionType.LOADING_OPEN
    payload: {
      message: string
    }
  }
  
export interface StateModal {
    isOpen: boolean
    type: string | null
    message: string | null
  }

// export interface StateStore {
//     like: Like[]
//     bookmark: Like | null
//   }

export interface StateTheme {
    mode: string
  }


  export interface Like {
    nomorSurat: number | undefined
    nomorAyat: number | undefined
    namaSurat?: string | undefined
    url?: string | undefined
    timestamp?: number | undefined
  }

  export interface RootState {
    modal: StateModal
    // store: StateStore
    theme: StateTheme
  }