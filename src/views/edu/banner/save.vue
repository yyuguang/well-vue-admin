<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="Banner标题">
        <el-input v-model="banner.title" autofocus/>
      </el-form-item>
      <el-form-item label="Banner排序">
        <el-input-number v-model="banner.sort" :min="0" controls-position="right"/>
      </el-form-item>
      <el-form-item label="Banner路由">
        <el-input v-model="banner.linkUrl"/>
      </el-form-item>
      <!-- Banner图片 -->
      <el-form-item label="Banner图片">
        <el-upload
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :action="BASE_API+'/eduoss/fileoss/uploadOssFile'"
          class="avatar-uploader">
          <img v-if="banner.imageUrl" :src="banner.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img :src="banner.imageUrl" width="100%" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import banner from '@/api/edu/banner'

export default {
  name: 'Save',
  data() {
    return {
      banner: {
        title: '',
        sort: 0,
        linkUrl: '',
        imageUrl: ''
      },
      dialogVisible: false,
      BASE_API: process.env.BASE_API // 获取dev.env.js里面地址
    }
  },
  watch: { // 监听
    $route(to, from) { // 路由变化方式，路由发生变化，方法就会执行
      this.init()
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
      } else { // 路径没有id值，做添加
        // 清空表单
        this.banner = {}
        this.banner.sort = 0
      }
    },
    /**
       * 根据讲师id获取讲师信息
       * @param id
       */
    getInfo(id) {
      banner.getBannerInfo(id)
        .then(response => {
          this.banner = response.data.data
        })
    },
    handleAvatarSuccess(res, file) {
      this.banner.imageUrl = file.response.data.url
      this.dialogVisible = true
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    saveOrUpdate() {
      if (!this.banner.id) {
        // 添加
        this.saveBanner()
      } else {
        // 修改
        this.updateBanner()
      }
    },
    saveBanner() {
      banner.saveBanner(this.banner)
        .then(response => {
          if (response.success === true) {
            this.$message({
              type: 'success',
              message: '添加成功!'
            })
            this.$router.push({ path: '/banner/list' })
          }
        })
    },
    updateBanner() {
      banner.editBanner(this.banner)
        .then(response => {
          if (response.success === true) {
          // 提示信息
            this.$message({
              type: 'success',
              message: '修改成功!'
            })
          }
          this.$router.push({ path: '/banner/list' })
        })
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 500px;
    height: 250px;
    line-height: 250px;
    text-align: center;
  }

  .avatar {
    width: 500px;
    height: 250px;
    display: block;
  }
</style>
