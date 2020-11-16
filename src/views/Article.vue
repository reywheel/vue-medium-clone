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
          <div v-if="isAuthor" class="article__buttons">
            <el-button type="info" plain icon="el-icon-edit">Редактировать</el-button>
            <el-button type="danger" plain icon="el-icon-delete" @click="deleteArticle" :loading="deletingInProcess"
              >Удалить</el-button
            >
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
      deletingInProcess: state => state.article.deletingInProcess
    }),
    ...mapGetters(['currentUser']),
    isAuthor() {
      if (!this.article || !this.currentUser) return false
      return this.article.author.username === this.currentUser.username
    }
  },
  methods: {
    deleteArticle() {
      this.$store.dispatch('deleteArticle', {slug: this.slug}).then(() => {
        this.$router.push({name: 'home'})
      })
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
</style>
