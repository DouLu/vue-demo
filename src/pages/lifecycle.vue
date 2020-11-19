<template>
  <div id="app">
    <div v-for="i in $data" :key="i">
      <p>{{ i + '' }}: {{ $data }}</p>
    </div>
    <div>
      <el-button @click="updateDom">update dom</el-button>
      <el-button @click="destroyDom">destroy dom</el-button>
    </div>
    <img ref="imgRef" alt="Vue logo" src="../assets/logo.png">
    <Lifecycle v-if="destroy" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Lifecycle from '@/components/Lifecycle'
export default {
  name: 'Life',
  components: {
    Lifecycle
  },
  data: function() {
    return {
      null: null,
      undefined: undefined,
      count: 0,
      msg: 'msg',
      destroy: true
    }
  },
  computed: {},
  watch: {},
  beforeCreate: function() {
    console.log('window property--', location, navigator)
    console.log('1. beforeCreate: ', this.msg)
  },
  created: function() {
    this.msg = 'created'
    console.log('2. created: ', this.msg, this.$refs.imgRef)
    this.$nextTick(() => {
      console.log('5. nextTick created: ', this.$refs.imgRef)
    })
  },
  beforeMount: function() {
    this.msg = 'beforeMount'
    console.log('3. beforeMount: ', this.msg, this.$refs.imgRef)
    this.$nextTick(() => {
      console.log('6. nextTick beforeMount: ', this.$refs.imgRef)
    })
  },
  mounted: function() {
    console.log('4. mounted: ', this.$refs.imgRef)
  },

  beforeUpdate: function() {
    console.log('7. beforeUpdate: ', this.msg)
    this.msg = 'beforeUpdate'
  },
  updated: function() {
    console.log('8. updated: ', this.msg)
  },
  methods: {
    updateDom: function() {
      this.msg = 'update dom'
    },
    destroyDom: function() {
      this.destroy = !this.destroy
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
