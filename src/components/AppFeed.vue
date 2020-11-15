<template>
  <div>
    <template v-if="feed">
      <el-card class="box-card article" v-for="(article, index) in feed.articles" :key="index">
        <div slot="header" class="clearfix">
          <div class="article__user">
            <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
              <el-avatar :src="article.author.image" class="article__user-avatar"></el-avatar>
            </router-link>
            <div class="article__user-info">
              <router-link
                :to="{name: 'userProfile', params: {slug: article.author.username}}"
                class="article__user-username"
              >
                {{ article.author.username }}
              </router-link>
              <div class="article__user-userdate">{{ new Date(article.createdAt).toLocaleDateString() }}</div>
            </div>
          </div>
        </div>
        <h3 class="article__title">{{ article.title }}</h3>
        <p class="article__description">{{ article.description }}</p>
        <router-link class="article__link" :to="{name: 'article', params: {slug: article.slug}}">
          Читать далее
        </router-link>
      </el-card>
      <AppPagination
        :total="feed.articlesCount"
        :current-page="currentPage"
        url="/"
        @currentPageChange="currentPageChange"
      />
    </template>
    <template v-if="isLoading">
      Загрузка...
    </template>
    <template v-if="errors">
      Произошла ошибка...
    </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {parseUrl, stringify} from 'query-string'
import AppPagination from '@/components/AppPagination'
import {limit} from '@/helpers/vars'

export default {
  name: 'AppFeed',
  components: {AppPagination},
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      feed: state => state.feed.data,
      isLoading: state => state.feed.isLoading,
      errors: state => state.feed.errors
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    offset() {
      return this.currentPage * limit - limit
    },
    baseUrl() {
      return this.$route.path
    }
  },
  methods: {
    currentPageChange(newCurrentPage) {
      const path = this.baseUrl + '?page=' + newCurrentPage
      this.$router.push({path})
    },
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl)
      const params = stringify({
        ...parsedUrl.query,
        limit,
        offset: this.offset
      })
      const urlWithParams = `${parsedUrl.url}?${params}`
      this.$store.dispatch('getFeed', {
        apiUrl: urlWithParams
      })
    }
  },
  watch: {
    currentPage() {
      this.fetchFeed()
    }
  },
  mounted() {
    this.fetchFeed()
  }
}
</script>

<style scoped lang="scss">
.article {
  margin-bottom: 25px;
}
.article__user {
  display: flex;
  align-items: center;
}
.article__user-avatar {
  margin-right: 10px;
}
.article__user-username {
  color: #5cb85c;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}
.article__user-userdate {
  margin-top: 7px;
}
.article__title {
  margin-bottom: 8px;
}
.article__description {
  opacity: 0.7;
  margin-bottom: 8px;
}
</style>
