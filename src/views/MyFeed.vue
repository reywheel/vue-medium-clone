<template>
  <el-row class="feeds__wrapper" :gutter="20">
    <el-col class="feeds__feed-area" :span="18">
      <AppFeedToggler style="margin-bottom: 20px;" />
      <AppFeed :api-url="apiUrl"></AppFeed>
    </el-col>
    <el-col class="feeds__sidebar-area" :span="6">
      <AppTags />
    </el-col>
  </el-row>
</template>

<script>
import AppFeed from '@/components/AppFeed'
import AppTags from '@/components/AppTags'
import AppFeedToggler from '@/components/AppFeedToggler'

export default {
  name: 'MyFeed',
  components: {AppTags, AppFeed, AppFeedToggler},
  data: () => ({
    activeFeed: 'global',
    apiUrl: 'articles/feed'
  })
}
</script>

<style scoped lang="scss"></style>
