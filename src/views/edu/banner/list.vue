<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table
      v-loading="listLoading"
      :data="list"
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
      <el-table-column prop="title" width="250" label="标题" align="center"/>
      <el-table-column prop="imageUrl" label="图片">
        <!-- 图片的显示 -->
        <template slot-scope="scope">
          <img :src="scope.row.imageUrl" width="200" height="120">
        </template>
      </el-table-column>
      <el-table-column label="添加时间" width="250" align="center">
        <template slot-scope="scope">
          {{ scope.row.gmtCreate | formatDate }}
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="200" align="center"/>
      <el-table-column prop="linkUrl" label="路由" width="200" align="center"/>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <router-link :to="'/banner/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除
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
import banner from '@/api/edu/banner'

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
      listLoading: false, // 是否显示loading信息
      list: null,
      pageNum: 1,
      pageSize: 10,
      total: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(pageNum = 1) {
      this.pageNum = pageNum
      this.listLoading = true
      banner.getList(this.pageNum, this.pageSize)
        .then(response => {
          if (response.success === true) {
            this.list = response.data.items
            this.total = response.data.total
          }
          this.listLoading = false
        })
    },
    removeDataById(id) {
      this.$confirm('此操作将永久删除课程记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 点击确定，执行then方法
        // 调用删除的方法
        banner.deleteBanner(id)
          .then(response => { // 删除成功
            // 提示信息
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            // 回到列表页面
            this.getList()
          })
      })
    }
  }
}
</script>

<style scoped>

</style>
