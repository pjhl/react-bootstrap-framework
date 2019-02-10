const initialState = {
  say: 'Hello!'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_SAY':
      return {
        say: action.payload
      }
    default:
      return state
  }
}
