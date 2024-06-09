chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
  var tablink = tab[0].url, loader = $('#loading'), timer,
      thumbnail, thumbnailShort;

  function error(errorText) {
    $("html, body").css({'height': 'auto', 'width': 'auto'});
    $('#container').html('<div id="error">' + errorText + '</div>').show();
    loader.hide();
  }

  $(document).ajaxStart(function() {
    timer && clearTimeout(timer);
    loader.fadeIn(250);
  }).ajaxStop(function() {
    clearTimeout(timer);
    loader.hide();
  });

  $(function() {
    if(tablink.indexOf("youtube.") >= 0 && tablink.indexOf("/watch?") >= 0) {
      $.ajax({
        type: 'GET',
        url: tablink,
        dataType: 'html',
        success: function(tabLinkData) {
          if($(tabLinkData).filter('meta[property="og:image"]').attr('content')) {
            thumbnail = $(tabLinkData).filter('meta[property="og:image"]').attr('content');
          } else if($(tabLinkData).filter('link[name="www-feather-html"]')) {
            thumbnail = 'https://i1.ytimg.com/vi/' + tablink.split('watch?v=').pop();
            if(thumbnail.indexOf('&') >= 0) {
              thumbnail = thumbnail.substr(0, thumbnail.indexOf('&'));
            }
            thumbnail += '/hqdefault.jpg';
          }

          if(thumbnail) {
            if(thumbnail.length >= 55) {
              thumbnailShort = $.trim(thumbnail).substring(0, 55).trim(this) + "...";
            } else {
              thumbnailShort = thumbnail;
            }
            $("#thumbnail-url").html('Thumbnail URL: <a href="' + thumbnail + '">' + thumbnailShort + '</a>');
            $("#thumbnail").html('<a href="' + thumbnail + '"><img src="' + thumbnail + '" /></a>');
            $('#container').fadeIn(500);

            $('a').on('click', function() {
              chrome.tabs.create({url: $(this).attr('href')});
            });

            $('#thumbnail').hover(function() {
              $(this).stop().fadeTo(250, 0.9);
            }, function() {
              $(this).stop().fadeTo(250, 1.0);
            });
          } else {
            error('Something went wrong while trying to fetch the thumbnail. It appears there isn\'t one available, or at least, not one available using this plugin\'s methods.');
          }
        },
        error: function() {
          error("Something went wrong while trying to fetch the thumbnail. Please ensure you're viewing an actual video, and not just a page on youtube and try again.");
        }
      });
    } else {
      error('You must be viewing a video on <a href="http://www.youtube.com" target="_blank">http://www.youtube.com</a>, and be viewing that tab for this extension to work!');
    }
  });
});