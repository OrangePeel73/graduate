<template>
  <div v-show="stepShow1">
    {{ templates}}
  </div>
  
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    stepShow1: { type: Boolean }
  },

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['templates'])
  },
  created () {
    this.getTemplates() // 1获取所有模板
  },
  methods: {
    ...mapActions(['getTemplates'])
    // next () {
    //   this.$emit('update:stepShow1', false)
    //   this.$emit('update:stepShow2', true)
    // }
  }
}
</script>

