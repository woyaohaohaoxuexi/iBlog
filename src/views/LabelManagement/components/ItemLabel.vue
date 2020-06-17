<template>
  <div class='item-label'>
    <div v-for="item in list" :key="item.name">
      <slot :itemLabel="item">{{ item.name }}</slot>
    </div>
    <div>这是子组件 {{ title }}</div>
    <div>{{ aa }}</div>
    <button @click="onClick">点击</button>
    <input :value="aa" :checked="aa"  type="checkbox" @change="handleChange">
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'aa',
      event: 'change'
    },
    props: {
      aa: {
        type: Boolean,
        defalut: false
      },
      list: {
        type: Array,
        defalut: () => []
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        cont: 0
      }
    },
    computed: {

    },
    methods: {
      onClick() {
        this.$emit('update:title', `测试${++this.cont}`)
      },
      handleChange(event) {
        const checkedValue = event.target.checked
        this.$emit('change', checkedValue)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
