<template>
  <div class="side-menu">
    <template v-for="(item, index) in menuData">
      <!--  有子菜单  -->
      <div
        v-if="item.children && item.children.length"
        :key="item.path">
        <div class="ley-flex ley-align-center item-menu" @click="extendMenu(index)">
          <svg-icon :icon-class="item.icon"></svg-icon>
          <p class="">{{ item.name }}</p>
          <svg-icon 
            icon-class="down-arrow"
            class-name="arrow-icon">
          </svg-icon>
        </div>
        <div v-if="item.extend" class="children-menu-content" :class="{'extend-menu': item.extend}">
          <side-menu :data="item.children"></side-menu>
        </div>
      </div>

      <!--  没有子菜单  -->
      <div 
        v-else
        :key="item.path"
        class="item-menu ley-align-center sigle-menu">
        <router-link :to="item.path" class="ley-a menu-link">
          <svg-icon :icon-class="item.icon"></svg-icon>
          {{ item.name }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import '@/assets/icons/svg/write.svg'
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
    }
  }
}
</script>

<style scoped lang="scss">
.side-menu {
  .parent-menu {
    position: relative;
    .down-arrow {
      position: absolute;
      right: 15px;
      transition: transform 0.2s;
    }
    .arrow-icon {
      width: 20px;
      height: 20px;
    }
    // .extend-menu {
    //   transform: rotate(180deg);
    //   transition: transform 0.2s;
    // }
  }
}
.item-menu {
  height: 50px;
  cursor: pointer;
  &.sigle-menu {
    &:hover {
      background-color: $orange-light;
      color: $orange;
    }
  }
}
.children-menu-content {
  display: none;
  background-color: $sub-menu-bg;
  transition: all 0.5s;
  &.extend-menu {
    display: block;
    transition: all 0.5s;
  }
}
.menu-icon {
  margin-right: 12px;
}
</style>