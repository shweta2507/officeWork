/*
 * Scrollbar Width Test
 * Adds `layout-scrollbar-obtrusive` class to body if scrollbars use up screen real estate
 */
    "use strict"


    
    $('#features-group-all ul li.list-item').click(function(){
        var getIndex = jQuery(this).index();
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        jQuery(this).closest('#custom-engagement').find('.group-tabber-open').removeClass('current');
        jQuery(this).closest('#custom-engagement').find('.group-tabber-open').eq(getIndex).addClass('current');
    });


    
    $('#add-conf-popup #Confirmation-button .btn-blue, #add-hyg-popup #Hygiene-button .btn-blue, #add-rem-popup #reminder-button .btn-blue, #add-conf-popup2 #Confirmation-button4 .btn-blue, #add-hyg-popup4 #Hygiene-button4 .btn-blue, #add-rem-popup5 #reminder-button5 .btn-blue').click(function(ele){
        var $this = $(ele.currentTarget);
        setTimeout(function(){
        if($this.closest('.upload-img-wrapper').find('.show-error').length === 0){
            $this.parent().addClass('show-loader');
            setTimeout(function(){
                $this.parent().removeClass('show-loader');
            }, 3000);
        }
        }, 0);
    });



    jQuery(document).ready(function() {
        (function() {
            var showChar = 86;
            var ellipsestext = "...";
            jQuery(".inner-content > .inner-content-text").each(function() {
            var content = jQuery(this).html();
            if (content.length > showChar) {
                var c = content.substr(0, showChar);
                var h = content;
                var html =
                '<div class="truncate-text" style="display:block">' +
                c +
                '<span class="moreellipses">' +
                ellipsestext +
                '&nbsp;&nbsp;<a href="" class="moreless more">more</a></span></span></div><div class="truncate-text" style="display:none">' +
                h +
                '<a href="" class="moreless less">Less</a></span></div>';
                jQuery(this).html(html);
            }
            });
            jQuery(".moreless").click(function() {
                var thisEl = jQuery(this);
                var cT = thisEl.closest(".truncate-text");
                var tX = ".truncate-text";
                if (thisEl.hasClass("less")) {
                    cT.prev(tX).toggle();
                    cT.slideToggle();
                } else {
                    cT.toggle();
                    cT.next(tX).fadeToggle();
                }
                return false;
            });
        })();
    });
    

    