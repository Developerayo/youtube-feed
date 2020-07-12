var channelID = "UCpidmaY0_DVjBk1lyHKNxtQ";
$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID, function (data) {
    for (i = 0; i < 20; i++) {
        var title = data.items[i].title;
        var link = data.items[i].link;
        var id = link.substr(link.indexOf("=") + 1);
        console.log(id);
        jQuery('body>.youtube-feed').append('<div class="video"><iframe class="yt_video" src="https://youtube.com/embed/' + id + '?controls=0&showinfo=0&rel=0" width="300" height="200" frameborder="0" allowfullscreen></iframe></div>');
    }
});
