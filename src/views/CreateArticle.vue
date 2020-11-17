<template>
  <div class="el-row">
    <div class="el-col-12 el-col-offset-6">
      <AppValidationErrors v-if="errors" :validation-errors="errors" />
      <AppArticleForm :is-submitting="isSubmitting" @onSubmit="onSubmit" form-title="Создать статью" />
    </div>
  </div>
</template>

<script>
import AppArticleForm from '@/components/AppArticleForm'
import {mapState} from 'vuex'
import AppValidationErrors from '@/components/AppValidationErrors'

export default {
  name: 'CreateArticle',
  components: {AppValidationErrors, AppArticleForm},
  computed: {
    ...mapState({
      isSubmitting: state => state.createArticle.isSubmitting,
      errors: state => state.createArticle.errors,
      article: state => state.createArticle.article
    })
  },
  methods: {
    onSubmit(article) {
      this.$store.dispatch('createArticle', {article}).then(() => {
        this.$router.push({name: 'article', params: {slug: this.article.slug}})
      })
    }
  }
}
</script>

<style scoped></style>
