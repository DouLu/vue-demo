<template>
  <div>
    <p class="title">create order</p>
    <el-form ref="orderForm" :model="orderForm" label-width="80px">
      <el-form-item label="客户姓名">
        <el-input v-model="orderForm.name" />
      </el-form-item>
      <el-form-item label="品牌">
        <el-select v-model="orderForm.brand" placeholder="请选择品牌">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
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
        <el-select v-model="orderForm.accessoryName" placeholder="请选择配件">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="配件型号">
        <el-select
          v-model="orderForm.accessoryModel"
          placeholder="请选择配件型号"
        >
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="单位">
        <el-select v-model="orderForm.unit" placeholder="请选择单位">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
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
        <el-input v-model="orderForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>保存</el-button>
        <el-button>重置数据</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      orderForm: {}
    }
  },
  beforeMount: function() {
    // fetch select data

  },
  methods: {
    onSubmit: function() {
      // TODO: validate
    }
  }
}
</script>

<style></style>
