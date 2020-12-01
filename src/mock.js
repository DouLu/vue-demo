// 使用 Mock
// https://github.com/nuysoft/Mock/wiki/Getting-Started
// http://mockjs.com/examples.html
const Mock = require('mockjs')
const Random = Mock.Random
Random.ctitle()
Random.name(true)
Random.cname(true)
Random.guid()
// 数据持久化   保存在global的全局变量中
if (!global.data) {
  const data = Mock.mock({
    // 订单项信息
    selectList: {
      'brandList|1-10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'bid|+1': 1,
          name: '@name'
        }
      ],
      'accessoryList|1-10': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'aid|+1': 1,
          name: '@cname',
          'model|1-10': [
            {
              'mid|+': 1,
              name: '@guid'
            }
          ]
        }
      ]
    },
    // 订单列表
    'orderList|1-10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'orderId|+1': 1,
        title: '@ctitle',
        photo: Random.image('200x100', '#00405d', '#FFF', 'Mock.js')
      }
    ]
  })
  global.data = data
}

Mock.mock('/api/register', (req, res) => {
  console.log(req, res)
  return { data: true }
})
Mock.mock('/api/login', (req, res) => {
  const { data } = JSON.parse(req.body)
  return { data: data.user }
})
Mock.mock('/api/data', (req, res) => {
  return { data: global.data.orderList }
})
Mock.mock('/api/getSelInfo', () => {
  return { data: global.data.selectList }
})
Mock.mock('/api/createOrder', () => {
  return { data: true }
})
