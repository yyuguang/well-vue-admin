/**
 * @author 冷暖自知
 * @date 2020/4/15 17:28
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  /**
   * 保存课程基本信息
   * @param courseInfo
   */
  saveCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/edu-course/save',
      method: 'post',
      data: courseInfo
    })
  },
  /**
   * 获取list
   */
  getListTeacher() {
    return request({
      url: '/eduservice/edu-teacher/list',
      method: 'get'
    })
  },
  /**
   * 通过课程id获取课程基本信息
   * @param courseId
   */
  getOneById(courseId) {
    return request({
      url: '/eduservice/edu-course/getOneById',
      method: 'get',
      params: {
        courseId: courseId
      }
    })
  },
  /**
   * 修改课程基本信息
   * @param courseInfo
   */
  updateCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/edu-course/update',
      method: 'post',
      data: courseInfo
    })
  }

}
