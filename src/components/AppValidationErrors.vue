<template>
  <ul class="ul">
    <template v-for="(error, key) of validationErrors">
      <li v-for="(text, index) of error" :key="key + index" class="text">{{ `${key} ${text}` }}</li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'AppValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.ul {
  box-sizing: border-box;
  margin: 20px 0;
  background-color: #f56c6c;
  color: #fff;
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
}
.text {
  margin: 2px 0;
  margin-left: 10px;
  list-style: circle;
}
</style>
