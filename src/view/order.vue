<template>
  <div>
    <h1>order list</h1>
    <ul v-for="order in orderList" :key="order.orderId">
      <li>{{ order.title }}</li>
      <img :src="order.photo" alt="img">
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      orderList: []
    }
  },
  beforeMount: function() {
    // fetch
    /* fetch('/api/data')
      .then(function(response) {
        return response.json()
      })
      .then(function(myJson) {
        console.log(myJson)
      }) */
    axios
      .get('/api/data')
      .then(res => {
        console.log(res)
        const { data } = res.data
        this.orderList = data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style></style>
