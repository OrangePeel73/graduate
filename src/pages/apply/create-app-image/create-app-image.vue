<template>
  <div id="create-app-image">
    <el-card
      class="box-card"
      v-loading="loading"
      element-loading-text="正在创建应用...">
      <div slot="header" class="title clearfix">
        <span>通过镜像部署应用</span>
      </div>
      <div class="content">
        <el-form
          :label-position="left"
          label-width="80px"
          :model="createAppImageForm"
          ref="createAppImageForm"
          :rules="rules">
          <el-form-item label="选择镜像" prop="image">
            <el-select v-model="createAppImageForm.image" filterable placeholder="请选择镜像">
              <el-option
                v-for="item in repos"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="应用名称" prop="service_name">
            <el-input
              v-model="createAppImageForm.service_name"
              placeholder="请填写应用名称">
            </el-input>
          </el-form-item>

          <el-form-item label="暴露端口" prop="ports">
            <el-input
              v-model="createAppImageForm.ports"
              placeholder="例如: port:80">
            </el-input>
          </el-form-item>

          <el-form-item label="重启策略" prop="restart">
            <el-select v-model="createAppImageForm.restart" placeholder="请选择重启策略">
              <el-option
                v-for="item in restartOpts"
                :key="item.value"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="模式" prop="mode">
            <el-select v-model="createAppImageForm.mode" placeholder="请选择模式">
              <el-option
                v-for="item in modes"
                :key="item.value"
                :label="item.value"
                :value="item.label">
              </el-option>
            </el-select>
            
          </el-form-item>

        <transition name="highBox">
          <div class="high" v-show="isShow">
            <el-form-item label="存储卷">
              <div class="input">
                <el-input
                  v-model="createAppImageForm.source2target[0].source"
                  placeholder="例如: /root">
                </el-input>
              </div>
              <div class="input">
                <el-input
                  v-model="createAppImageForm.source2target[0].target"
                  placeholder="例如: /">
                </el-input>
              </div>
              <div class="input">
                <el-select
                  v-model="createAppImageForm.source2target[0].read_only"
                  placeholder="请选择存储卷只读形式">
                  <el-option
                    v-for="item in read_onlys"
                    :key="item.value"
                    :label="item.value"
                    :value="item.label">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>

            <el-form-item label="副本数">
              <el-input
                v-model="createAppImageForm.replicas"
                placeholder="请填入整数，例如1,2,3...">
              </el-input>
            </el-form-item>

            <el-form-item label="执行命令">
              <el-input
                v-model="createAppImageForm.command"
                placeholder="例如sleep 3000">
              </el-input>
              
            </el-form-item>
            
          </div>
        </transition>

        <!-- <transition name="boxBtn" mode="out-in"> -->
          <el-form-item >
          <div @click="showToggle">
            <span class="el-dropdown-link">
              高级<i class="el-icon-caret-bottom el-icon--left"></i>
            </span>
          </div>
        </el-form-item>
        <!-- </transitio/n> -->

          <el-form-item>
            <el-button type="primary" @click="createAppImage(createAppImageForm)">立即创建</el-button>
            <el-button @click="resetForm(createAppImageForm)">重置</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
    
  </div>
</template>

<style lang="scss">
@import './create-app-image.scss'
</style>

<script src="./create-app-image.js"></script>

