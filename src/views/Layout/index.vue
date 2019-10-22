<template>
  <div class='layout ley-column'>
    <page-header></page-header>
    <div class="main-container ley-item-vary ley-flex">
      <!--  左侧菜单  -->
      <side-bar :menu-data="menuData" class="ley-item-fixed ley-shadow"></side-bar>
      <!--  右侧内容区  -->
      <div class="content ley-item-vary ley-shadow">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import routeData from '@/router/route'

import pageHeader from './components/Header'
import sideBar from './components/SideBar'
export default {
  name: 'SideBar',
  components: {
    pageHeader,
    sideBar
  },
  data() {
    return {
      menuData: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.menuData = this.handleData(routeData)
    },
    handleData(arr, parentPath = '') {
      let tempArr = []
      tempArr = arr.map(item => {
        const childrenData = item.children
        let itemData = {
          name: item.meta.title,
          path: parentPath ? `${parentPath}/${item.path}` : item.path,
          icon: item.meta.icon || ''
        }
        if (childrenData && childrenData.length) {
          itemData.children = this.handleData(childrenData, item.path)
        }
        return itemData
      })
      return tempArr
    }
  }
}
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
}
.main-container {
  padding: $main-padding;
  background-color: $bColor-body;
  .content {
    margin-left: $main-padding;
    background-color: #fff;
  }
}
</style>