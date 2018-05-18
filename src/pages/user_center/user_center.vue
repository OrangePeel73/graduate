<template>
  <div
    class="user"
    v-loading="loading"
    element-loading-text="正在添加...">
    <!-- {{msg}} -->
    <!-- <el-card class="box-card"> -->
      <div class="box-card">
        <!-- 添加用户 -->
        <div class="create-master">
          <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">添加用户</el-button>
        </div>

        <!-- 用户列表 -->
        <div class="master-content">
          <el-card class="box-card">
            <el-table
              :data="users"
              style="width: 98%"
              stripe>
              <el-table-column
                prop="name"
                label="用户名">
              </el-table-column>
      
              <el-table-column
                label="状态">
                <template slot-scope="scope">
                  <el-tag type="success">
                    {{scope.row.status}}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row.name !=='admin'"
                    size="mini"
                    type="danger"
                    @click="deleteUser(scope.$index, scope.row)"
                    >删除
                  </el-button>
                  <el-button
                    v-else
                    disabled
                    size="mini"
                    type="danger"
                    @click="deleteUser(scope.$index, scope.row)"
                    >删除</el-button>
              <!-- 激活、禁用 -->
                  <el-button
                    v-if="scope.row.name !=='admin'"
                    size="mini"
                    type="danger"
                    @click="AIUser(scope.$index, scope.row)"
                    >禁用
                  </el-button>
                  <el-button
                    v-else
                    disabled
                    size="mini"
                    type="danger"
                    @click="AIUser(scope.$index, scope.row)"
                    >禁用
                  </el-button>
                </template>
              </el-table-column>

            </el-table>
          </el-card>
        </div>
      </div>
    <!-- </el-card> -->


    <!-- dialog -->
    <el-dialog
      title="接入主机"
      :visible.sync="dialogVisible"
      width="30%">
      
      <el-form :model="form"
        ref="addMasterForm"
        status-icon='true'
        :rules="rules">
        <el-form-item
          label="用户名"
          :label-width="formLabelWidth">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          :label-width="formLabelWidth">
          <el-input v-model="form.pwd" clearable></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancleAddMasterForm">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style lang="scss">
@import './user_center.scss'
</style>

<script src="./user_center.js"></script>