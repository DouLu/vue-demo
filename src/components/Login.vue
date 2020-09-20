<template>
  <div class="container">
    <header>login component</header>
    <div class="body">
      <div v-for="item in formConfig" :key="item.key" class="lable">
        <span>{{ item.lable }}</span>
        <input v-model="formKey[item.key]" v-bind="item">
        <!-- <input v-model="formKey[item.key]" :type="item.type" :placeholder="item.placeholder"> -->
      </div>
      <div class="btns">
        <button class="submit" @click="$emit('onSubmit',getData)">submit</button>
        <button class="reset" @click="onReset">reset</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  props: {
    formConfig: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      formKey: {}
    }
  },
  computed: {
    getData() {
      console.log(this.$data)
      return this.formKey
    }
  },
  mounted() {
    this.$props.formConfig.forEach(item => {
      this.formKey[item.key] = ''
    })
  },
  methods: {
    onReset() {
      /* for (const key in this.formKey) {
        this.formKey[key] = ''
      } */
      const obj = {}
      this.$props.formConfig.forEach(item => {
        obj[item.key] = ''
      })
      this.formKey = obj
    }
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  font-size: 14px;
  color: #333;
  width: 500px;
  margin: auto;
}
header{
  font-size: 20px;
  font-weight: normal;
  text-align: center;
}
button{
  width: 80px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.lable{
  display: flex;
  align-items: center;
  justify-content: center;
}
.lable span,
.lable input{
  height: 32px;
  line-height: 32px;
}
.lable span{
  width: 70px;
}
.btns{
  display: flex;
  justify-content: center;
}
</style>
