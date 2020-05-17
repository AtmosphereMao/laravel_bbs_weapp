import { request } from '@/utils/request'

export function login(data) {
  return request('authorizations/login', {
    method: 'post',
    data: data
  })
}
