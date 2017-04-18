$(document).ready(function() {
  //accessToken will expire April 21, appToken does not expire
  const accessToken = 'EAAWnoSPn4I4BAHLmy9k1azkfoSS8GtLZAkI8YNZCSbNTQTPSqKWmqZC6Y9iTWBDJXT0BCx3cm9sF6umDQ7ZByjW6z9c0oZCCZChpd6903iZA2ddsrrvGGQYyeuVPZBBOS3lYK7lRu5oApH2fS2sTj0NR1V9udMy5tA8ZD';
  const limit = '6';
  const orgID = '162986107129497';
  const appToken = '1591685417525390|f0AKg5v5KWcM-6Mcsz6Vfi_lXTk';

  // build the API REQUEST
  let APIrequest = 'https://graph.facebook.com/v2.8/' + orgID;
  APIrequest += '/albums?access_token=' + appToken;
  APIrequest += '&pretty=1&fields=photos.limit%28' + limit + '%29%7Blink%2Cname%2Cwebp_images%7D&limit=1';

  //Make the REQUEST
  $.getJSON(APIrequest, (data) => {
    const photoObjects = data.data[0].photos.data;


    //build each photo for the page
    $.each(photoObjects, (idx, val) => {
      let caption = val.name || '🐱';
      if (caption.split('').length > 29) caption = caption.slice(0,30) + '...';
      const link = val.link || '#';
      // const photoRef = val.webp_images[1].source || "https://scontent.xx.fbcdn.net/v/t1.0-0/p75x225/17202775_1320112801416816_1371338858912183462_n.jpg.webp?oh=e39c5cd8f2614b90a58e94f5b006e54c&oe=595F6599";
      const thumbnailRef = val.webp_images[1].source || 'https://scontent.xx.fbcdn.net/v/t1.0-0/p75x225/17202775_1320112801416816_1371338858912183462_n.jpg.webp?oh=e39c5cd8f2614b90a58e94f5b006e54c&oe=595F6599';

      //build the photo article
      let postHTML = '<article class="6u 12u$(xsmall) work-item">'
      postHTML += '<a href=' + link + ' class="image fit thumb"><img src="' + thumbnailRef + '" alt="" style="max-width:100%; max-height:320px;"/></a>';
      postHTML += '<h3> ' + caption + '</h3>';
      // postHTML += '<p>' + caption + '</p>';
      postHTML += '</article>';

      $('#fbPhotos').append(postHTML);

    })
  })

})
