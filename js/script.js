let displayH = $(window).height();
let displayW = $(window).width();
$(document).ready(function () {
    setInterval(xAnim, 500);
    function xAnim() {
        let randH = Math.random() * displayH + 1;
        let randW = Math.random() * displayW + 1;
        $("#imgX").clone().css({ position: "absolute", left: randW, top: randH, visibility: "visible" }).appendTo("body");
    }
});