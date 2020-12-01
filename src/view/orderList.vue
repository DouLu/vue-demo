<template>
  <div>
    <h1>order list</h1>
    <el-table
      :data="orderList"
      style="width: 100%"
    >
      <el-table-column
        prop="orderId"
        label="ID"
        width="90"
      />
      <el-table-column
        prop="title"
        label="名称"
        width="180"
      />
      <el-table-column
        prop="photo"
        label="图片"
        width="240"
      >
        <template slot-scope="scope">
          <img
            :src="scope.row.photo"
            alt="img"
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  },
  methods: {
    handleEdit: function(index, row) {
      // TODO: 创建与编辑 使用同一个form
      this.$store.commit('setOrderForm', { data: row })
      this.$router.push('/createOrder?type=edit')
    },
    handleDelete: function(index, row) {
      // TODO: fetch
      const copy = JSON.parse(JSON.stringify(this.orderList))
      this.orderList = copy.filter(i => i.orderId !== row.orderId)
    }
  }
}
</script>

<style>
</style>
