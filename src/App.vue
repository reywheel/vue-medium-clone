<template>
  <el-container>
    <el-header style="background-color: forestgreen">Header</el-header>
    <el-container>
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.aside {
  background-color: deepskyblue;
  min-height: calc(100vh - 60px);
}
</style>
