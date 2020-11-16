<template>
  <el-button-group>
    <router-link :to="{name: 'feed'}" exact class="el-button el-button--default" active-class="el-button--success">
      Мои посты
    </router-link>
    <router-link :to="{name: 'home'}" exact class="el-button el-button--default" active-class="el-button--success">
      Все посты
    </router-link>
    <router-link
      v-if="tag"
      :to="{name: 'tag', params: {tag}}"
      exact
      class="el-button el-button--default"
      active-class="el-button--success"
    >
      # {{ tag }}
    </router-link>
  </el-button-group>
</template>

<script>
export default {
  name: 'AppFeedToggler',
  props: {
    tag: {
      type: String,
      required: false
    }
  },
  methods: {
    tabClick(e) {
      switch (e.name) {
        case 'myFeed':
          this.$router.push({name: 'feed'})
          this.activeTab = e.name
          break
      }
    }
  }
}
</script>

<style scoped></style>
