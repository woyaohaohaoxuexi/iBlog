<template>
  <div class=''>
    <h3>仪表盘</h3>
    <div> 
      <div v-for="item in dashboardData" :key="item.label">
        <div></div>
        <div>
          <p>{{ item.label }}</p>
          <p>20</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  computed: {
    dashboardData() {
      return [
        {
          label: '文章总数'
        },
        {
          label: '标签总数'
        },
        {
          label: '评论总数'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

</style>