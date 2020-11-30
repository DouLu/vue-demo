<template>
  <div>child-222---{{ data }}</div>
</template>

<script>
export default {
  inject: {
    foo: { default: 'foo2' }
  },
  data: function() {
    return {
      data: this.foo
    }
  }
}
</script>

<style>

</style>
