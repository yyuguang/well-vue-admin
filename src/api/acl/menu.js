/**
 * @author 冷暖自知
 * @date 2020/4/29 17:06
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

const api_name = '/admin/acl/permission'

export default {
  getNestedTreeList() {
    return request({
      url: `${api_name}/indexAllPermission`,
      method: 'get'
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
  saveLevelOne(menu) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: menu
    })
  },
  update(menu) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data: menu
    })
  },
  toAssign(roleId) {
    return request({
      url: `${api_name}/toAssign`,
      method: 'get',
      params: {
        roleId: roleId
      }
    })
  },
  doAssign(roleId, permissionId) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      params: {
        roleId: roleId,
        permissionId: permissionId
      }
    })
  }
}
