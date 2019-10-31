<template>
  <div class="page">
    <article id="welcome" class="home">
      <section class="container">
        <header class="header">
          <span class="has-text-satisfy">Creative</span>
          <span class="has-text-play">FLUX</span>
          <div class="subheader has-text-play">DESIGN & DEVELOPMENT</div>
        </header>
        <p>{{$t('welcomeMsg')}}</p>
        <header class="h2 has-text-play">{{$t('aboutHeader')}}</header>
        <p>{{$t('aboutMsg')}}</p>
        <p>{{$t('aboutMsg2')}}</p>
        <p>{{$t('aboutMsg3')}}</p>
        <p>{{$t('aboutMsg4')}}</p>
      </section>
    </article>

    <p class="spacer"></p>

    <article id="examples" ref="examples">
        <header class="h2 has-text-play">{{$t('examplesHeader')}}</header>
      <section class="container">
      </section>
    </article>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Play|Satisfy&display=swap");

.has-text {
  &-play {
    font-family: "Play", sans-serif;
  }
  &-satisfy {
    font-family: "Satisfy", cursive;
  }
}

.page {
  background-color: #e7eaf0;
}

.home {
  background-color: #e7eaf0;
  background-image: url("../assets/me.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
  width: 100%;
}
.container {
  background-color: #e7eaf0;
  height: 100vh;
  padding: 2rem;
  min-width: calc(100% - 1100px);
  max-width: calc(100% - 600px);
  width: 50%;
  // border-top-right-radius: 25% 60%;
  // border-bottom-right-radius: 25% 50%;
  // position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: 1130px) {
    width: calc(100% - 4rem);
    max-width: 100%;
  }
}
.header {
  font-size: 3rem;
  & *:first-child {
    margin-right: -0.1rem;
    color: #77a6c8;
  }
}
.subheader {
  margin: -1.5rem 0 1rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 3px;
}
</style>
