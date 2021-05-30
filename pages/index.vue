<template>
  <div class="container">
    <form>
      <label for="name">URL: </label>
      <input v-model="url" type="url" />
      <!-- <p>Your name is: {{ this.url }}</p> -->
      <!-- <input type="submit" v-on:submit.prevent="parseUrl(url)" /> -->
      <b-button @click="parseUrl()">Submit</b-button>
    </form>
    <div id="thing"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator';
import Smartembed from '~/components/Smartembed.vue';

@Component({
  components: {
    Smartembed,
  },
})
export default class extends Vue {
  url: string = '';
  showUrl: boolean = false;

  // youtubeUrl: string = 'https://www.youtube.com/watch?v=9UVdAbFO56k&t=11s';
  // twitterUrl: string = 'https://twitter.com/politietost?tweetlimit=3'

  parseUrl(url: string) {
    try {
      const urlToCheck = new URL(this.url);
      const hostname = urlToCheck.hostname;
      console.log(hostname);
      if (hostname === 'www.youtube.com') {
        this.youtubeEmbed();
      }
      if (hostname === 'twitter.com') {
        this.twitterEmbed();
      }
      if (hostname === 'imgur.com') {
        this.imgurEmbed();
      }
    } catch (error) {
      console.log('invalid URL');
    }
  }

  twitterEmbed() {
    var twitterUrl = new URL(this.url);
    var twitter_id = twitterUrl.pathname.split('/')[1]; // politietost
    var tweetLimit = twitterUrl.search.split('=')[1]; // 3 (or other number)

    var twitterElement = document.createElement('a');
    twitterElement.className = 'twitter-timeline';
    twitterElement.href = `${twitterUrl}`;
    twitterElement.setAttribute('data-tweet-limit', `${tweetLimit}`);
    twitterElement.setAttribute('data-height', '400');
    twitterElement.setAttribute('data-chrome', 'nofooter noborders');
    twitterElement.textContent = `Tweets from ${twitter_id}`;

    var twitterScriptTag = document.createElement('script');
    twitterScriptTag.async = true;
    twitterScriptTag.src = 'https://platform.twitter.com/widgets.js';
    twitterScriptTag.charset = 'utf-8';
    console.log(twitterElement, twitterScriptTag);
    document
      .getElementById('thing')
      ?.appendChild(twitterElement)
      .appendChild(twitterScriptTag);
  }

  youtubeEmbed() {
    var youtubeUrl = new URL(this.url);
    var video_id = youtubeUrl.search.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }

    var youtubeElement = document.createElement('amedia-smartembed-iframe');
    youtubeElement.className = 'am-smartembed am-embed-ratio';
    youtubeElement.style.paddingTop = '56.25%';
    youtubeElement.setAttribute(
      'data-iframeurl',
      `https://www.youtube.com/embed/${video_id}?start=0`
    );
    console.log(youtubeElement);
    document.getElementById('thing')?.appendChild(youtubeElement);
  }

  imgurEmbed() {
    var imgurUrl = new URL(this.url);
    var imgur_id = imgurUrl.pathname.split('/')[2];

    var imgurElementBlockquote = document.createElement('blockquote');
    imgurElementBlockquote.className = 'imgur-embed-pub';
    imgurElementBlockquote.lang = 'en';
    imgurElementBlockquote.setAttribute('data-id', `a/${imgur_id}`);
    imgurElementBlockquote.setAttribute('data-context', 'false');

    var imgurElementLink = document.createElement('a');
    imgurElementLink.href = `https://imgur.com/a/${imgur_id}`;
    imgurElementLink.textContent = 'Imgur';

    imgurElementBlockquote.appendChild(imgurElementLink);

    var imgurElementScript = document.createElement('script');
    imgurElementScript.async = true;
    imgurElementScript.src = `https://s.imgur.com/min/embed.js`;
    imgurElementScript.charset = 'utf-8';

    document
      .getElementById('thing')
      ?.appendChild(imgurElementBlockquote)
      .appendChild(imgurElementScript);

    console.log(imgurElementBlockquote, imgurElementScript);
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
