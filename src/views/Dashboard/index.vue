<template>
  <div class='app-content'>
    <p class="ley-title ley-item-fixed">仪表盘</p>
    <div> 
      <div v-for="item in dashboardData" :key="item.label">
        <div></div>
        <div>
          <p>{{ item.label }}</p>
          <p>20</p>
        </div>
      </div>
      <a href="http://localhost:8090/aa.text" download="">下载文本</a>
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