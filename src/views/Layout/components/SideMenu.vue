<template>
  <div class="side-menu">
    <template v-for="(item, index) in menuData">
      <!--  有子菜单  -->
      <div
        v-if="item.children && item.children.length"
        :key="item.path"
        class="parent-menu">
        <div class="ley-flex ley-align-center item-menu" @click="extendMenu(index)">
          <svg-icon :icon-class="item.icon"></svg-icon>
          <p class="">{{ item.name }}</p>
          <svg-icon 
            icon-class="down-arrow"
            class-name="arrow-icon"
            :class="{'extend-arrow': item.extend}">
          </svg-icon>
        </div>
        <div v-if="item.extend" class="children-menu-content" :class="{'extend-menu': item.extend}">
          <side-menu :data="item.children"></side-menu>
        </div>
      </div>

      <!--  没有子菜单  -->
      <router-link 
        v-else
        :key="item.path"
        :to="item.path" 
        class="ley-a item-menu ley-align-center single-menu"
        :class="{'active-menu': item.activeMenu ? item.activeMenu === currentRoute : item.path === currentRoute}">
        <svg-icon :icon-class="item.icon"></svg-icon>
        {{ item.name }}
      </router-link>
    </template>
  </div>
</template>

<script>
// import '@/assets/icons/svg/write.svg'
export default {
  name: 'SideMenu',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    data: {
      handler(n) {
        this.initMenu(n)
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      menuData: []
    }
  },
  computed: {
    currentRoute() {
      const routeData = this.$route
      return routeData.path
    }
  },
  methods: {
    initMenu(data) {
      let tempArr = []
      tempArr = data.map(item => {
        item.extend = false
        return item
      })
      this.menuData = tempArr
    },
    extendMenu(index) {
      let currentMenuData = this.menuData[index]
      currentMenuData.extend = !currentMenuData.extend
      this.$set(this.menuData, index, currentMenuData)
      const $emitA = this.$emit('change', currentMenuData)
      console.log('emit  的值LL', $emitA);
    }
  }
}
</script>

<style scoped lang="scss">
.side-menu {
  .item-menu {
    height: 56px;
    cursor: pointer;
    .svg-icon {
      width: 16px;
      height: 16px;
    }
  }
  .parent-menu {
    position: relative;
    .arrow-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 15px;
      transition: transform 0.2s;
    }
    .extend-arrow {
      transform: rotate(180deg);
      transition: transform 0.2s;
    }
    .item-menu {
      padding-left: 20px;
    }
  }
  .children-menu-content {
    background-color: $sub-menu-bg;
    .item-menu {
      height: 50px;
      padding-left: 40px;
      &.single-menu {
        &:hover {
          color: $orange;
          background-color: $sub-menu-bg;
        }
      }
    }
  }
  .svg-icon {
    margin-right: 10px;
  }
  &>.single-menu {
    padding-left: 20px;
    &:hover {
      background-color: $orange-light;
      color: $orange;
    }
  } 
  .active-menu {
    background-color: $orange-light;
    color: $orange;
  }
}

// .children-menu-content {
//   display: none;
//   
//   transition: all 0.5s;
//   &.extend-menu {
//     display: block;
//     transition: all 0.5s;
//   }
// }
// .menu-icon {
//   margin-right: 12px;
// }
</style>