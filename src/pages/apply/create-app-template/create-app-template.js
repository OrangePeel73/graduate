import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      active: 1,
      stepShow1: true,
      stepShow2: false,
      stepShow3: false,
      seleteTemp: {
        name: ''
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters(['templates'])
  },
  created () {
    this.getTemplates() // 1获取所有模板
  },

  watch: {
    search: {
      handler: 'getTemplates',
      immediate: true // 表示创建组件时立马执行一次
    }
  },

  methods: {
    ...mapActions(['getTemplates', 'createServerAppTemp']),
    createAppByTemp (form) {
      if (form.name) {
        console.log(form)
        this.loading = true
        this.createServerAppTemp(form).then((res) => {
          this.$message({
            showClose: true,
            message: '应用创建成功',
            type: 'success'
          })
          this.loading = false
          this.$router.push({path: '/pod'})
          this.$router.go(0) // 跳转路由后刷新页面
        }).catch((error) => {
          console.log(error)
          this.$message({
            showClose: true,
            message: '应用创建失败',
            type: 'error'
          })
          this.loading = false
        })
      } else {
        this.$message({
          showClose: true,
          message: '请选择模板！',
          type: 'warning'
        })
      }
    }

    // // step 上一步
    // upStep () {
    //   if (this.stepShow2) {
    //     this.active--
    //     this.stepShow2 = false
    //     this.stepShow1 = true
    //   } else if (this.stepShow3) {
    //     this.active--
    //     this.stepShow3 = false
    //     this.stepShow2 = true
    //   }
    // },
    // //  步骤条 下一步
    // next () {
    //   if (this.stepShow1) {
    //     this.active++
    //     this.stepShow1 = false
    //     this.stepShow2 = true
    //   }
    // }
  }
}
