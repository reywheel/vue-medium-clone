<template>
  <el-row type="flex" class="register__row">
    <el-col :offset="8" :span="8">
      <AppValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h3 style="text-align: center">Регистрация</h3>
        </div>
        <el-form @submit.native.prevent="submitHandler">
          <el-input placeholder="Имя" v-model="username" class="app-input"></el-input>
          <el-input placeholder="Email" v-model="email" class="app-input"></el-input>
          <el-input placeholder="Пароль" v-model="password" show-password class="app-input"></el-input>
          <el-button type="success" native-type="submit" :loading="isSubmitting">Зарегистрироваться</el-button>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import AppValidationErrors from '@/components/AppValidationErrors'

export default {
  name: 'AppRegister',
  components: {AppValidationErrors},
  comments: {
    AppValidationErrors
  },
  data: () => ({
    username: '',
    email: '',
    password: ''
  }),
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
    }
  },
  methods: {
    submitHandler() {
      const credentials = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', credentials).then(() => {
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<style scoped lang="scss">
.app-input {
  margin-bottom: 10px;
}
.register__row {
  min-height: calc(100vh - 100px);
  align-items: center;
}
</style>
