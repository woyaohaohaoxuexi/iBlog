<template>
  <label class="ley-label">
    <input 
      :value="label" 
      type="radio"
      :checked="isChecked"
      :class="['ley-radio', isChecked ? 'ley-radio-checked' : '']"
      @change="inputChange" 
      @input="onRadioInput"
      @click="onRadioClick">
    <span class="label-text"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'ItemRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: [String],
      default: ''
    }
  },
  watch: {
    value: function(n) {
      console.log('是否选中：', n === this.label);
      console.log('判断是否相等;', n, this.label);
      
      this.isChecked = n === this.label
    }
  },
  data() {
    return {
      isChecked: this.label === this.value
    }
  },
  methods: {
    inputChange(val) {
      console.log('单选框值改变：', val)
      this.$emit('input', val)
    },
    onRadioInput(event) {
      console.log('点击单选框：', event);
    },
    onRadioClick(event) {
      console.log('单选框 click:', event);
      console.log(event.target.checked);
      if (event.target.checked) {
        console.log('label；', this.label);
        
        this.$emit('input', this.label)
      }
      event.preventDefault();
      // event.target.checked = !event.target.checked
    }
  }
}
</script>

<style scoped lang="scss">
.label-text {

}
</style>