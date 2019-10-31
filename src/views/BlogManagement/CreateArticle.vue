<template>
  <div class='article app-content'>
    <mavon-editor
      v-model="articleValue">
    </mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'CreateArticle',
  components: {
    mavonEditor
  },
  data() {
    return {
      articleValue: ''
    }
  },
}
</script>

<style scoped lang="stylus">

</style>