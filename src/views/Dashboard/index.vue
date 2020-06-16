<template>
  <div class='app-container'>
    <h3>仪表盘</h3>
    <div class="ley-flex"> 
      <div 
        v-for="item in dashboardData" 
        :key="item.label" 
        class="item-info ley-align-center ley-between ley-shadow">
        <div>
          <svg-icon :icon-class="item.icon" class-name="info-identity"></svg-icon>
        </div>
        <div class="info-text">
          <p class="info-label">{{ item.label }}</p>
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
          label: '文章总数',
          icon: 'publish-article'
        },
        {
          label: '标签总数',
          icon: 'article-label'
        },
        {
          label: '评论总数',
          icon: 'message'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.item-info {
  width: 23%;
  height: 80px;
  min-width: 150px;
  margin-right: 5%;
  padding: 0 30px;
  border-radius: 5px;
  .info-identity {
    width: 40px;
    height: 40px;
  }
  .info-text {
    font-size: 20px;
    line-height: 30px;
    font-weight: 800;
  }
}
</style>