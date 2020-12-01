<template>
  <div>
    <p class="title">create order</p>
    <el-form
      ref="orderForm"
      :model="orderForm"
      label-width="80px"
    >
      <el-form-item label="客户姓名">
        <el-input v-model="orderForm.name" />
      </el-form-item>
      <el-form-item label="品牌">
        <el-select
          v-model="orderForm.brand"
          placeholder="请选择品牌"
        >
          <el-option
            v-for="brand in brandList"
            :key="brand.bid"
            :label="brand.name"
            :value="brand.bid"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model="orderForm.date"
          type="date"
          placeholder="选择日期"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="配件名称">
        <el-select
          v-model="orderForm.accessoryName"
          placeholder="请选择配件"
          @change="selAccessory"
        >
          <el-option
            v-for="a in accessoryList"
            :key="a.aid"
            :label="a.name"
            :value="a.aid"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="配件型号">
        <!-- TODO: bug 切换配件名称，配件型号列表里只有一个时 型号下拉选项的值是上一个的值 -->
        <el-select
          v-model="orderForm.accessoryModel"
          placeholder="请选择配件型号"
        >
          <el-option
            v-for="m in modelList"
            :key="m.mid"
            :label="m.name"
            :value="m.mid"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="单位">
        <el-select
          v-model="orderForm.unit"
          placeholder="请选择单位"
        >
          <el-option
            label="个"
            value="个"
          />
          <el-option
            label="台"
            value="台"
          />
          <el-option
            label="件"
            value="件"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="数量">
        <el-input-number
          v-model="orderForm.number"
          :min="-1000"
          :max="1000"
          label="描述文字"
        />
      </el-form-item>
      <el-form-item label="单价">
        <el-input-number
          v-model="orderForm.unitPrice"
          :min="0"
          :max="1000"
          label="描述文字"
        />
      </el-form-item>
      <el-form-item label="客户要求">
        <el-input
          v-model="orderForm.desc"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >立即创建</el-button>
        <el-button>保存</el-button>
        <el-button @click="reset">重置数据</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      orderForm: {},
      brandList: [],
      accessoryList: [],
      modelList: []
    }
  },
  beforeMount: function() {
    // fetch select data
    axios.get('/api/getSelInfo').then(res => {
      const { brandList, accessoryList } = res.data.data
      this.brandList = brandList
      this.accessoryList = accessoryList
    })
  },
  methods: {
    selAccessory: function(value) {
      const accessory = this.accessoryList.filter(i => i.aid === value)[0]
      this.modelList = accessory.model
    },
    onSubmit: function() {
      // TODO: form rules validate
      console.log('orderForm data-------', this.orderForm)
      axios.post('/api/createOrder').then(res => {
        if (res.data.data) this.$router.push('/orderList')
      })
    },
    reset: function() {
      this.orderForm = {}
    }
  }
}
</script>

<style></style>
