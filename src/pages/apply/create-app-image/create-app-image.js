import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      step: 0,
      //  创建应用表单
      createAppImageForm: {
        image: '',  // 镜像名称
        service_name: '', // 应用名称
        ports: '', // 暴露端口 key：value 自定义
        restart: '', // 重启策略 none or on-failure 二选一
        mode: '', // 模式 全局或replicated
        source2target: [{ // 存储卷
          source: '',
          target: '',
          read_only: '' // yes or no
        }],
        replicas: '', // 副本树 数字
        networks: [], // 接入的网络 无
        command: '' // 执行命令
      },
      restartOpts: [{ // 重启策略选择
        value: 'none'
      }, {
        value: 'on-failure'
      }],
      read_onlys: [{  // 存储卷只读状态？
        value: '是',
        label: 'yes'
      },
      {
        value: '否',
        label: 'no'
      }],
      modes: [{ // 选择模式
        label: 'global',
        value: '全局'
      }, {
        label: 'replicated',
        value: '副本'
      }],
      loading: false, // loading
      isShow: false, // 高级展开
      rules: {
        image: [{required: true, message: '镜像不能为空', trigger: 'change'}],
        ports: [{required: true, message: '端口不能为空', trigger: 'blur'}],
        restart: [{required: true, message: '重启策略不能为空', trigger: 'change'}],
        mode: [{required: true, message: '模式不能为空', trigger: 'change'}],
        service_name: [{required: true, message: '名称不能为空', trigger: 'blur'}]
      }

    }
  },
  created: function () {
    this.getRepos()
  },
  computed: {
    ...mapGetters(['repos'])
  },
  methods: {
    ...mapActions(['getRepos', 'createServerAppImage']),
    // 重置表单
    resetForm (formName) {
      console.log(this.createAppImageForm)
      this.$refs.createAppImageForm.resetFields()
      // this.$refs.formName.resetFields()
    },
    // 通过镜像创建应用
    createAppImage (formName) {
      console.log(formName)
      this.$refs.createAppImageForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.createServerAppImage(formName).then((res) => {
            this.$message({
              showClose: true,
              message: '创建应用成功',
              type: 'success'
            })
            this.$router.push({path: '/apply/running'})
            this.loading = false
          }).catch((error) => {
            console.log(error)
            this.$message({
              showClose: true,
              message: '创建应用失败',
              type: 'error'
            })
            this.loading = false
          })
        } else {
          console.log('error submit')
          this.$message({
            showClose: true,
            type: 'warning',
            message: '请填入完整的信息！'
          })
        }
      })
    },

    //  展开高级
    showToggle () {
      // alert()
      this.isShow = !this.isShow
    }
  }
}
