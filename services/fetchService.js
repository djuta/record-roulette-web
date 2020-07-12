import GlobalMessage from '../models/GlobalMessage'

export default async (url, dispatch, errorMessage) => {
  try {
    const res = await fetch(url)
    const json = await res.json()
    if (!res.ok) {
      throw json.message
    }
    return json
  } catch (serverError) {
    const errorText = errorMessage || serverError || 'An error occured.'
    const message = new GlobalMessage(errorText, 'error')
    dispatch('setGlobalMessage', message, { root: 'true' })
    throw new Error(errorText)
  }
}
