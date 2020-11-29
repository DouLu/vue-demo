// 使用 Mock
// https://github.com/nuysoft/Mock/wiki/Getting-Started
const Mock = require('mockjs')
const Random = Mock.Random
Mock.mock('/api/data', (req, res) => {
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
  return { data: orderList }
})
