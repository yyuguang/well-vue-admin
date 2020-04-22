<template>
  <div class="app-container">
    <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.mobile" placeholder="会员手机号"/>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-date-picker
          v-model="searchObj.begin"
          type="datetime"
          placeholder="选择开始时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="searchObj.end"
          type="datetime"
          placeholder="选择截止时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>
    <!-- 表格 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      :row-class-name="tableRowClassName"
      element-loading-text="数据加载中"
      border
      fit
      highlight-current-row>
      <el-table-column
        label="序号"
        width="80"
        align="center">
        <template slot-scope="scope">
          {{ (pageNum - 1) * pageSize + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="会员头像" align="center">
        <!-- 图片的显示 -->
        <template slot-scope="scope">
          <img :src="scope.row.avatar" width="100" height="100">
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="会员昵称" width="250" align="center"/>
      <el-table-column label="会员状态" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.isDisabled===true?'禁用':'正常' }}
        </template>
      </el-table-column>
      <el-table-column prop="mobile" label="会员手机" width="250" align="center"/>
      <el-table-column label="注册时间" width="250">
        <template slot-scope="scope">
          {{ scope.row.gmtCreate | formatDate }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250" align="center">
        <template slot-scope="scope">
          <router-link :to="'/member/detail/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-message">详情</el-button>
          </router-link>
          <el-button
            v-if="scope.row.isDisabled === false"
            type="danger"
            size="mini"
            icon="el-icon-error"
            @click="disableDataById(scope.row.id)">禁用
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
  </div>
</template>
<script>
import member from '@/api/edu/member'

export default {
  name: 'List',
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
      listLoading: true, // 是否显示loading信息
      list: null,
      pageNum: 1,
      pageSize: 10,
      total: 0,
      searchObj: {}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.isDisabled === true) {
        return 'warning-row'
      }
    },
    getList(pageNum = 1) {
      this.pageNum = pageNum
      this.listLoading = true
      member.getMemberList(this.pageNum, this.pageSize, this.searchObj)
        .then(response => {
          if (response.success === true) {
            this.list = response.data.rows
            this.total = response.data.total
          }
          this.listLoading = false
        })
    },
    resetData() {
      this.searchObj = {}
      this.getList()
    },
    disableDataById(id) {
      this.$confirm('此操作将禁用该会员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        member.disableMember(id)
          .then(response => {
            // 提示信息
            this.$message({
              type: 'success',
              message: '禁用成功!'
            })
            // 回到列表页面
            this.getList()
          })
      })
    }
  }
}
</script>

<style>
  .el-table .warning-row {
    background: #feeef0;
  }
</style>
