AOS.init({
    duration: 1000,
    easing: "easeInOutQuint",
    mirror: true,
    anchor: "top-center"
});

$("h2").hide();
$("iframe").hover(
    function() {
        $("h2").stop().slideDown();
    },
    function() {
        $("h2").stop().slideUp();
    }
);