<template>
  <el-container >
    <!-- 侧栏导航 -->
    <el-aside width="200px" >
      <div class="nav_logo"></div>
      <el-row class="container"><!--导航-->
      <el-col :span='24'  class="nav">
        <!-- :default-active="$route.path" router="true"
         进入子路由 或者跳转路由时保持导航激活状态 -->
        <el-menu 
          router="true"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="#fafafa"
          active-text-color="#ffd04b">
          <el-submenu index="/apply">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>
                <el-badge :value="applys.length" class="item">应用</el-badge>
              </span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/apply/running">
                <i class="el-icon-document"></i>
                <el-badge :value="applys.length" class="item">正在运行</el-badge>
              </el-menu-item>
              <!-- <el-menu-item index="/apply/stoped"><i class="el-icon-document"></i>已停止</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="/repo">
            <i class="el-icon-menu"></i>
            <span slot="title">
              <el-badge :value="repos.length" class="item">镜像仓库</el-badge>
            </span>
          </el-menu-item>

          <el-menu-item index="/apply_templet">
            <i class="el-icon-goods"></i>
            <span slot="title">
              <el-badge :value="templates.length" class="item">应用模板</el-badge>
            </span>
          </el-menu-item>

          <el-menu-item index="/pod">
            <i class="el-icon-goods"></i> 
            <span slot="title">
              <el-badge :value="pods.length" class="item">容器</el-badge>
            </span>
          </el-menu-item>

          <el-menu-item index="/internet">
            <i class="el-icon-sort"></i>
            <span slot="title">
              <el-badge :value="networks.length" class="item">网络</el-badge>
            </span>
          </el-menu-item>

          <el-menu-item index="/master">
            <i class="el-icon-star-on"></i>
            <span slot="title">
              <el-badge :value="masters.length" class="item">主机</el-badge>
            </span>
          </el-menu-item>

          <el-menu-item index="/user_center">
            <i class="el-icon-setting"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
          
        </el-menu>
      </el-col>    
    </el-row>
 
    </el-aside>
    
    <!--右侧  -->
    <el-container
      v-loading="loading"
      element-loading-text="初始化中...">
      <el-header>

        <div class="bigdata">
          <!-- <el-dropdown split-button class="downBtn">
            大数据处理
            <el-dropdown-menu slot="dropdown"> -->
              <!-- el-dropdown-item没有自定义click事件, 两个解决办法:
               使用原生click事件: @click.native = "createHadoop"
               使用菜单项的指令事件:el-dropdown @command="handleCommand" 
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>-->

              <!-- <el-dropdown-item @click.native ="HadoopDialogVisible = true">Hadoop</el-dropdown-item>
              <el-dropdown-item>上传程序包</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
        </div>

        <div class="amdin">
          <el-dropdown @command="LoginOut">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item  @click="LoginOut">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 右侧main -->
      <el-main>
        <el-col><!--放置路由 显示-->
          <router-view/>
        </el-col>
      </el-main>

      <!-- 右侧footer -->
      <el-footer>
        <p>CopyRight @Grace</p>
      </el-footer>
    <!-- </di5v> -->
    </el-container>

<!-- hadoop dialog -->
    <el-dialog
      title="初始化Hadoop"
      :visible.sync="HadoopDialogVisible"
      width="30%"
      center>
      <el-form
        :label-position="left"
        label-width="80px"
        :model="hadoopForm"
        ref="hadoopForm">
        <el-form-item label="数量">
          <el-input v-model.number="hadoopForm.slave"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="callOff">取 消</el-button>
        <el-button type="primary" @click="createHadoop(hadoopForm)">确 定</el-button>
      </span>
    </el-dialog>
    
</el-container>
</template>

<style lang="scss">
@import "./home.scss";
</style>


<script src="./home.js"></script>
