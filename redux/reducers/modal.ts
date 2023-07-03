import { ActionModalTafsir, ActionModal, StateModal} from '@/interfaces'
import ActionType from '../actionType'

const initState: StateModal = {
  isOpen: false,
  type: null,
  message: null,
}


const reducerModal = (
  state: StateModal = initState,
  action: ActionModal | ActionModalTafsir
): StateModal => {
  switch (action?.type) {
    case ActionType.LOADING_OPEN:
      return {
        isOpen: true,
        type: 'loading',
        message: action.payload.message,
      }
    case ActionType.MODAL_TAFSIR_OPEN:
      return {
        isOpen: true,
        type: 'tafsir',
        message: action.payload.message,
      }
    case ActionType.MESSAGE_SORRY:
      return {
        isOpen: true,
        type: 'sorry',
        message: null,
      }
    case ActionType.UNSET_MODAL:
      return {
        ...state,
        isOpen: false,
        type: null,
      }






      default:
      return state
  }
}

export default reducerModal