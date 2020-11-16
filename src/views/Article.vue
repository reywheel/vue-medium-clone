<template>
  <div>
    <div v-if="isLoading">Загрузка поста...</div>
    <div v-if="errors">При загрузке поста произошла ошибка...</div>
    <div class="article" v-if="article">
      <div class="article__header">
        <h1 class="article__title">{{ article.title }}</h1>
        <div class="article__user">
          <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
            <el-avatar :src="article.author.image" class="article__user-img" />
          </router-link>
          <div class="article__user-info">
            <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
              <h3 class="article__user-name">{{ article.author.username }}</h3>
            </router-link>
            <div class="article__user-date">{{ new Date(article.createdAt).toLocaleDateString() }}</div>
          </div>
        </div>
      </div>
      <p class="article__description">{{ article.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Article',
  props: {
    slug: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapState({
      article: state => state.article.data,
      isLoading: state => state.article.isLoading,
      errors: state => state.article.errors
    })
  },
  mounted() {
    this.$store.dispatch('getArticle', {slug: this.slug})
  }
}
</script>

<style scoped lang="scss">
.article__header {
  margin-bottom: 20px;
}
.article__title {
  margin-bottom: 20px;
}
.article__user {
  display: flex;
  align-items: center;
}
.article__user-img {
  margin-right: 20px;
}
.article__user-name {
  margin-bottom: 5px;
  &:hover {
    text-decoration: underline;
  }
}
</style>
