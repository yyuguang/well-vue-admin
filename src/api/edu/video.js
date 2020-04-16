/**
 * @author 冷暖自知
 * @date 2020/4/16 16:51
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  addVideo(videoInfo) {
    return request({
      url: '/eduservice/edu-video/save',
      method: 'post',
      data: videoInfo
    })
  },
  deleteVideo(videoId) {
    return request({
      url: '/eduservice/edu-video/delete',
      method: 'delete',
      params: {
        videoId: videoId
      }
    })
  },
  updateVideo(videoInfo) {
    return request({
      url: '/eduservice/edu-video/update',
      method: 'post',
      data: videoInfo
    })
  },
  getOneById(videoId) {
    return request({
      url: '/eduservice/edu-video/getOneById',
      method: 'get',
      params: {
        videoId: videoId
      }
    })
  }
}

