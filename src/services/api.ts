import axios from 'axios'
import { MethodType } from '../types/Service'

type ApiPropsType<T> = {
  method: MethodType
  url: string
  params?: T
}
export const api = async <T>({ method, url, params }: ApiPropsType<T>) => {
  return await axios[method](
    `https://freuders-web-api-test-3.azurewebsites.net/api/${url}`,
    params || {},
  )
}
