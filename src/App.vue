<template>
  <el-container>
    <el-header style="background-color: forestgreen">Header</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: deepskyblue">Aside</el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
