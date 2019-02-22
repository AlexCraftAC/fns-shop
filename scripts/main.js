function renderItems(pReset=true) {
  $.getJSON('https://coolapis.ga/shop.php', function(data) {
      $.each(data.shop.item, function(i,f) {
          $("#images").append("<img src=" + f.gallery + ">");
      });
   });
});
