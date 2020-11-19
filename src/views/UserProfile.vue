<template>
  <div>
    <div class="profile" v-if="userProfile">
      <div class="el-row profile__header">
        <div class="el-col-16 el-col-offset-4 profile__header-col">
          <div class="profile__user">
            <el-avatar class="profile__user-image" :src="userProfile.image" :size="160" />
            <h1 class="profile__user-username">{{ userProfile.username }}</h1>
            <p class="profile__user-bio">{{ userProfile.bio }}</p>
          </div>
        </div>
      </div>
      <el-divider />
      <div class="el-row profile__body">
        <div class="el-col-16 el-col-offset-4">
          <el-button-group class="profile__body-buttons">
            <router-link
              :to="{name: 'userProfile', params: {slug: this.slug}}"
              class="el-button el-button--default"
              :active-class="'el-button--success'"
              exact
            >
              Авторские статьи
            </router-link>
            <router-link
              :to="{name: 'userFavorited', params: {slug: this.slug}}"
              class="el-button el-button--default"
              :active-class="'el-button--success'"
            >
              Лайкнутые статьи
            </router-link>
          </el-button-group>
          <AppFeed :api-url="apiUrl" />
        </div>
      </div>
    </div>
    <div v-if="isLoading">
      Загрузка профиля..
    </div>
    <div v-if="errors">
      Произошла ошибка...
    </div>
  </div>
</template>

<script>
import AppFeed from '@/components/AppFeed'
import {actionTypes} from '@/store/userProfile'
import {mapState} from 'vuex'

export default {
  name: 'UserProfile',
  components: {AppFeed},
  computed: {
    ...mapState({
      userProfile: state => state.userProfile.userProfile,
      isLoading: state => state.userProfile.isLoading,
      errors: state => state.userProfile.errors
    }),
    slug() {
      return this.$route.params.slug
    },
    apiUrl() {
      const routeName = this.$route.name
      return routeName === 'userProfile' ? `/articles?author=${this.slug}` : `/articles?favorited=${this.slug}`
    }
  },
  methods: {
    getUserProfile() {
      this.$store.dispatch(actionTypes.getUserProfile, {slug: this.slug})
    }
  },
  mounted() {
    this.getUserProfile()
  }
}
</script>

<style scoped lang="scss">
.profile__user-image {
  margin-bottom: 15px;
}
.profile__user-username {
  margin-bottom: 10px;
}
.profile__user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profile__body-buttons {
  margin-bottom: 25px;
}
</style>
