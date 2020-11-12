<template>
  <div class="app-header">
    <router-link :to="{name: 'home'}" class="header__logo">
      <h2>Medium Clone</h2>
    </router-link>
    <div class="header__menu">
      <router-link
        v-for="link of menuLinks"
        :key="link.routeName"
        :to="{name: link.routeName}"
        class="header__menu-item"
        active-class="header__menu-item--active"
      >
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
    links: [
      {
        title: 'Войти',
        routeName: 'login',
        isLoggedIn: false
      },
      {
        title: 'Зарегистрироваться',
        routeName: 'register',
        isLoggedIn: false
      },
      {
        title: 'Добавить статью',
        routeName: 'createArticle',
        isLoggedIn: true
      },
      {
        title: 'Настройки',
        routeName: 'settings',
        isLoggedIn: true
      },
      {
        title: 'Профиль',
        routeName: 'profile',
        isLoggedIn: true
      }
    ]
  }),
  computed: {
    menuLinks() {
      const isLoggedIn = this.$store.state.auth.isLoggedIn
      return this.links.filter(link => {
        return link.isLoggedIn === !!isLoggedIn
      })
    },
    currentUser() {
      return this.$store.state.auth.currentUser
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
}
.header__menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__menu-item {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s;
  height: 56px;
  line-height: 56px;
  white-space: nowrap;
  border-bottom: 1px solid transparent;

  &--active {
    border-bottom: 1px solid #5cb85c;
  }
}
.header__logo {
  font-size: 14px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  height: 56px;
  line-height: 56px;
  white-space: nowrap;
  list-style: none;

  h2 {
    color: #5cb85c;
  }
}
</style>
