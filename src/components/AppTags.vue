<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      Популярные теги
    </div>
    <template v-if="tags">
      <el-tag v-for="(tag, index) of tags" :key="index" type="success" effect="dark" class="tag" @click="clickOnTag">
        {{ tag }}
      </el-tag>
    </template>
    <template v-if="isLoading">
      Loading...
    </template>
    <template v-if="errors">
      Error...
    </template>
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
  methods: {
    clickOnTag(e) {
      const slug = e.target.textContent
      this.$router.push({name: 'tag', params: {slug}})
    }
  },
  mounted() {
    this.$store.dispatch('getTags')
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
