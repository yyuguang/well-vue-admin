/**
 * @author 冷暖自知
 * @date 2020/4/15 17:28
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {

  saveCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/edu-course/saveCourseInfo',
      method: 'post',
      data: courseInfo
    })
  },
  getListTeacher() {
    return request({
      url: '/eduservice/edu-teacher/list',
      method: 'get'
    })
  }

}
