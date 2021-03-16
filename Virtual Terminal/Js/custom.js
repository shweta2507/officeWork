(function(){
    "use strict";

    //PopUp Js
    $('.detailIcon').click(function(ele){
        ele.stopPropagation();
        $(this).toggleClass('active');
        $('.virtual-terminal').toggleClass('showform');
        $('.Payment-approve-wrapper').hide();
        $('.Payment-info').hide();
        $('.text-send-wrapper').hide();
        $('.virtual-terminal .btn.btn-blue').removeClass('hidetext');
    });

    $(".form-control").on("blur input focus", function() {
        var $field = $(this).closest(".form-field");
        if (this.value) {
            $field.addClass("custom-filled");
        } else {
            $field.removeClass("custom-filled");
        }
    });
    $(".form-control").on("focus", function() {
        var $field = $(this).closest(".form-field");
        if (this) {
            $field.addClass("custom-filled");
        } else {
            $field.removeClass("custom-filled");
        }
    });
   
    $('.form-field.custom-select').click(function(ele){
        ele.stopPropagation();
        $('ul#cardName').show();
        $(this).addClass('active custom-filled');
    });
    $('ul#cardName li').click(function(ele){
        ele.stopPropagation();
        var values = $(this).text();
        $(this).closest('.custom-input').find('.form-control.select').val(values);
        $(this).closest('.custom-input').find('h3.selected.data').text(values);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().hide();
        $(this).closest('.form-field.custom-select').removeClass('active custom-filled');
        $('.custom-select').addClass("custom-filled");
        if($('h3.selected.data').text() === ''){
            $('.form-field.custom-select').addClass('show-error');
        } else{
            $('.form-field.custom-select').removeClass('show-error');
        }
    });
    $('.virtual-terminal').click(function(){
        $('ul#cardName').hide();
        $('.form-field.custom-select').removeClass('active');
        if($('h3.selected.data').text() === ''){
            $('.form-field.custom-select').addClass('show-error');
            $('.form-field.custom-select').removeClass('custom-filled');

        } else{
            $('.form-field.custom-select').removeClass('show-error');
            $('.form-field.custom-select').addClass('custom-filled');
        }
    });
    function checkInpuVal() {
        $('.virtual-terminal .form-control:not(.no-required)').each(function(i, ele){
            var $this = $(ele);
            if($this.val() === ''){
                $this.closest('.form-field').addClass('show-error');
            } else{
                $this.closest('.form-field').removeClass('show-error');
            }
        });
    }

    $('.virtual-terminal .form-control:not(.no-required)').focusout(function(ele){
        setTimeout(function(){
            var $this = $(ele.currentTarget);
            if($this.val() === ''){
                $this.closest('.form-field').addClass('show-error');
            } else{
                $this.closest('.form-field').removeClass('show-error');
            }
        }, 100);
    });
    function checkInpuVal2() {
        $('.Payment-info .form-control:not(.no-required)').each(function(i, ele){
            var $this = $(ele);
            if($this.val() === ''){
                $this.closest('.form-field').addClass('show-error');
            } else{
                $this.closest('.form-field').removeClass('show-error');
            }
        });
    }
    $('.Payment-info .form-control:not(.no-required)').focusout(function(){
        var $this = $(this);
        if($this.val() === ''){
            $this.closest('.form-field').addClass('show-error');
        } else{
            $this.closest('.form-field').removeClass('show-error');
        }
    });

    $('.virtual-terminal .btn.btn-white').click(function(ele){
        ele.preventDefault();
        ele.stopPropagation();
        checkInpuVal();
        setTimeout(function(){
            if($('.show-error').length === 0){
                $('.virtual-terminal').hide();
                $('.Payment-info').show();
                $('.virtual-terminal').removeClass('showform');
            }
        }, 0);
    });
    $('.virtual-terminal .btn.btn-blue').click(function(ele){
        ele.preventDefault();
        ele.stopPropagation();
        checkInpuVal();
        setTimeout(function(){
            $('.virtual-terminal .btn.btn-blue').addClass('hidetext');
            setTimeout(function(){
                if($('.show-error').length === 0){
                    $('.virtual-terminal').hide();
                    $('.text-send-wrapper').show();
                    $('.virtual-terminal').removeClass('showform');
                } else {
                    $('.virtual-terminal .btn.btn-blue').removeClass('hidetext');
                }
            }, 3000);
        }, 0);
    });
    $('.Payment-info .btn-blue.pay').click(function(ele){
        ele.preventDefault();
        ele.stopPropagation();
        checkInpuVal2();
        setTimeout(function(){
            $('.Payment-info .btn-blue.pay').addClass('hidetext');
            setTimeout(function(){
                if($('.show-error').length === 0){
                    $('.Payment-info').hide();
                    $('.Payment-approve-wrapper').show();
                    $('.Payment-approve-wrapper').removeClass('cancel-box');
                    $('.Payment-info .btn-blue.pay').removeClass('hidetext');
                } else {
                    $('.Payment-info .btn-blue.pay').removeClass('hidetext');
                }
            }, 3000);
        },0);
    });
    $('.payment-confirmation .pay-details a.btn.btn-white.close').click(function(ele){
        ele.preventDefault();
        ele.stopPropagation();
        setTimeout(function(){
            $('.text-send-wrapper').hide();
            $('.Payment-approve-wrapper').addClass('cancel-box');
        },0);
    });
    $(document).on('click','.closeIcon, .btn-wrapper .close, .text-send-wrapper .closeIcon, .text-send-wrapper .pay-details .close', function(ele){
        ele.stopPropagation();
        $('.detailIcon').removeClass('active');
        $('body').removeClass('show-popup');
        $('.Payment-approve-wrapper').hide();
        $('.virtual-terminal').hide();
        $('.Payment-info').hide();
        $('.text-send-wrapper').hide();
        $('.virtual-terminal').removeClass('showform');
    });
    $('.Payment-info .top-arrow-cross .back-to-patient').click(function(ele){
        ele.preventDefault();
        ele.stopPropagation();
        $('.Payment-info').hide();
        $('.virtual-terminal').show();
    });
    $('input#card').keyup(function(){
        if($(this).val().length >3){
            $(this).addClass('show-card');
        } else {
            $(this).removeClass('show-card');
        }
    });
    $('.custom-patient').keyup(function(){
        if($(this).val().length >3){
            $('#patientName').show();
        } else {
            $('#patientName').hide();
        }
    });

    $('#patientName li').click(function(ele){
        ele.stopPropagation();
        var values = $(this).attr('value');
        $(this).closest('.custom-input').find('.custom-patient').val(values);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().hide();
        $('.custom-select').addClass("custom-filled");
    });
})();