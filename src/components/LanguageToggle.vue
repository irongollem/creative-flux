<template>
    <div @click="changeLocale" class="language-switch">
        <div class='flag-container'>
            <flag iso="gb" squared></flag>
            <flag iso="nl" squared></flag>
        </div>
        <div class="switch" :class="{dutch: locale !== 'nl'}"></div>
    </div>
</template>

<script>
import i18n from '../../plugins/i18n'

export default {
  computed: {
    locale () { return i18n.locale }
  },
  methods: {
    changeLocale () { i18n.locale = i18n.locale === 'en' ? 'nl' : 'en' }
  },
  data () {
    return {
      languages: [
        {
          flag: 'gb',
          language: 'en',
          title: 'English'
        },
        {
          flag: 'nl',
          language: 'nl',
          title: 'Nederlands'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.language-switch {
    cursor: pointer;
    position: relative;
}
.flag-container {
    display: flex;
    overflow: hidden;
    background: grey;
    width: 32px;
    height: 16px;
    border-radius: 8px;
    margin: 2px;
}
.dutch {
    margin-left: 16px;
}
.switch {
    transition: all .3s ease;
    width: 14px;
    height: 14px;
    border-radius: 8px;
    background-image: linear-gradient(white, lightgrey);
    position: absolute;
    top: 3px;
    left: 3px;
}
</style>
