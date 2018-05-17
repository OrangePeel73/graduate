import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {
      title: 'home',
      activeIndex: '/'
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
      'getMasters'
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
    }
  }
}
