
const youtubeUrl = 'https://www.youtube.com/watch?v=9UVdAbFO56k&t=11s';

const twitterUrl = 'https://twitter.com/politietost?tweetlimit=3';

const imgurUrl = 'https://imgur.com/gallery/oIpAQ';
 
 function parseUrl(url) {
     try {
        const urlToCheck = new URL(url);
        const hostname = urlToCheck.hostname;
        console.log(hostname);
        if (hostname === 'www.youtube.com') {
            return youtubeEmbed(urlToCheck);
        }
        if (hostname === 'twitter.com') {
            return twitterEmbed(urlToCheck);
        }
        if(hostname === 'imgur.com') {
            return imgurEmbed(urlToCheck);
        }

        // switch (hostname) {
        //     case 'youtube.com':
        //         return youtubeEmbed(urlToCheck);
        //     case 'twitter.com':
        //         return twitterEmbed(urlToCheck);
        //     case 'imgur.com':
        //         return imgurEmbed(urlToCheck);
        //     default:
        //         break;
        // }
    } catch (error) {
        console.log('invalid URL');
    }
 }
 

  function twitterEmbed(twitterUrl) {
    var twitter_id = twitterUrl.pathname.split('/')[1]; // politietost
    var tweetLimit = twitterUrl.search.split('=')[1]; // 3 (or other number)
    return `<a class="twitter-timeline"
    data-tweet-limit="${tweetLimit}"
    data-height="400"
    data-chrome="nofooter noborders"
    href="${twitterUrl}">Tweets fra ${twitter_id}</a>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>`
}

 function youtubeEmbed(youtubeUrl) {
    var video_id = youtubeUrl.search.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    return `<amedia-smartembed-iframe class="am-smartembed am-embed-ratio" style="padding-top: 56.25%"
    data-iframeurl="https://www.youtube.com/embed/${video_id}?start=0"></amedia-smartembed-iframe>` 
    }
 }

console.log(parseUrl(youtubeUrl))
console.log(parseUrl(twitterUrl))
console.log(parseUrl(imgurUrl))