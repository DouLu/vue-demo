<template>
  <el-container>
    <el-aside width="200px"><Header /></el-aside>
    <el-main>
      <!--  <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb> -->
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import router from '@/router/router'
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  data: function() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect: function() {},
    goToPage: function() {
      // 1. 字符串
      router.push('home')
      // 2. 对象
      // router.push({ path: 'home' })
      // 3.带查询参数，变成 /register?plan=private
      // router.push({ path: 'user', query: { plan: 'private' }})
      // router.push({ path: 'user/123' })
      // 4. 命名的路由 与router的name匹配
      // router.push({ name: 'user', params: { userId: '123' }})
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
a{
  text-decoration: none;
}
html,
body,
.el-container {
  height: 100%;
}
.el-container{
  background-color: #f6f6f6;
}
</style>
