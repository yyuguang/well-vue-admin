/**
 * @author 冷暖自知
 * @date 2020/4/28 15:58
 * @version 1.0
 * @Description 订单api
 */
import request from '@/utils/request'

export default {

  getOrderList(pageNum, pageSize, searchObj) {
    return request({
      url: `/orderservice/edu-order-admin/list/${pageNum}/${pageSize}`,
      method: 'post',
      data: searchObj
    })
  },
  getOrderInfo(id) {
    return request({
      url: '/orderservice/edu-order-admin/getOrderInfo',
      method: 'get',
      params: {
        id: id
      }
    })
  },
  deleteOrder(id) {
    return request({
      url: '/orderservice/edu-order-admin/delete',
      method: 'delete',
      params: {
        id: id
      }
    })
  }

}
