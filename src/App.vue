<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <div class="topnav">
      <a href="#welcome">{{$t('aboutHeader')}}</a>
      <a href="#examples">{{$t('examplesHeader')}}</a>
      <a href="https://www.linkedin.com/in/jeffrey-ernst/" target="_blank">
        <img class="github" src="@/assets/LinkedIn_Logo.svg">
      </a>
      <a href="https://github.com/irongollem" target="_blank">
        <img class="github" src="/GitHub-Mark-32px.png">
        <img class="github" src="/GitHub_Logo.png">
      </a>
      <language-toggle></language-toggle>
    </div>
    <router-view/>
  </div>
</template>

<script>
import LanguageToggle from '@/components/LanguageToggle'

export default {
  components: { LanguageToggle }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: .95rem;
  &:hover {
    transform: scale(1.1);
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.topnav {
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & > * {
    margin: 0 .2rem;
  }
}
.github {
  height: 16px;
  margin: 2px 0;
}

.h2 {
  font-size: 2rem;
}

.collapsable {

}
</style>
