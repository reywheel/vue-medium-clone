<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      Популярные теги
    </div>
    <template v-if="tags">
      <router-link v-for="(tag, index) of tags" :key="index" :to="{name: 'tag', params: {tag}}">
        <el-tag type="success" effect="dark" class="tag">
          {{ tag }}
        </el-tag>
      </router-link>
    </template>
    <div v-if="isLoading">Загрузка...</div>
    <div v-if="errors">Произошла ошибка...</div>
  </el-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'AppTags',
  computed: {
    ...mapState({
      tags: state => state.tags.data,
      isLoading: state => state.tags.isLoading,
      errors: state => state.tags.errors
    })
  },
  mounted() {
    if (!this.tags) this.$store.dispatch('getTags')
  }
}
</script>

<style scoped lang="scss">
.tag {
  margin: 2px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: darken(#67c23a, 5);
  }
}
</style>
