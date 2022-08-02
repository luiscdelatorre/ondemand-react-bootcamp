const KEY = 'redux'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(KEY)
    if (!serializedState) {
      return undefined
    }
    return JSON.parse(serializedState) 
  } catch (e) {
    console.error('failed to load state')
    return undefined
  }
}

const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(KEY, serializedState)
  } catch (e) {
    console.error('failed to save state')
  }
}

export {
 saveState, loadState 
}
