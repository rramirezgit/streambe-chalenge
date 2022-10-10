import axios from 'axios'

export const get = async (url: string): Promise<any> => {
  return await axios.get(url)
}
