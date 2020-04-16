/**
 * @author 冷暖自知
 * @date 2020/4/16 14:54
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  /**
   * 通过课程id获取章节小节list
   * @param courseId
   */
  getChapterAndVideoListByCourseId(courseId) {
    return request({
      url: '/eduservice/edu-chapter/list',
      method: 'get',
      params: {
        courseId: courseId
      }
    })
  },
  addChapter(chapterInfo) {
    return request({
      url: '/eduservice/edu-chapter/save',
      method: 'post',
      data: chapterInfo
    })
  },
  updateChapter(chapterInfo) {
    return request({
      url: '/eduservice/edu-chapter/update',
      method: 'post',
      data: chapterInfo
    })
  },
  getOneById(chapterId) {
    return request({
      url: '/eduservice/edu-chapter/getOneById',
      method: 'get',
      params: {
        chapterId: chapterId
      }
    })
  },
  deleteChapter(chapterId) {
    return request({
      url: '/eduservice/edu-chapter/delete',
      method: 'delete',
      params: {
        chapterId: chapterId
      }
    })
  }
}
