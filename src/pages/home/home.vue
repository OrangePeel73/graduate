<template>
  <el-container>
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
              <el-menu-item index="/apply/stoped"><i class="el-icon-document"></i>已停止</el-menu-item>
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
    <el-container>
      <el-header>
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

    </el-container>

    
    
</el-container>
</template>

<style lang="scss">
@import "./home.scss";
</style>


<script src="./home.js"></script>
