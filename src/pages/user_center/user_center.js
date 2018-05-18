import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'master',
  data () {
    return {
      dialogVisible: false, // 1 dialog
      formLabelWidth: '60px',
      form: {
        name: '',
        pwd: ''
      },
      loading: false,
      options: [
        {
          value: 'active',
          label: '激活'
        },
        {
          value: 'inactive',
          label: '禁用'
        }
      ],
      AIform: {
        name: '',
        opreation: ''
      }
    }
  },
  created: function () {
    this.getUsers()
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['getUsers', 'addServerUser', 'deleteServerUser', 'AIServerUser']),
    // 2 接入主机
    addUser () {
      this.$refs.addMasterForm.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.loading = true
          this.addServerUser(this.form).then((res) => {
            this.$message({
              showClose: true,
              type: 'success',
              message: `添加用户成功`
            })
            this.$refs.addMasterForm.resetFields()
            this.loading = false
          }).catch((error) => {
            console.log(error)
            this.$message({
              showClose: true,
              type: 'error',
              message: `添加用户失败`
            })
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 2 取消添加主机对话框
    cancleAddMasterForm () {
      this.dialogVisible = false
      this.$refs.addMasterForm.resetFields()
    },
    //  3 删除用户
    deleteUser (index, row) {
      console.log(row)
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteServerUser(row.name).then((res) => {
          this.$message({
            showClose: true,
            type: 'success',
            message: `删除用户成功`
          })
        }).catch((error) => {
          console.log(error)
          this.$message({
            showClose: true,
            type: 'error',
            message: `删除用户失败`
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 激活、禁用
    AIUser (index, row) {
      console.log(row)
      console.log(this.AIform)
      this.$confirm('此操作将激活/禁用该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.AIServerUser(row).then((res) => {
          this.$message({
            showClose: true,
            type: 'success',
            message: `操作成功`
          })
        }).catch((error) => {
          console.log(error)
          this.$message({
            showClose: true,
            type: 'error',
            message: `操作失败`
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    }
  }
}
