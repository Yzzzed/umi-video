import request from '@/utils/request';
import { stringify } from 'qs';
export async function queryListAll (params) {
  return request(`ListAll1?${stringify(params)}`)
}