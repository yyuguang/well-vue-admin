/**
 * @author 冷暖自知
 * @date 2020/4/29 17:07
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

const api_name = '/admin/acl/user'

export default {

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/index/${page}/${limit}`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    })
  },
  save(user) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: user
    })
  },
  updateById(user) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data: user
    })
  },
  getAssign(userId) {
    return request({
      url: `${api_name}/toAssign`,
      method: 'get',
      params: {
        userId
      }
    })
  },
  saveAssign(userId, roleId) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      params: { userId, roleId }
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/remove`,
      method: 'delete',
      params: {
        id: id
      }
    })
  },
  removeRows(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  }
}
