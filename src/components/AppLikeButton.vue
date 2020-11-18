<template>
  <el-button
    type="danger"
    :icon="localIsLiked ? 'el-icon-star-on' : 'el-icon-star-off'"
    size="mini"
    round
    :plain="!localIsLiked"
    @click="toggleLike"
  >
    {{ localLikesCount }}
  </el-button>
</template>

<script>
import {actionTypes} from '@/store/addLike'

export default {
  name: 'AppLikeButton',
  props: {
    slug: {
      type: String,
      required: true
    },
    likesCount: {
      type: Number,
      required: true
    },
    isLiked: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      localIsLiked: this.isLiked,
      localLikesCount: this.likesCount
    }
  },
  methods: {
    toggleLike() {
      if (this.localIsLiked) {
        this.localLikesCount--
      } else {
        this.localLikesCount++
      }
      this.localIsLiked = !this.localIsLiked
      this.$store.dispatch(actionTypes.addLike, {slug: this.slug, isLiked: this.localIsLiked})
    }
  }
}
</script>

<style scoped lang="scss"></style>
