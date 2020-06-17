<template>
  <div class='app-container ley-column'>
    <p class="ley-title ley-item-fixed">文章管理</p>
    <div class="table-content ley-item-vary ley-flex">
      <table class="ley-table">
        <tr>
          <th>创建时间</th>
          <th>标题</th>
          <th>简介</th>
          <th>评论数</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list" :key="item.updateDate">
          <td>
            <div>
              {{ item.updateDate }}
            </div>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.introduction }}</td>
          <td>{{ item.messageNum || 0 }}</td>
          <td>
            <a class="ley-default-a del-btn" href="javascript: void(0);" @click="onDel(item)">删除</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ArticleManagement',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('article', ['list'])
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions('article', ['queryList', 'queryDel']),
    init() {
      this.queryList()
    },
    onDel(item) {
      console.log('删除的数据：', item)
      const reqData = {
        id: item.id
      }
      this.queryDel(reqData)
        .then(res => {
          console.log('删除：', res)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.ley-table {
  width: 100%;
  border: $border;
  border-collapse: collapse;
  &>tr, tr > th, tr > td {
    border: $border;
    padding-left: 15px;
    text-align: left;
  }
  th {
    line-height: 34px;
    background-color: $bColor;
  }
  td {
    line-height: 32px;
  }
  .del-btn {
    color: $blue;
  }
}
  
</style>