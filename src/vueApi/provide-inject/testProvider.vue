<template>
  <div style="border:solid 1px #333">
    <p>{{ food }}</p>
    <el-button type="primary" @click="fetchFoo">fetch provide data</el-button>
    <el-button type="primary" @click="fetchStore">fetch store</el-button>
    <slot />
  </div>
</template>

<script>
export default {
  provide: function() {
    return {
      foo: this.$data,
      testFrom: this.getCount
    }
  },
  data: function() {
    return {
      food: this.$store.state.count
    }
  },
  computed: {
    getCount() {
      return this.$store.state.count
    }
  },
  methods: {
    fetchFoo: function() {
      this.food = 'foood' + Math.random(0, 2)
    },
    fetchStore: function() {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style>

</style>
