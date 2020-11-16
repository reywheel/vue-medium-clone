<template>
  <el-row class="feeds__wrapper" :gutter="20">
    <el-col class="feeds__feed-area" :span="18">
      <el-tabs v-model="activeFeed">
        <el-tab-pane label="User" name="global"></el-tab-pane>
      </el-tabs>
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

export default {
  name: 'MyFeed',
  components: {AppTags, AppFeed},
  data: () => ({
    activeFeed: 'global',
    apiUrl: 'articles/feed'
  })
}
</script>

<style scoped lang="scss"></style>
