import { request } from '@/utils/request'

export function getTrends(data) {
  return request('trends', {
    data: data
  })
}
