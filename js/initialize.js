(function ($) {

    Drupal.behaviors.islandora_global_sm2 = {
        attach: function (context, settings) {
            // Go through the page and find .ethnography-link elements.
            // Swap their href's and data-source? will this impact the tooltip?
            // create a playlist by theming (oh shit, no templating?) each link it finds.
            // append that into the playlist.
            // then... explicitly call bar-ui.js or let it flow in?
            var playlist = '';
            $( ".ethnography-link").each( function ( index ) {
                var source, label, targetId;
                // Add the id
                $( this ).attr('id', 'gsm2-link' + index);
                // Create a playlist item
                source = $(this).attr('data-source');
                label = $(this).text();
                targetId = 'gsm2-link' + index.toString() + '-target';
                playlist += '<li><a href="' + source + '" id="' + targetId + '" type="audio/mpeg">' + label + '</a></li>';
                // Add the onclick to point to targetID
                $(this).click  (function( event ) {
                    event.preventDefault();
                    $("#" + targetId)[0].click();
                });
            });
            $('#gsm2-playlist').append(playlist);
        }
    };



}(jQuery));