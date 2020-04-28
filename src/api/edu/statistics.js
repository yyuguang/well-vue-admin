/**
 * @author 冷暖自知
 * @date 2020/4/28 20:36
 * @version 1.0
 * @Description 统计分析JS
 */
import request from '@/utils/request'

export default {

  createStatistics(day) {
    return request({
      url: '/staservice/statistics-daily/registerCount',
      method: 'post',
      params: {
        day: day
      }
    })
  },
  showChart(searchObj) {
    return request({
      url: '/staservice/statistics-daily/showData',
      method: 'get',
      params: {
        begin: searchObj.begin,
        end: searchObj.end,
        type: searchObj.type
      }
    })
  }
}
