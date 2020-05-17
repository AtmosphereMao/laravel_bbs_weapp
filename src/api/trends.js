import { request } from '@/utils/request'

export function getTrends(id, data) {
  return request('trends/' + id, {
    data: data
  })
}
