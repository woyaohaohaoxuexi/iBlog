<template>
  <div class='side-bar'>
    <div class="avatar">
      <div>
        <p class="img-place"></p>
      </div>
      <p>后台管理</p>
    </div>
    <side-menu :data="menuData"></side-menu>
  </div>
</template>

<script>
import sideMenu from './SideMenu'
export default {
  name: 'SideBar',
  components: {
    sideMenu
  },
  props: {
    menuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  methods: {
    init() {

    }
  }
}
</script>

<style scoped lang="scss">
.side-bar {
  flex-basis: 240px;
  background-color: #fff;
  .avatar {
    margin-left: 20px;
    margin-bottom: 20px;
    text-align: left;
    .img-place {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: $orange;
    }
  }
}
</style>