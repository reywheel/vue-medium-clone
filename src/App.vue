<template>
  <div>
    <el-container class="el-row">
      <div class="el-col-14 el-col-offset-5">
        <AppHeader />
        <el-main>
          <router-view></router-view>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  mounted() {
    this.$store.dispatch('getCurrentUser')
  }
}
</script>

<style lang="scss" scoped></style>
