<template>
  <div class="el-row">
    <div class="el-col-12 el-col-offset-6">
      <AppValidationErrors v-if="errors" :validation-errors="errors" />
      <el-alert
        title="Данные успешно обновлены"
        type="success"
        effect="dark"
        v-if="successAlertIsVisible"
        class="settings__alert"
        @close="closeAlert"
      />
      <el-form @submit.native.prevent="onSubmit" v-if="currentUser">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h1>Данные профиля</h1>
          </div>
          <el-input class="form__input" placeholder="URL аватарки" v-model="currentUser.image"></el-input>
          <el-input class="form__input" placeholder="Логин" v-model="currentUser.username"></el-input>
          <el-input
            class="form__input"
            type="textarea"
            :rows="5"
            placeholder="О себе"
            v-model="currentUser.bio"
          ></el-input>
          <el-input class="form__input" placeholder="Почта" v-model="currentUser.email"></el-input>
          <el-input class="form__input" placeholder="Текущий или новый пароль" v-model="password"></el-input>
          <el-button type="success" native-type="submit" :loading="isSubmitting">Сохранить</el-button>
        </el-card>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {actionTypes} from '@/store/auth'
import AppValidationErrors from '@/components/AppValidationErrors'

export default {
  name: 'Settings',
  components: {AppValidationErrors},
  data: () => ({
    password: '',
    successAlertIsVisible: false
  }),
  computed: {
    ...mapState({
      isSubmitting: state => state.settings.isSubmitting,
      errors: state => state.settings.errors
    }),
    ...mapGetters({
      currentUser: 'currentUser'
    })
  },
  watch: {
    isSubmitting(newValue) {
      if (!newValue && !this.errors) {
        this.successAlertIsVisible = true
      }
    }
  },
  methods: {
    onSubmit() {
      const form = {
        username: this.currentUser.username,
        image: this.currentUser.image,
        bio: this.currentUser.bio,
        email: this.currentUser.email,
        password: this.password
      }
      this.$store.dispatch(actionTypes.updateUser, {userInput: form})
    },
    closeAlert() {
      this.successAlertIsVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
.form__input {
  margin-bottom: 10px;
}
.settings__alert {
  margin-bottom: 25px;
}
</style>
