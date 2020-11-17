<template>
  <div>
    <div v-if="isLoading">Загрузка поста...</div>
    <div v-if="errors">При загрузке поста произошла ошибка...</div>
    <div class="article" v-if="article">
      <div class="article__header">
        <div class="article__header-row">
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
          <div class="article__buttons" v-if="isAuthor !== null">
            <template v-if="isAuthor">
              <router-link :to="{name: 'updateArticle', params: {slug: article.slug}}" class="article__button--edit">
                <el-button type="info" plain icon="el-icon-edit">Редактировать</el-button>
              </router-link>
              <el-button type="danger" plain icon="el-icon-delete" @click="deleteArticle" :loading="deleteIsLoading">
                Удалить
              </el-button>
            </template>
            <template v-else>
              <el-button type="info" plain icon="el-icon-message-solid">Подписаться на автора</el-button>
              <el-button
                v-if="article.favorited"
                plain
                type="success"
                icon="el-icon-minus"
                :loading="favoriteIsLoading"
                @click="deleteFromFavorite"
              >
                Удалить статью из избранного
              </el-button>
              <el-button v-else type="success" icon="el-icon-plus" :loading="favoriteIsLoading" @click="addToFavorite">
                Добавить статью в избранное
              </el-button>
            </template>
          </div>
        </div>
      </div>
      <h1 class="article__title">{{ article.title }}</h1>
      <p class="article__description">{{ article.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

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
      errors: state => state.article.errors,
      deleteIsLoading: state => state.article.delete.isLoading,
      favoriteIsLoading: state => state.article.favorite.isLoading
    }),
    ...mapGetters(['currentUser']),
    isAuthor() {
      if (!this.article || !this.currentUser) return null
      return this.article.author.username === this.currentUser.username
    }
  },
  methods: {
    deleteArticle() {
      this.$store.dispatch('deleteArticle', {slug: this.slug}).then(() => {
        this.$router.push({name: 'home'})
      })
    },
    addToFavorite() {
      this.$store.dispatch('addArticleToFavorite', {slug: this.slug})
    },
    deleteFromFavorite() {
      this.$store.dispatch('deleteArticleFromFavorite', {slug: this.slug})
    }
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
  margin-bottom: 10px;
}
.article__user {
  display: flex;
  align-items: center;
  margin-right: 50px;
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
.article__header-row {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
}
.article__button--edit {
  margin-right: 10px;
}
</style>
