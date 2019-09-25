export const user = {
  isLogin: false
}

/**
 * @param {Object} state 这里拿到的是user state对象
 * @param {String} type dispatch类型
 * @param {Object} _state 这里拿到的是dispatch传入要修改的state
 */
export const handleUserStore = (state, type, _state) => {
  switch (type) {
    case "setLogin":
      return { ...state, isLogin: _state }
    default:
      return new Error()
  }
}