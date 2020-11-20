<template>
  <el-container>
    <Header />
    <el-main>
      <p>main</p>
      <router-view />
      <router-view class="view two" name="main" />
    </el-main>
    <el-footer>
      <p>footer</p>
      <router-view class="view three" name="footer" />
    </el-footer>
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

<style></style>
