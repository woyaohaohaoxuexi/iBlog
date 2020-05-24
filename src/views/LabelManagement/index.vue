<template>
  <div class='app-content'>
    <div>
      <p>标签列表</p>
    </div>
    <div>
      <input v-model="labelName" type="text" class="ley-input label-input" placeholder="请输入标签名称">
      <button class="ley-btn" @click="onAddLabel">新建标签</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        labelName: ''
      }
    },
    computed: {

    },
    watch: {

    },
    mounted() {

    },
    methods: {
      ...mapActions('label', ['addLabel']),
      onAddLabel() {
        this.addLabel({ name: this.labelName })
      }
    },
    components: {

    },
  }
</script>

<style scoped lang="scss">
.label-input {
  margin-right: 20px;
}
</style>
