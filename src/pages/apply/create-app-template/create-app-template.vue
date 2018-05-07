<template>
  <div id="createAppTemp">
    <div class="step-box">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
     </el-steps>
    </div>
    <hr/>
    <CreateAppTempStep1  :stepShow.sync="stepShow"></CreateAppTempStep1>    
    <CreateAppTempStep2 v-show="stepShow"></CreateAppTempStep2>
    <CreateAppTempStep3 v-show="stepShow"></CreateAppTempStep3>
    
    
    <div class="view">
      <router-view></router-view>
    </div>

    <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
  </div>
</template>

<script src="./create-app-template.js">

</script>

