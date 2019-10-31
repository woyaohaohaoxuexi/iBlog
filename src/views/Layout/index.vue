<template>
  <div class='layout ley-column'>
    <page-header class="page-header"></page-header>
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
      arr.forEach(item => {
        if (!item.hidden) {
          // showSubMenu: 是否显示子菜单；
          // activeMenu: 菜单选中匹配的路径
          const { title, icon = "", showSubMenu = true, activeMenu = null } = item.meta
          const childrenList = item.children
          let itemData = {
            name: title,
            path: parentPath ? `${parentPath}/${item.path}` : item.path,
            icon: icon,
            activeMenu
          }
          if (showSubMenu && childrenList && childrenList.length) {
            itemData.children = this.handleData(childrenList, item.path)
          }
          tempArr.push(itemData)
        }
      })
      return tempArr
    }
  }
}
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  background-color: $bColor-body;
  .page-header {
    margin-bottom: $main-padding;
  }
}
.main-container {
  padding: 0 $main-padding $main-padding;
  .content {
    margin-left: $main-padding;
    background-color: #fff;
  }
}
</style>