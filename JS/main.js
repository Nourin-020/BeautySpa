// Javascript code
$(document).ready(function(){
    // Search toggle button
    $(function(){
        $('.toggle-overlay').click(function(){
            $('.search-overlay').toggleClass('open');
        })
    })
    // Menu toggle button
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active');
    })
})