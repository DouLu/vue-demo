<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('app--root---', this.$root)
    console.log('app--route---', this.$route)
    console.log('app--router---', this.$router)
    this.$store.commit('increment')
    console.log(this.$store.state.count) // -> 1
  }
}
</script>
