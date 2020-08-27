<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("app--root---", this.$root);
    console.log("app--route---", this.$route);
    console.log("app--router---", this.$router);
  },
};
</script>