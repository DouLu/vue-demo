<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    active-text-color="#2b83da"
    @select="handleSelect"
  >
    <el-menu-item index="home">
      <router-link to="/home">home</router-link>
    </el-menu-item>
    <el-menu-item index="orderList">
      <router-link to="/orderList">orderList</router-link>
    </el-menu-item>
    <el-menu-item index="createOrder">
      <router-link to="/createOrder">createOrder</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
import router from '@/router/router'
export default {
  data: function() {
    return {
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect: function() {},
    goToPage: function() {
      // 1. 字符串
      // router.push('home')
      // 2. 对象
      // router.push({ path: 'home' })
      // 3.带查询参数，变成 /register?plan=private
      router.push({ path: 'user', query: { plan: 'private' }})
      // router.push({ path: 'user/123' })
      // 4. 命名的路由 与router的name匹配
      // router.push({ name: 'user', params: { userId: '123' }})
    }
  }
}
</script>

<style>
.el-menu{
  height: 100%;
}
a{
  display: block;
}
</style>
