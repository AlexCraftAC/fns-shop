$.getJSON('https://coolapis.ga/shop.php', function(data) {
    $.each(data.shop.item, function(i,f) {
        $("ul").append("<li>URL: "+f.gallery+"</li>");
    });
});
