<template>
  <div class="home">
    <article class="container">
      <header class="header">
        <span class="has-text-satisfy">Creative</span><span class="has-text-play">FLUX</span>
      </header>
      <section>
        {{$t('welcomeMsg')}}
      </section>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Play|Satisfy&display=swap');

.has-text{
  &-play {
  font-family: 'Play', sans-serif;
  }
  &-satisfy {
    font-family: 'Satisfy', cursive;
  }
}

.home {
  background-image: url("../assets/me.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
  width: 100%;
  height: 100%;
  margin-left: 200px;
}
.container {
  background-color: whitesmoke;
  height: 100vh;
  padding: 2rem 2rem 2rem 1rem;
  width: 50%;
  border-top-right-radius: 25% 60%;
  border-bottom-right-radius: 25% 50%;
  position: fixed;
  top: 0;
  left: 0;
}
.header {
  font-size: 2rem;
}
</style>
