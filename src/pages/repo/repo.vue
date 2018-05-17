<template>
  <div id="repo">
    <!-- 按钮 -->
    <div class="btn-box">
      <el-button
        class="templet_btn"
        type="primary"
        icon="el-icon-plus"
        >创建镜像
      </el-button>
    </div>
    <!-- 容器盒子 -->
    <div class="content-box">
      <div class="content">
        <el-card class="box-card">
          <div class="text item">
            <el-col
              class="repos"
              :span="3"
              v-for="item in repos"
              :key="item"
              shadow="hover">
              <el-card
                class="repo_box"
                :body-style="{ padding: '0px' }"
                href="javascript:void(0)"
                shadow="hover">
                <img
                  class="image"
                  src="../../assets/templet.png"/>
                <el-tooltip placement="top">
                  <div slot="content">{{ item }}</div>
                  <el-tag class="repo-name">{{ item }}</el-tag>
                </el-tooltip>
                                       
                <div class="bottom clearfix">
                  <el-button
                    size="medium "
                    class="button"
                    icon="el-icon-delete"
                    circle
                    @click="deleteRepo(item)"></el-button>
                </div>
              </el-card>
            </el-col>
          </div>
        </el-card>
      </div>
    </div>
    <!-- {{msg}} -->
   <!-- <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :auto-upload="false"
    :before-upload="newFile">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
    -->
  </div>
</template>
<style lang="scss">
@import './repo.scss'
</style>
<script src="./repo.js"></script>

