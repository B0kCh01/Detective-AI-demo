AOS.init({
    delay: 1000,
    duration: 1000,
    easing: "easeInOutQuint",
});

$("h2").hide();
$("iframe").hover(
    function() {
        $("h2").slideDown();
    },
    function() {
        $("h2").slideUp();
    }
);