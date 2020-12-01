<template>
  <div>test radio
    <div>
      <h6>checkout branch</h6>
      <div v-for="name in branchs" :key="name">
        <label for="radio">{{ name }}</label>
        <input type="radio">
      </div>
    </div>
    <ul v-for="commit in commits" :key="commit.sha">
      <li>{{ commit.url }}</li>
    </ul>
  </div>
</template>

<script>
const apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='
export default {
  data() {
    return {
      branchs: ['master', 'dev'],
      currentBranch: 'dev',
      commits: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      const xhr = new XMLHttpRequest()
      const self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function() {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
}
</script>

<style></style>
