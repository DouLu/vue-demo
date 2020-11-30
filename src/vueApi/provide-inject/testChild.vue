<template>
  <div>child-111---{{ data }}</div>
</template>

<script>
export default {
  inject: {
    foo: {
      from: 'testFrom',
      default: 'foo1'
    }
  },
  data: function() {
    return {
      data: this.foo
    }
  }
}
</script>

<style></style>
