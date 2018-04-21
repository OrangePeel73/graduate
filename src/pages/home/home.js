import $ from 'jquery'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {
      title: 'home'
    }
  },
  created: function () {

  },
  computed: {
    ...mapGetters(['userName'])
    // window.onresize = function () {
    //   $('.el-container').height($(window).height())
  },
  methods: {
    LoginOut () {
      localStorage.removeItem('name')
      this.$router.push({path: '/'})
    }
  }
}
