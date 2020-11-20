<template>
  <div>
    <h1>form-demo</h1>
    <div class="form-item">
      <label for="input">input</label>
      <input v-model="text" type="text" @input="input">
    </div>
    <div class="form-item">
      <label for="textarea">textarea</label>
      <textarea
        id="textarea"
        v-model="textarea"
        name="textarea"
        cols="30"
        rows="4"
        @input="tinput"
      />
    </div>
    <div class="form-item">
      <lable for="radio">radio</lable><br>
      <input
        v-model="radio"
        type="radio"
        name="fruit"
        value="fr1"
        @change="chRadio"
      >fr1
      <br>
      <input
        v-model="radio"
        type="radio"
        name="fruit"
        value="fr2"
        @change="chRadio"
      >fr2
      <br>
      <input
        v-model="radio"
        type="radio"
        name="fruit"
        value="fr3"
        @change="chRadio"
      >fr3
    </div>
    <div class="form-item">
      <lable for="checkbox">checkbox</lable><br>
      <input
        v-model="checkbox"
        type="checkbox"
        name="checkbox"
        value="ck1"
        @change="chCheckbox"
      >ck1
      <br>
      <input
        v-model="checkbox"
        type="checkbox"
        name="checkbox"
        value="ck2"
        @change="chCheckbox"
      >ck2
      <br>
      <input
        v-model="checkbox"
        type="checkbox"
        name="checkbox"
        value="ck3"
        @change="chCheckbox"
      >ck3
      <br>
      <input
        v-model="checkbox"
        type="checkbox"
        name="checkbox"
        value="ck4"
        @change="chCheckbox"
      >ck4
    </div>
    <div class="form-item">
      <lable for="select">select</lable><br>
      <select id="select" v-model="selected" name="select">
        <option value="sel1">sel1</option>
        <option value="sel2">sel2</option>
        <option value="sel3">sel3</option>
        <option value="sel4">sel4</option>
      </select>
      <br>
      <lable for="select">v-for select</lable><br>
      <select id="select1" v-model="selected" name="select1">
        <option v-for="i in options" :key="i" :value="i">{{ i }}</option>
      </select>
    </div>
    <div class="form-item">
      <lable for="trim">trim修饰符</lable>
      <input v-model.trim="msg">
      <span>过滤空格：{{ msg }}</span>
    </div>
    <div class="form-item">
      <lable for="number">number修饰符</lable>
      <input v-model.number="number" type="number">
      <span>数字：{{ number }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: function() {
    return {
      text: '',
      textarea: '',
      radio: 'fr2',
      checkbox: ['sl2'],
      options: ['sel1', 'sel2', 'sel3', 'sel4'],
      selected: 'sel2',
      msg: '',
      number: null
    }
  },
  methods: {
    input: function(e) {
      console.log('input---', e.target.value)
    },
    tinput: function(e) {
      console.log('textarea---', e.target.value)
    },
    chRadio: function(e) {
      console.log('radio---', e.target.value, e.target.checked)
    },
    chCheckbox: function(e) {
      console.log('checkbox---', e.target.value, e.target.checked)
    }
  }
}
</script>

<style></style>
