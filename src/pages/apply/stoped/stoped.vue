<template>
  <div id="stop">
    <h1>stoped</h1>
    <!-- :status="errors.has('email') ? 'error' : ''" 
    :message="errors.first('email')"-->
    <el-input
      v-validate="{ required: true, email: true, regex: /[0-9]+/ }"
      type="text"
      name="email"
      data-vv-as="邮箱"
      :message="errors.first('email')"
      :status="errors.has('email') ? 'error' : ''" >
        <i
          v-show="errors.has('email')"
          class="el-icon-warning el-input__icon"
          slot="suffix">
        </i>
    </el-input>
    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
  </div> 
</template>
