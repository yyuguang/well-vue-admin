/**
 * @author 冷暖自知
 * @date 2020/4/14 9:56
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  getList() {
    return request({
      url: '/eduservice/edu-teacher/list',
      method: 'get'
    })
  },
  getTeacherListPage(pageNum, pageSize, teacherQueryVo) {
    return request({
      url: `/eduservice/edu-teacher/pageByKeys/${pageNum}/${pageSize}`,
      method: 'post',
      data: teacherQueryVo
    })
  },
  deleteTeacherById(id) {
    return request({
      url: `/eduservice/edu-teacher/delete/${id}`,
      method: 'delete'
    })
  },
  addTeacher(eduTeacher) {
    return request({
      url: '/eduservice/edu-teacher/save',
      method: 'post',
      data: eduTeacher
    })
  },
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/edu-teacher/getById/${id}`,
      method: 'get'
    })
  },
  editTeacher(eduTeacher) {
    return request({
      url: '/eduservice/edu-teacher/update',
      method: 'post',
      data: eduTeacher
    })
  }

}

