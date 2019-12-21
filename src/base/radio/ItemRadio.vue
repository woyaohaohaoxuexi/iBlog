<template>
  <div class='ley-radio'>
    <label>{{ label }}</label>
    <input :value="value" type="radio" :name="name" @change="inputChange">
  </div>
</template>

<script>
export default {
  name: 'ItemRadio',
  props: {
    label: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: [String],
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {
    inputChange(val) {
      console.log('单选框值改变：', val)
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>