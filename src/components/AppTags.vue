<template>
  <el-card class="box-card">
    <template v-if="tags">
      <el-tag v-for="(tag, index) of tags" :key="index" type="success" effect="dark">
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
  mounted() {
    this.$store.dispatch('getTags')
  }
}
</script>

<style scoped></style>
