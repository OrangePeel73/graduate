import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {
      title: 'home',
      // activeIndex: '/'
      loading: false,
      hadoopForm: {
        slave: ''
      },
      HadoopDialogVisible: false
    }
  },
  created: function () { // 设置默认路由
    // this.defaultIdex()
    // 获取每个模块的总数量
    this.getApplys()
    this.getRepos()
    this.getTemplates()
    this.getPods()
    this.getNetworks()
    this.getMasters()
  },
  // beforeUpdate: function () { // 设置默认路由
  //   return {
  //     activeIndex: this.$route.matched[1].path
  //   }
  // },
  computed: {
    ...mapGetters(['userName',
      'applys',
      'repos',
      'templates',
      'pods',
      'networks',
      'masters'
    ])
  },
  methods: {
    ...mapActions([
      'getApplys',
      'getRepos',
      'getTemplates',
      'getPods',
      'getNetworks',
      'getMasters',
      'bigDataServer'
    ]),
    // 设置默认路由 设置进入home路由后默认显示apply/running 路由页面
    // defaultIdex () {
    //   // let path = this.$route.path
    //   this.$router.push({path: '/apply/running'})
    //   // console.log(path)
    // },
    // 注销 去除localstorage的name属性
    LoginOut () {
      localStorage.removeItem('name') // 清除localStorage
      this.$router.push({path: '/'})
      // location.reload()
    },
    handleClick () {
      alert('button click')
    },
    // Hadoop
    createHadoop (form) {
      if (form.slave) {
        this.HadoopDialogVisible = false
        this.loading = true
        this.bigDataServer(form).then((res) => {
          this.$message({
            showClose: true,
            message: 'Hadoop环境初始化完成',
            type: 'success'
          })
          this.loading = false
        }).catch((error) => {
          console.log(error)
          this.$message({
            showClose: true,
            message: 'Hadoop环境初始化失败，请检查后再操作！',
            type: 'error'
          })
          this.loading = false
        })
      } else {
        this.$message({
          showClose: true,
          message: '请检查数据后再操作！',
          type: 'warning'
        })
      }
    },
    // 取消弹框
    callOff () {
      this.HadoopDialogVisible = false
    }
  }
}
