/*
 * Scrollbar Width Test
 * Adds `layout-scrollbar-obtrusive` class to body if scrollbars use up screen real estate
 */
    "use strict"



    $('#practice-name-group .form-field.custom-select').click(function(ele){
        ele.stopPropagation();
        $('#practice-name-group ul#cardName').show();
        $(this).addClass('active custom-filled');
    });
    $('#practice-name-group ul#cardName li').click(function(ele){
        ele.stopPropagation();
        var values = $(this).text();
        $(this).closest('.custom-input').find('.form-control.select').val(values);
        $(this).closest('.custom-input').find('h3.selected.data').text(values);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().hide();
        $(this).closest('#practice-name-group .form-field.custom-select').removeClass('active custom-filled');
        $('#practice-name-group .custom-select').addClass("custom-filled");
        if($('h3.selected.data').text() === ''){
            $('#practice-name-group .form-field.custom-select').addClass('show-error');
        } else{
            $('#practice-name-group .form-field.custom-select').removeClass('show-error');
        }
    });
    $('#all-information').click(function(){
        $('#practice-name-group ul#cardName').hide();
        $('#practice-name-group .form-field.custom-select').removeClass('active');
        if($('h3.selected.data').text() === ''){
            $('#practice-name-group .form-field.custom-select').addClass('show-error');
            $('#practice-name-group .form-field.custom-select').removeClass('custom-filled');
        } else{
            $('#practice-name-group .form-field.custom-select').removeClass('show-error');
            $('#practice-name-group .form-field.custom-select').addClass('custom-filled');
        }
    });





    $('#days-hours-group .form-field.custom-select').click(function(ele){
        ele.stopPropagation();
        $('#days-hours-group ul#days-hours').show();
        $(this).addClass('active custom-filled');
    });
    $('#days-hours-group ul#days-hours li').click(function(ele){
        ele.stopPropagation();
        var values = $(this).text();
        var $this = $(ele.currenttarget);
        $(this).closest('.custom-input').find('.form-control.select').val(values);
        $(this).closest('.custom-input').find('h3.selected.data').text(values);
        $(this).addClass('active');
        $(this).parent().hide();
        $(this).closest('.form-field.custom-select').removeClass('active');
        $this.closest('#days-hours-group').find('.custom-select').addClass("custom-filled");
        // if($this.closest('h3.selected.data').text() === ''){
        //     $('#days-hours-group .form-field.custom-select').addClass('show-error');
        // } else{
        //     $('#days-hours-group .form-field.custom-select').removeClass('show-error');
        // }
    });



    $('#frequency-days-group .form-field.custom-select').click(function(ele){
        ele.stopPropagation();
        $('#frequency-days-group ul#days').show();
        $(this).addClass('active custom-filled');
    });
    $('#frequency-days-group ul#days li').click(function(ele){
        ele.stopPropagation();
        var values = $(this).text();
        $(this).closest('.custom-input').find('.form-control.select').val(values);
        $(this).closest('.custom-input').find('h3.selected.data').text(values);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().hide();
        $(this).closest('.form-field.custom-select').removeClass('active custom-filled');
        $('#frequency-days-group .custom-select').addClass("custom-filled");
        if($('h3.selected.data').text() === ''){
            $('#frequency-days-group .form-field.custom-select').addClass('show-error');
        } else{
            $('#frequency-days-group .form-field.custom-select').removeClass('show-error');
        }
    });
    $('#add-conf-popup').click(function(){
        $('#days-hours-group ul#days-hours').hide();
        $('#days-hours-group .form-field.custom-select').removeClass('active');
        $('#frequency-days-group ul#days').hide();
        $('#frequency-days-group .form-field.custom-select').removeClass('active');
        if($('#days-hours-group').find('h3.selected.data').text().length > 0){
            $('#days-hours-group').find('.custom-select').addClass("custom-filled");
        } else {
            $('#days-hours-group').find('.custom-select').removeClass("custom-filled");
        }
        if($('#frequency-days-group').find('h3.selected.data').text().length > 0){
            $('#frequency-days-group').find('.custom-select').addClass("custom-filled");
        } else {
            $('#frequency-days-group').find('.custom-select').removeClass("custom-filled");
        }
    });



    $('#features-group-all ul li.list-item').click(function(){
        var getIndex = jQuery(this).index();
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        jQuery(this).closest('#custom-engagement').find('.group-tabber-open').removeClass('current');
        jQuery(this).closest('#custom-engagement').find('.group-tabber-open').eq(getIndex).addClass('current');
    });


    $('#insert-variable-group .form-field.custom-select').click(function(){
        $(this).parent().toggleClass('active');
    });
    $('#insert-variable-group ul#insert-variable > li').click(function(){
        var namevalues = $(this).text();
        $(this).closest('#insert-variable-group').find('h3.selected.data').text(namevalues);
        $(this).closest('#insert-variable-group').find('#insert-variable').hide();
        $(this).closest('#insert-variable-group').removeClass('active');
    })

    $('#Confirmation-button a#button-cancel, .closeIcon').click(function(){
        $('#add-confirmation a.confirmation-link[data-target="#userModal"]')[0].click();
    });

    $('#add-conf-popup #Confirmation-button .btn-blue').click(function(ele){
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
            var showChar = 200;
            var ellipsestext = "...";
            jQuery(".custom-row6 .inner-content .custom-slider-two .custom-review-box .author-content > p").each(function() {
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
        })();
    });

    