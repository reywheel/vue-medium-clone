export const setItem = (key, data) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('Error adding information in localStorage')
  }
}

export const getItem = key => {
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (e) {
    console.log('Error getting information from localStorage')
    return null
  }
}
