<template>
  <div 
    id="createAppTemp"
    v-loading="loading"
    element-loading-text="正在部署中...">
    <!-- <div class="step-box">
      <el-steps :active="active" finish-status="success" >
        <el-step title="选择模板"></el-step>
        <el-step title="部署"></el-step>
     </el-steps>
    </div> -->
    <!-- <CreateAppTempStep1  :stepShow1.sync="stepShow1"></CreateAppTempStep1>    
    <CreateAppTempStep2  :stepShow2.sync="stepShow2"></CreateAppTempStep2>
    <el-button style="margin-top: 12px;" @click="upStep" v-if="!stepShow1">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next" v-if="!stepShow2">下一步</el-button>
    <el-button style="margin-top: 12px;" v-if="stepShow2">立即部署</el-button> -->
  
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>选择应用模板</span>
    </div>
    <div  class="text item">
      <el-row>
        <el-radio-group v-model="seleteTemp.name" :span="6">
          <el-col >
            <el-radio :label="item" v-for="item in templates" :key="item">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img src="@/assets/templet_1.png" class="image">
                <div style="padding: 14px;">
                  <span><el-tag>{{ item }}</el-tag></span>
                  <div class="bottom clearfix">
                  </div>
                </div>
              </el-card>
            </el-radio>
          </el-col>
        </el-radio-group>
      </el-row>

      <el-row>
        <el-button @click="createAppByTemp(seleteTemp)">立即部署</el-button>
      </el-row>
    </div>
  </el-card>

  </div>
</template>

<style lang="scss" scoped>
#createAppTemp{
  .box-card{
    .el-card__body{
      .item{
        .el-row{
          .el-radio-group{
           .el-col{
             .el-radio{
               position: relative;
              //  单选框的选中圆点
                .el-radio__input{
                  // position: absolute;
                  top: 22px;
                  left: -82px;
                }
                .el-radio__label{
                  .el-card{
                    width: 200px;
                    .el-card__body{
                       img{
                        width: 160px;
                        height: 160px;
                        display: block;
                        margin-top: 18px;
                      }
                    }
                   
                  }   
                }
             }
           } 
          }
        }
      }
    }
  }
  // .el-card__body{
  //   img{
  //     width: 240px;
  //     display: inline-block;
  //   }
  // }
}
</style>


<script src="./create-app-template.js">

</script>

