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

        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>

        <el-form
          :label-position="left"
          label-width="80px"
          :model="createAppImageForm"
          ref="createAppImageForm">
          <el-form-item label="选择镜像">
            <el-select v-model="createAppImageForm.image" filterable placeholder="请选择镜像">
              <el-option
                v-for="item in repos"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="应用名称">
            <el-input
              v-model="createAppImageForm.service_name"
              placeholder="请填写应用名称"
              auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="暴露端口">
            <el-input
              v-model="createAppImageForm.ports"
              placeholder="例如: port:80">
            </el-input>
          </el-form-item>

          <el-form-item label="重启策略">
            <el-select v-model="createAppImageForm.restart" placeholder="请选择重启策略">
              <el-option
                v-for="item in restartOpts"
                :key="item.value"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="模式">
            <el-select v-model="createAppImageForm.mode" placeholder="请选择模式">
              <el-option
                v-for="item in modes"
                :key="item.value"
                :label="item.value"
                :value="item.label">
              </el-option>
            </el-select>
          </el-form-item>

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
            <el-collapse v-model="activeNames" @change="handleChange">
              
             <el-collapse-item title="执行命令" name="1">
           <el-input
              v-model="createAppImageForm.command"
              placeholder="例如sleep 3000">
            </el-input>
          </el-collapse-item>
            </el-collapse>
            
          </el-form-item>

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

