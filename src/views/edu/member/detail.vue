<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="会员昵称">
        <el-input :value="member.nickname" disabled/>
      </el-form-item>
      <el-form-item label="会员头像">
        <img :src="member.avatar" width="200" height="200">
      </el-form-item>
      <el-form-item label="年龄">
        <el-input :value="member.age" disabled/>
      </el-form-item>
      <el-form-item label="会员状态">
        <el-input :value="member.isDisabled===true?'禁用':'正常'" disabled/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input :value="member.mobile" disabled/>
      </el-form-item>
      <el-form-item label="性别">
        <el-input :value="member.sex===1?'女':'男'" disabled/>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-input :value="member.gmtCreate | formatDate" disabled/>
      </el-form-item>
      <el-form-item>
        <router-link :to="'/member/list'">
          <el-button type="primary" style="width: 100px">返回</el-button>
        </router-link>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import memberApi from '@/api/edu/member'

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
      member: {
        age: '',
        avatar: '',
        gmtCreate: '',
        isDisabled: '',
        mobile: '',
        nickname: '',
        sex: ''
      }
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
      memberApi.getMemberInfo(id)
        .then(response => {
          this.member = response.data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
