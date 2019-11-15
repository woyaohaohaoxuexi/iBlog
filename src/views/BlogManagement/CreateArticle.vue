<template>
  <div class='article app-content'>
    <div>
      <div class="ley-flex ley-align-center item-form">
        <label for="" class="left-text">标题：</label>
        <input v-model="title" type="text" class="ley-input">
      </div>
      <div class="ley-flex ley-align-center item-form">
        <label for="" class="left-text">简介：</label>
        <textarea v-model="introduction" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="ley-flex ley-align-center item-form">
        <label for="uploadInput" class="upload-label">上传文件</label>
        <input
          id="uploadInput" 
          class="upload-input" 
          type="file" 
          multiple="false"
          @change="upload">
      </div>
      <div class="ley-flex ley-align-center item-form">
        <button class="ley-btn left-btn" @click="save">保存</button>
        <button class="ley-btn">取消</button>
      </div>
    </div>
    <div>
      <p>{{manageData.title}}</p>
      <p>{{manageData.introduction}}</p>
      <div v-html="manageDom" class="manage-content"></div>
    </div>
    <mavon-editor
      v-model="articleValue">
    </mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
// marked
import marked from 'marked'

// import highlight from 'highlight.js/lib/highlight'
const highlight = require('highlight.js')

// import 'mavon-editor/dist/css/index.css'
import { uploadManage, addManage, getManage, getArticleDetail } from '@api/BlogManagement/index'
// markdown-it
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt({
      highlight: (code) => {
        return highlight.highlightAuto(code).value
      }
    });
export default {
  name: 'CreateArticle',
  components: {
    mavonEditor
  },
  data() {
    return {
      renderer: new marked.Renderer(),
      articleValue: '',
      error: '',
      title: '',
      introduction: '',
      file: '',
      articleId: '',
      manageData: {
        management: ''
      },
      marked
    }
  },
  computed: {
    manageDom() {
      const manageStr = this.manageData.article
      let dom = ''
      if (manageStr) {
        dom = marked(manageStr, {
          pedantic: false,
          gfm: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false,
          highlight: (code) => {
            return highlight.highlightAuto(code).value
          }
        })
        // dom = md.render(manageStr)
      } else {
        dom = ''
      }
      // console.log('生成的 DOm 是：', dom)
      return dom
      // return highlight.highlightBlock(dom)
    }
  },
  created() {
    getManage()
      .then(res => {
        const articleId = res.data.data.list.pop().id
        getArticleDetail({ articleId })
          .then(res => {
            console.log('获取文章详情：', res)
            this.manageData = res.data.data
          })
          .catch(error => {
            console.log('获取文章详情报错：', error)
          })
      })
      .catch(error => {
        console.log('获取文章失败：', error)
      })
  },
  methods: {
    upload(event) {
      const eventTarget = event.target || {}
      const files = eventTarget.files
      if (!files || files.length === 0) {
        this.error = '请选择文件上传'
        return
      }
      // this.filesList = files
      this.file = files[0]
      console.log('上传信息：', files)
      // let formData = new FormData()
      // formData.append('file', files[0])
      // uploadManage(formData)
      //   .then(res => {
      //     console.log('上传文件成功：', res)
      //   })
      //   .catch(error => {
      //     console.log('请求失败：', error)
      //   })
    },
    showSize(number) {
      let sizeText = ''
      if (number < 1024) {
        sizeText =  number + 'bytes'
      } else if (number > 1024 && number < 1048576) {
        sizeText = (number/1024).toFixed(1) + 'KB'
      } else if (number > 1048576) {
        sizeText = (number/1048576).toFixed(1) + 'MB'
      }
      return sizeText
    },
    save() {
      const { title, introduction, file } = this
      let formData = new FormData()
      formData.append('title', title),
      formData.append('introduction', introduction)
      formData.append('management', file)
      addManage(formData)
        .then(res => {
          console.log('添加成功：', res)
        })
        .catch(error => {
          console.log('添加失败：', error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.upload-content {
  margin-bottom: 15px;
}
.upload-label {
  display: inline-block;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  padding: 0 15px;
  border: 1px solid $color-border;
  border-radius: 3px;
  cursor: pointer;
}
.item-form {
  margin-bottom: 20px;
}
.upload-input {
  display: none;
}
.left-btn {
  @include mr(15px);
}
</style>