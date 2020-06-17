<template>
  <div class='app-content'>
    <div>
      <p>标签列表</p>
      <div>
        <!-- <span v-for="item in list">{{ item.name }}</span> -->
        <Item-Label v-model="testTitle" :list="list">
          <div slot-scope="label">
            这是父组件
            {{ label.itemLabel.id }}
          </div>
        </Item-Label>
      </div>
    </div>
    <div>
      <input v-model="labelName" type="text" class="ley-input label-input" placeholder="请输入标签名称">
      <button class="ley-btn" @click="onAddLabel">新建标签</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ItemLabel from './components/ItemLabel'
  export default {
    components: {
      ItemLabel
    },
    data() {
      return {
        labelName: '',
        testTitle: true  
      }
    },
    computed: {
      ...mapState('label', ['list'])
    },
    watch: {

    },
    created() {
      this.query()
    },
    methods: {
      ...mapActions('label', ['addLabel', 'query']),
      onAddLabel() {
        this.addLabel({ name: this.labelName }).then(() => {
          this.query()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.label-input {
  margin-right: 20px;
}
</style>
