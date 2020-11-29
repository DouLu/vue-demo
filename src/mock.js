// 使用 Mock
// https://github.com/nuysoft/Mock/wiki/Getting-Started
const Mock = require('mockjs')
const Random = Mock.Random
// 数据持久化   保存在global的全局变量中
const data = {}
const orderList = []
for (let i = 0; i < 30; i++) {
  const listObj = {
    title: Random.csentence(5, 10),
    orderId: Random.id(5, 10),
    money: Random.integer(100, 9999),
    photo: Random.image('114*83', '#00405d', '#fff', 'mock.js')
  }
  orderList.push(listObj)
}
data.orderList = orderList
Mock.mock('/api/register', (req, res) => {
  console.log(req, res)
  return { data: true }
})
Mock.mock('/api/login', (req, res) => {
  const { data } = JSON.parse(req.body)
  return { data: data.user }
})
Mock.mock('/api/data', (req, res) => {
  return { data: data.orderList }
})
