import { user, handleUserStore } from './user'
import { manage, handleManageStore } from './manage'

export const initialState = {
  user,
  manage
}

export const handleStore = (state, action) => {
  const type = action.type.split('/')
  switch (type[0]) {
    case "user":
      return { ...state, user: handleUserStore(state["user"], type[1], action.state) }
    case "manage":
      return { ...state, manage: handleManageStore(state["manage"], type[1], action.state) }
    default:
      new Error()
  }
}
