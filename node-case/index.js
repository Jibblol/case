
// const youtubeUrl = 'https://www.youtube.com/watch?v=9UVdAbFO56k&t=11s';
// const youtubeUrl = 'https://www.youtube.com/watch?v=BHACKCNDMW8&t=78s';
const youtubeUrl = 'https://www.youtube.com/watch?v=74F6lAOLtyA&t=23s';

// const twitterUrl = 'https://twitter.com/politietost?tweetlimit=3';
// const twitterUrl = 'https://twitter.com/erna_solberg?tweetlimit=5';
const twitterUrl = 'https://twitter.com/jonasgahrstore?tweetlimit=7';

const imgurUrl = 'https://imgur.com/gallery/v38ZpVa';
// const imgurUrl = 'https://imgur.com/gallery/6j0xm1T';
// const imgurUrl = 'https://imgur.com/gallery/93BYaK4';
 
 function parseUrl(url) {
     try {
        const urlToCheck = new URL(url);
        const hostname = urlToCheck.hostname;
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

 function imgurEmbed(imgurUrl) {
    // var imgur_id = imgurUrl.pathname
    var imgur_id = imgurUrl.pathname.split('/')[2];

    return `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${imgur_id}" data-context="false">
        <a href="https://imgur.com/a/${imgur_id}">Imgur</a>
    </blockquote>
    <script async src="https://s.imgur.com/min/embed.js" charset="utf-8"></script> ` 

 }

console.log(parseUrl(youtubeUrl))
console.log('')
console.log(parseUrl(twitterUrl))
console.log('')
console.log(parseUrl(imgurUrl))