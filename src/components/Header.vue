<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="0-0">
        <router-link to="/home">声明式 home</router-link>
      </el-menu-item>
      <el-menu-item index="0">
        <router-link
          :to="{ name: 'user', params: { userId: 123 } }"
        >命名路由 User</router-link>
      </el-menu-item>
      <el-menu-item index="1" @click="goToPage">
        编程式 user
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">
          <router-link to="/form">Form练习</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item
        index="4"
      ><a
        href="https://www.ele.me"
        target="_blank"
      >订单管理</a></el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import router from '@/router/router'
export default {
  data: function() {
    return {
      activeIndex: '1'
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

<style></style>
