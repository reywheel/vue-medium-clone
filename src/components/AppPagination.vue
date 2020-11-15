<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :current-page="currentPage"
    @current-change="currentPageChange"
  />
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    currentPageChange(newCurrentPage) {
      this.$emit('currentPageChange', newCurrentPage)
    }
  }
}
</script>

<style scoped></style>
