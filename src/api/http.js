import axios from 'axios'
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
