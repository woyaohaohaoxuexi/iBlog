<template>
  <div class='article app-content'>
    <p class="ley-title ley-item-fixed">新建文章</p>
    <div class="check-content">
      <div class="ley-flex ley-align-center item-form">
        <label for="" class="left-text">文章标题：</label>
        <input v-model="title" type="text" class="ley-mini-input">
      </div>
      <div class="ley-flex ley-align-center item-form">
        <label for="" class="left-text">文章简介：</label>
        <textarea 
          v-model="introduction"
          class="ley-textarea"
          name=""
          cols="30"
          rows="10">
        </textarea>
      </div>
      <div class="ley-flex item-form">
        <span class="left-text">标签：</span>
        <div class="ley-flex">
          <select class="ley-mini-input" v-model="label" name="">
            <option v-for="item in list" :value="item.id" :key="item.id">{{ item.name }}</option>
          </select>
        </div>
      </div>
      <div class="ley-flex">
        <span class="left-text">新建方式：</span>
        <div class="ley-flex">
          <div class="item-radio">
            <ley-radio v-model="createType" label="upload">上传</ley-radio>
          </div>
          <div class="item-radio">
            <ley-radio v-model="createType" label="edit">页面编辑</ley-radio>
          </div>
        </div>
      </div>
    </div>
    <div v-if="createType === 'upload'" class="ley-flex ley-align-center item-form">
      <label class="ley-btn">上传文件
        <input 
          class="upload-input"
          type="file" 
          multiple="false"
          @change="uploadFile">
      </label>
      <label class="ley-btn">上传图片
        <input 
          class="upload-input"
          type="file" 
          multiple="false"
          @change="uploadImage">
      </label>
    </div>
    <mavon-editor
      ref="mavonEditor"
      v-else-if="createType === 'edit'"
      v-model="articleValue"
      :ishljs="true"
      @imgAdd="onAddImg">
    </mavon-editor>
    <div class="ley-flex ley-align-center item-form btn-content">
      <button class="ley-btn left-btn active" @click="save">保存</button>
      <button class="ley-btn">取消</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mavonEditor } from 'mavon-editor'
import marked from 'marked'
import 'mavon-editor/dist/css/index.css'
const highlight = require('highlight.js')
import { str } from './test'
import { BASE_URL } from '@api/config'
export default {
  name: 'CreateArticle',
  components: {
    mavonEditor
  },
  data() {
    return {
      articleValue: '',
      createType: 'upload',
      error: '',
      title: '',
      introduction: '',
      label: '',
      file: '',
      articleId: '',
      manageData: {
        management: ''
      },
      marked
    }
  },
  computed: {
    ...mapState('label', ['list']),
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
      } else {
        dom = ''
      }
      return dom
    }
  },
  watch: {
    createType: function (n) {
      console.log('emit:', n);
      
    }
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions('article', ['addArticle', 'uploadImg']),
    ...mapActions('label', ['query']),
    init() {
      if (!this.list || !this.list.length) {
        console.log('查询 label');
        
        this.query()
      }
      console.log('aaa');
      
    },
    uploadFile(event) {
      const eventTarget = event.target || {}
      const files = eventTarget.files
      if (!files || files.length === 0) {
        this.error = '请选择文件上传'
        return
      }
      this.file = files[0]
    },
    uploadImage(event) {
      const eventTarget = event.target || {}
      const files = eventTarget.files
      // if (!files || files.length === 0) {
      //   this.error = ''
      // }  
      console.log('文件LL', files[0]);
      const formData = new FormData()
      formData.append('img', files[0])
      this.uploadImg(formData)
        .then(res => {
          console.log('上传图片LL', res);
          
        })
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

    // 添加图片
    onAddImg(fileName, file) {
      let formData = new FormData()
      formData.append('file', file)
      this.uploadImg(formData)
        .then(res => {
          console.log('上传图片：', res)
          let imgPath = res.data.path
          if (imgPath) {
            this.$refs.mavonEditor.$img2Url(fileName, `${BASE_URL}/${imgPath}`)
          }
        })
        .catch(error => {
          console.log('上传图片失败：', error)
        })
    },

    save() {
      console.log('保存');
      
      const { title, introduction, createType } = this
      if (title && introduction) {
        let file = createType === 'upload' ? this.file : this.articleValue
        let formData = new FormData()
        formData.append('title', title),
        formData.append('introduction', introduction)
        formData.append('article', file)
        this.addArticle(formData)
          .then(res => {
            console.log('添加成功：', res)
          })
          .catch(error => {
            console.log('添加失败：', error)
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.check-content {
  @include mb(20px)
}
.left-text {
  width: 80px;
  text-align: right;
  @include mr(20px)
}
.item-radio {
  @include mr(15px)
}
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

.btn-content {
  margin-top: 20px;
  .left-btn {
    @include mr(15px);
  }
}
</style>