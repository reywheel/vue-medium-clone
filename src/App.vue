<template>
  <div>
    <AppHeader />
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.aside {
  background-color: deepskyblue;
  min-height: calc(100vh - 60px);
}
</style>
