export const manage = {
  isLogin: false
}

export const handleManageStore = (state, type, _state) => {
  switch (type) {
    case "setLogin":
      return { ...state, isLogin: _state }
    default:
      return new Error()
  }
}