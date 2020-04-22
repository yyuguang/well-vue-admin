/**
 * @author 冷暖自知
 * @date 2020/4/22 14:39
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {

  getMemberList(pageNum, pageSize, searchObj) {
    return request({
      url: `/eduucenter/edu-ucenter-admin/list/${pageNum}/${pageSize}`,
      method: 'post',
      data: searchObj
    })
  },
  getMemberInfo(id) {
    return request({
      url: '/eduucenter/edu-ucenter-admin/getMemberInfo',
      method: 'get',
      params: {
        id: id
      }
    })
  },
  disableMember(id) {
    return request({
      url: '/eduucenter/edu-ucenter-admin/disableMemberById',
      method: 'post',
      params: {
        id: id
      }
    })
  }

}
