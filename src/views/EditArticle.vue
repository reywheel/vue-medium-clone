<template>
  <div class="el-row">
    <div class="el-col-12 el-col-offset-6">
      <template v-if="article">
        <AppValidationErrors v-if="errors" :validation-errors="errors" />
        <AppArticleForm
          :is-submitting="isSubmitting"
          @onSubmit="editArticle"
          form-title="Редактировать статью"
          :initial-data="article"
        />
      </template>
      <template v-if="isLoading">
        Загрузка формы...
      </template>
    </div>
  </div>
</template>

<script>
import AppArticleForm from '@/components/AppArticleForm'
import {mapState} from 'vuex'
import AppValidationErrors from '@/components/AppValidationErrors'

export default {
  name: 'EditArticle',
  components: {AppValidationErrors, AppArticleForm},
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.updateArticle.isSubmitting,
      errors: state => state.updateArticle.errors,
      article: state => state.article.data,
      isLoading: state => state.article.isLoading
    })
  },
  methods: {
    editArticle(article) {
      this.$store.dispatch('updateArticle', {article, slug: this.slug}).then(() => {
        this.$router.push({name: 'article', params: {slug: this.slug}})
      })
    }
  },
  mounted() {
    this.$store.dispatch('getArticle', {slug: this.slug})
  }
}
</script>

<style scoped></style>
