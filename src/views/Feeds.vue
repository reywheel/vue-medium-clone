<template>
  <el-row class="feeds__wrapper" :gutter="20">
    <el-col class="feeds__feed-area" :span="18">
      <AppFeed api-url="/articles"></AppFeed>
    </el-col>
    <el-col class="feeds__sidebar-area" :span="6">
      sidebar
    </el-col>
  </el-row>
</template>

<script>
import AppFeed from '@/components/AppFeed'

export default {
  name: 'Feeds',
  components: {AppFeed}
}
</script>

<style scoped lang="scss"></style>
