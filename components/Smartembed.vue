<template>
  <div>
    <b-button @click="clickHandler()"> Click me</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Getter } from 'nuxt-property-decorator'
import { CreateElement, VNode } from 'vue'
export default class Smartembed extends Vue {
  @Prop() url!: string

  //   mounted() {
  //     console.log('Hello', this.url)
  //   }

  clickHandler(url: string) {
    console.log(url, 'Balle')
  }
}
</script>

<style>
</style>