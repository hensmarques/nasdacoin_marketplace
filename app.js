$(document).ready(function(){
    $('.filter-tables .filters > div').click(function(){
        var separator = '<div class="separator">' + $('.panel-orders-book .separator').html() + '</div>';
        $('.panel-orders-book .separator').remove();

        if($(this).hasClass('green')){
            $('.table-top').removeClass('expanded').hide();
            $('.table-bottom').addClass('expanded').show();

            $( separator ).insertAfter('.table-bottom');
        }

        if($(this).hasClass('red')){
            $('.table-bottom').removeClass('expanded').hide();
            $('.table-top').addClass('expanded').show();
        }

        if($(this).hasClass('half')){
            $('.table-top').hide();
            $('.table-bottom, .table-top').removeClass('expanded').show();
        }

        if($(this).hasClass('red') || $(this).hasClass('half')){
            $( separator ).insertAfter('.table-top');
        }
    });

    $('.overflow-y-auto').perfectScrollbar();

    $('.tabs .tab a').click(function(){
        $(this).parent().parent().children('.tab').removeClass('active');
        $($(this).attr('tab-content')).children('.custom-tab-content').removeClass('active');
        $(this).parent().addClass('active');
        $($(this).attr('href')).addClass('active');
        $('.overflow-y-auto').perfectScrollbar();
    });

    $('[modal]').click(function(e){
        e.preventDefault();
        $('.mdl-bg').addClass('active');
        $( $(this).attr('modal') ).addClass('active');
    });

    $('.menu-toggle').click(function(){
        if($('.br-sideleft').hasClass('active')){
            $('.br-sideleft').removeClass('active');
            $('.menu-toggle i').addClass('fa-bars').removeClass('fa-times');
        }else{
            $('.br-sideleft').addClass('active');
            $('.menu-toggle i').removeClass('fa-bars').addClass('fa-times');
        }
    });

    $('.location-picker .badge').click(function(){
        var parent = $(this).parents('.location-picker');
        parent.toggleClass('active');
        $(this).text( $(this).text() == 'Change Location' ? 'Cancel' : 'Change Location' );
    });

    $('.location-picker .location-picker--list li').click(function(){
        var parent = $(this).parents('.location-picker');
        var input = parent.find('.location-picker--input');
        input.find('p').text($(this).text())
        parent.removeClass('active');
    });
});