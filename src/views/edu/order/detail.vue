<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="订单号">
        <el-input :value="order.orderNo" readonly/>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-input :value="order.courseTitle" readonly/>
      </el-form-item>
      <el-form-item label="讲师名称">
        <el-input :value="order.teacherName" readonly/>
      </el-form-item>
      <el-form-item label="会员昵称">
        <el-input :value="order.nickname" readonly/>
      </el-form-item>
      <el-form-item label="课程封面">
        <img :src="order.courseCover" width="500" height="300">
      </el-form-item>
      <el-form-item label="订单状态">
        <el-input :value="order.status===0?'未支付':'已支付'" readonly/>
      </el-form-item>
      <el-form-item label="支付类型">
        <el-input :value="order.status===1?'微信':'支付宝'" readonly/>
      </el-form-item>
      <el-form-item label="订单金额">
        <el-input :value="order.totalFee" readonly/>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input :value="order.gmtCreate | formatDate" readonly/>
      </el-form-item>
      <el-form-item>
        <router-link :to="'/client/orderList'">
          <el-button type="primary" style="width: 100px">返回</el-button>
        </router-link>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import orderApi from '@/api/edu/order'
export default {
  name: 'Detail',
  filters: {
    formatDate: function(value) {
      const date = new Date(value)
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? ('0' + MM) : MM
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let m = date.getMinutes()
      m = m < 10 ? ('0' + m) : m
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  },
  data() {
    return {
      order: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      // 判断路径有id值,做修改
      if (this.$route.params && this.$route.params.id) {
        // 从路径获取id值
        const id = this.$route.params.id
        // 调用根据id查询的方法
        this.getInfo(id)
      }
    },
    getInfo(id) {
      orderApi.getOrderInfo(id)
        .then(response => {
          this.order = response.data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
