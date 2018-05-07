<template>
  <div id="network">
    <el-card class="box-card">
      <div class="text item">
        <el-table
          :data="networks"
          style="width: 100%"
          stripe>

          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>

          <el-table-column label="可用范围">
            <template slot-scope="scope">
              <el-tag type="info" v-if="scope.row.scope === 'swarm'">
                可跨主机
              </el-tag>
              <el-tag type="info" v-if="scope.row.scope === 'local'">
                只限本机
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column label="驱动类型">
            <template slot-scope="scope">
              <el-tag type="info" >
                {{scope.row.driver}}
              </el-tag>
              
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <!-- <router-view></router-view> -->
  </div>
</template>

<style lang="scss">
@import './network.scss'
</style>
<script src="./network.js"></script>