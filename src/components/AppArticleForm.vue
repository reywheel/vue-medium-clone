<template>
  <el-form @submit.native.prevent="onSubmit">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1>Создать статью</h1>
      </div>
      <el-input class="form__input" placeholder="Название" v-model="title"></el-input>
      <el-input class="form__input" placeholder="О чём эта статья?" v-model="description"></el-input>
      <el-input class="form__input" type="textarea" :rows="5" placeholder="Текст статьи" v-model="body"></el-input>
      <el-input class="form__input" placeholder="Теги" v-model="tagList"></el-input>
      <el-button type="success" native-type="submit" :loading="isSubmitting">Сохранить</el-button>
    </el-card>
  </el-form>
</template>

<script>
export default {
  name: 'AppArticleForm',
  props: {
    isSubmitting: {
      required: true,
      type: Boolean
    },
    initialData: {
      required: false,
      type: Object
    }
  },
  data: () => ({
    title: '',
    description: '',
    body: '',
    tagList: ''
  }),
  methods: {
    onSubmit() {
      this.$emit('onSubmit', {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList.split(' ')
      })
    }
  },
  mounted() {
    if (this.initialData) {
      this.title = this.initialData.title
      this.description = this.initialData.description
      this.body = this.initialData.body
      this.tagList = this.initialData.tagList
    }
  }
}
</script>

<style scoped lang="scss">
.form__input {
  margin-bottom: 10px;
}
</style>
