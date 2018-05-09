<template>
  <div v-show="stepShow2">
    step2
     <!-- <el-button style="margin-top: 12px;" >下一步</el-button> -->
  </div>
</template>

<script>
export default {
  props: {
    stepShow2: { type: Boolean }
  },

  data () {
    return {
    }
  },
  computed: {
  },
  created () {

  },
  methods: {
  }
}
</script>
