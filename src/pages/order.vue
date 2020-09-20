<template>
  <div>
    <el-container>
      <el-header>order</el-header>
    </el-container>
    <Login :form-config="formConfig" @onSubmit="save" />
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    Login
  },
  data() {
    return {
      formConfig: [
        {
          lable: 'user name',
          type: 'text',
          placeholder: 'placeholder-----',
          key: 'name'
        },
        {
          lable: 'password',
          type: 'password',
          placeholder: 'placeholder-----',
          key: 'password'
        },
        {
          lable: 'email',
          type: 'email',
          placeholder: 'placeholder-----',
          key: 'email'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    save(parmas) {
      window.alert(JSON.stringify(parmas))
    }
  }
}
</script>

<style lang='css' scoped>
/* @import url(); 引入公共css类 */
</style>
