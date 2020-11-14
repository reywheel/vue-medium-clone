<template>
  <el-row class="feeds__wrapper" :gutter="20">
    <el-col class="feeds__feed-area" :span="18">
      <el-tabs v-model="activeFeed">
        <el-tab-pane label="User" name="global"></el-tab-pane>
        <el-tab-pane label="Config" name="second"></el-tab-pane>
        <el-tab-pane label="Role" name="third"></el-tab-pane>
        <el-tab-pane label="Task" name="fourth"></el-tab-pane>
      </el-tabs>
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
  components: {AppFeed},
  data: () => ({
    activeFeed: 'global'
  })
}
</script>

<style scoped lang="scss"></style>
