<template>
  <div class="container">
    <form>
      <label for="name">URL: </label>
      <input v-model="url" type="url" />
      <!-- <p>Your name is: {{ this.url }}</p> -->
      <!-- <input type="submit" v-on:submit.prevent="parseUrl(url)" /> -->
      <b-button @click="parseUrl()">Submit</b-button>
    </form>
    <div v-if="markup">
      {{ url }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator'
import Smartembed from '~/components/Smartembed.vue'

@Component({
  components: {
    Smartembed,
  },
})
export default class extends Vue {
  url: string = ''
  showUrl: boolean = false

  youtubeUrl: string = 'https://www.youtube.com/watch?v=9UVdAbFO56k&t=11s'
  // twitterUrl: string = 'https://twitter.com/politietost?tweetlimit=3'

  parseUrl(url: string) {
    var markup: any 

    if (this.url.includes('youtube')) {
      var youtubeUrl = new URL(this.url)
      var video_id = youtubeUrl.search.split('v=')[1]
      var ampersandPosition = video_id.indexOf('&')
      if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition)
      }
      console.log(video_id)
    } else {
      alert('Please enter a valid URL')
      this.url = ''
    }
    // console.log(testUrl.host)
  }
}
</script>


<style>
.container {
  margin: 0 auto;
  margin-top: 50px;
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 0.1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  min-height: 80vh;
  max-width: 1300px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
