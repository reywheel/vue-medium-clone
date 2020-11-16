<template>
  <el-button-group>
    <router-link
      v-if="isLoggedIn"
      :to="{name: 'feed'}"
      class="el-button el-button--default"
      :class="routeName === 'feed' ? 'el-button--success' : null"
    >
      Мои посты
    </router-link>
    <router-link
      :to="{name: 'home'}"
      class="el-button el-button--default"
      :class="routeName === 'home' ? 'el-button--success' : null"
    >
      Все посты
    </router-link>
    <router-link
      v-if="tag"
      :to="{name: 'tag', params: {tag}}"
      exact
      class="el-button el-button--default"
      :class="routeName === 'tag' ? 'el-button--success' : null"
    >
      # {{ tag }}
    </router-link>
  </el-button-group>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'AppFeedToggler',
  props: {
    tag: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style scoped></style>
