(function() {

    $('#geolocation').bind('pageshow', function() {
        // Fullscreen map
        var height = $('#geolocation').height() - $('#geolocation div[data-role="header"]').height(); 
        var width  = $('#geolocation').width();
        $('#map_canvas').css({
            'height': height + 'px',
            'width':  width  + 'px'
        });

        // Default map is centered on Nitobi office
        var map = new google.maps.Map(document.getElementById("map_canvas"), {
            center:    new google.maps.LatLng(49.280, -123.105),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom:      12,
        });

        var onSuccess = function(position) {
            alert('We can reach Google - Lat=' + position.coords.latitude + ", Lon=" + position.coords.longitude);
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            // Center the map on the found location
            map.panTo(latlng);

            var marker = new google.maps.Marker({
                animation: google.maps.Animation.DROP,
                map:       map,
                position:  latlng,
                title:     'You are here'
            });
            
        };

        var onFail = function() {
            alert('Failed to get geolocation');
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onFail);
    });

})();
