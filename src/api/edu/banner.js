/**
 * @author 冷暖自知
 * @date 2020/4/20 9:24
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  getList(pageNum, pageSize) {
    return request({
      url: '/educms/cms-banner-admin/list',
      method: 'get',
      params: {
        pageNum: pageNum,
        pageSize: pageSize
      }
    })
  },
  saveBanner(cmsBanner) {
    return request({
      url: '/educms/cms-banner-admin/save',
      method: 'post',
      data: cmsBanner
    })
  },
  getBannerInfo(id) {
    return request({
      url: '/educms/cms-banner-admin/getOne',
      method: 'get',
      params: {
        id: id
      }
    })
  },
  editBanner(cmsBanner) {
    return request({
      url: '/educms/cms-banner-admin/update',
      method: 'post',
      data: cmsBanner
    })
  },
  deleteBanner(id) {
    return request({
      url: '/educms/cms-banner-admin/delete',
      method: 'delete',
      params: {
        id: id
      }
    })
  }
}
