/**
 * @author 冷暖自知
 * @date 2020/4/15 15:22
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {

  getSubjectList() {
    return request({
      url: '/eduservice/edu-subject/list',
      method: 'get'
    })
  }

}

