<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h5>test store value</h5>
      <p>count:{{ count }}</p>
      <p>countAlias:{{ countAlias }}</p>
      <p>countPlusLocalState:{{ countPlusLocalState }}</p>
      <p>this.$store.state.count:{{ this.$store.state.count }}</p>
      <p>localComputed:{{ localComputed }}</p>
    </div>
    <div>
      <h5>getter</h5>
      <p>doneTodosCount:{{ this.$store.getters.doneTodosCount }}</p>
      <p>id=2:{{ this.$store.getters.getTodoById(2) }}</p>
      <ul><li v-for="item in this.$store.getters.doneTodos" :key="item.id" style="display:block">{{ item.text }}</li></ul>
    </div>
    <div>
      <h5>mapGetters</h5>
      <p>doneTodosCount:{{ doneTodosCount }}</p>
      <p>getTodoById id=2:{{ getTodoById(2) }}</p>
    </div>
    <div>
      <h5>mutations</h5>
      <div>
        <button @click="increment">mapMutations</button>
        <p>increment:{{ count }}</p>
      </div>
      <div>
        <button @click="incrementN">incrementN 10</button>
        <p>incrementN 10:{{ count }}</p>
      </div>
      <div>
        <button @click="incrementObj">incrementObj 20</button>
        <p>incrementObj 20:{{ count }}</p>
      </div>
      <div>
        <button @click="onMutationType">change string</button>
        <h1>mutation name:{{ mutationType }}</h1>
      </div>
    </div>
    <div>
      <h5>actions</h5>
      <button @click="onActions">actions</button>
      <p>{{ count }}</p>
      <button @click="incrementAsync">incrementAsync</button>
    </div>
    <div>
      <button @click="onActionA">onActionA</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localCount: 12
    }
  },
  computed: {
    localComputed() { return this.localCount },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
      mutationType: state => state.mutationType,
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount
      }
    }),
    ...mapGetters([
      'doneTodosCount',
      'getTodoById'
    ])
  },
  mounted() {
    // this.$store.commit('increment')
    // console.log(this.$store.state.count)
  },
  methods: {
    incrementN() {
      this.$store.commit('incrementN', 10)
    },
    incrementObj() {
      this.$store.commit({
        type: 'incrementObj',
        amount: 20
      })
    },
    onMutationType() {
      this.$store.commit('SOME_MUTATION')
    },
    ...mapMutations([
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'increment',
      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      test: 'increment'
    }),
    /* ...mapActions({
      onActions: 'increment',
      incrementAsync: 'incrementAsync'
    }), */
    onActions() {
      this.$store.dispatch('increment')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    },
    onActionA() {
      console.log('start:', new Date())
      this.$store.dispatch('actionA').then((res) => {
        console.log('actionA data', JSON.stringify(res))
        console.log('end:', new Date())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
