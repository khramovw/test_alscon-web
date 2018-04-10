"use strict";

var b = $(".steps[data-target]");
console.log(b);
if (b.length > 0) {
    console.log(b.length);
    var w = function w(t) {
        k && (t.preventDefault(), E ? (M = !1, T < b.length - 1 ? (0 == T ? S.addLabel(T).to(".steps[data-target=2] .img_anim", .22, {
            opacity: 1,
            ease: Expo.easeInOut,
            onStart: A
        }).add("step1").to(".steps[data-target=1]", .5, {
            opacity: 0
        }, "step1").to(".steps[data-target=1]", .5, {
            backgroundPosition: "-2500px 50%"
        }, "step1").to(".steps[data-target=2]", .5, {
            opacity: 1,
            backgroundPosition: "50% 50%"
        }, "step1").to(".steps[data-target=2] .steps-3-img-lamg", .5, {
            width: "+=250",
            left: "10%",
            top: "75%",
            onComplete: _
        }, "step1") : 1 == T ? S.addLabel(T).to(".steps[data-target=1]", 0, {
            opacity: 0,
            onStart: A
        }).to(".steps[data-target=2] .steps-3-img-lamg", .5, {
            width: "205",
            left: "27.5%",
            top: "25.5%",
            ease: Power2.easeIn
        }).add("step2").to(".steps[data-target=3]", .5, {
            opacity: 1,
            backgroundPosition: "50% 50%",
            ease: Linear.easeNone
        }, "step2").to(".steps[data-target=2]", .5, {
            backgroundPosition: "50% 1000px",
            ease: Linear.easeNone
        }, "step2").to(".steps[data-target=2]", .5, {
            opacity: 0
        }).to(".steps[data-target=3] .img_anim", 0, {
            opacity: 1
        }, "step2").to(".steps[data-target=3] .img_anim-1", 0, {
            opacity: 0
        }, "step2").to(".steps[data-target=3] .steps-5-img-lamg", .5, {
            width: "+=200",
            left: "79%",
            top: "79%",
            ease: Power2.easeInOut,
            onComplete: _
        }, "step2") : 2 == T ? S.addLabel(T).to(".steps[data-target=3] .steps-5-img-lamg", .5, {
            left: "42.8%",
            width: "136px",
            top: "66%",
            ease: Power2.easeInOut,
            onStart: A
        }).add("step3").to(".steps[data-target=4]", .5, {
            opacity: 1,
            backgroundPosition: "50% 50%",
            ease: Linear.easeNone
        }, "step3").to(".steps[data-target=3]", .5, {
            backgroundPosition: "2500px 50%",
            ease: Linear.easeNone
        }, "step3").to(".steps[data-target=3]", 0, {
            opacity: 0
        }).to(".steps[data-target=4] .steps-6-img-lamg", .5, {
            width: "430px",
            left: "-70px",
            top: "86%",
            ease: Power2.easeInOut,
            onComplete: _
        }, "step3") : 3 == T && S.addLabel(T).to(".steps[data-target=4] .steps-6-img-lamg", .5, {
            width: "204px",
            left: "25.5%",
            top: "81.1%",
            ease: Power2.easeInOut,
            onStart: A
        }).add("step4").to(".steps[data-target=5]", .5, {
            opacity: 1,
            onComplete: O
        }).to(".steps[data-target=5]", .5, {
            backgroundPosition: "50% 50%"
        }, "step4").to(".steps[data-target=4]", .5, {
            backgroundPosition: "50% 1000px",
            opacity: 0
        }, "step4"), T++) : L && (P.removePin("#some-scroll-section"), I || (I = !0, $("html, body").animate({
            scrollTop: $(".benefits-section").offset().top
        }, 800, function () {
            I = !1, E = !1, console.log("end");
        })), L = !1)) : (E = !0, $("html, body").animate({
            scrollTop: $("#some-scroll-section").offset().top
        }, 500, function () {
            E = !0;
        })));
    },
        x = function x(t) {
        console.log("animIsFinished = ", k), k && (console.log("next " + T), t.preventDefault(), E ? (L = !1, T > b.length || 0 != T ? (1 == T ? S.addLabel(T).to(".steps[data-target=2] .steps-3-img-lamg", .5, {
            width: "205",
            left: "27.5%",
            top: "25.5%",
            ease: Power2.easeIn,
            onStart: A
        }).add("reverseStep1").to(".steps[data-target=1]", .5, {
            opacity: 1,
            backgroundPosition: "50% 50%"
        }, "reverseStep1").to(".steps[data-target=2]", .5, {
            opacity: 0,
            backgroundPosition: "2500px 50%"
        }, "reverseStep1").to(".steps[data-target=2] .img_anim", .22, {
            opacity: 0,
            onComplete: D
        }) : 2 == T ? S.addLabel(T).to(".steps[data-target=3] .steps-5-img-lamg", .5, {
            left: "42.8%",
            width: "136px",
            top: "66%",
            ease: Power2.easeInOut,
            onStart: A
        }).add("reverseStep2").to(".steps[data-target=2]", .5, {
            opacity: 1
        }, "reverseStep2").to(".steps[data-target=3]", .5, {
            opacity: 0
        }, "reverseStep2").to(".steps[data-target=2]", .5, {
            backgroundPosition: "50% 50%"
        }, "reverseStep2").fromTo(".steps[data-target=3]", .5, {
            backgroundPosition: "50% 50%"
        }, {
            backgroundPosition: "50% 1000px"
        }, "reverseStep2").to(".steps[data-target=2] .steps-3-img-lamg", .5, {
            width: "+=250",
            left: "10%",
            top: "75%",
            ease: Power2.easeInOut,
            onComplete: _
        }, "reverseStep2") : 3 == T ? S.addLabel(T).to(".steps[data-target=4] .steps-6-img-lamg", .5, {
            width: "204px",
            left: "25.5%",
            top: "81.1%",
            ease: Power2.easeInOut,
            onStart: A
        }).add("reverseStep3").to(".steps[data-target=3]", .22, {
            opacity: 1
        }, "reverseStep3").to(".steps[data-target=4]", .22, {
            opacity: 0
        }, "reverseStep3").to(".steps[data-target=3]", .5, {
            backgroundPosition: "50% 50%"
        }, "reverseStep3").fromTo(".steps[data-target=4]", .5, {
            backgroundPosition: "50% 50%"
        }, {
            backgroundPosition: "-2500px 50%"
        }, "reverseStep3").to(".steps[data-target=3] .steps-5-img-lamg", .5, {
            width: "+=250",
            left: "79%",
            top: "79%",
            ease: Power2.easeInOut,
            onComplete: _
        }, "reverseStep3") : 4 == T && S.addLabel(T).to(".steps[data-target=4]", .3, {
            opacity: 1,
            onStart: A
        }).add("reverseStep4").to(".steps[data-target=5]", .3, {
            opacity: 0
        }, "reverseStep4").to(".steps[data-target=4]", .5, {
            backgroundPosition: "50% 50%"
        }, "reverseStep4").fromTo(".steps[data-target=5]", .5, {
            backgroundPosition: "50% 50%"
        }, {
            backgroundPosition: "50% -1000px"
        }, "reverseStep4").to(".steps[data-target=4] .steps-6-img-lamg", .5, {
            width: "430px",
            left: "-70px",
            top: "86%",
            ease: Power2.easeInOut,
            onComplete: _
        }, "reverseStep4"), T--) : (console.log("else next"), M && (z || (z = !0, $("html, body").animate({
            scrollTop: $(".featured-products-section").offset().top
        }, 800, function () {
            z = !1, E = !1;
        })), M = !1, console.log("scroll to top section")))) : ($("html, body").animate({
            scrollTop: $("#some-scroll-section").offset().top
        }, 800), E = !0, L = !0));
    },
        S = new TimelineMax(),
        T = 0,
        k = !0;
    $(".steps").scrollsteps({
        up: x,
        down: w,
        quietPeriodBetweenTwoScrollEvents: 50
    });
    var C = new ScrollMagic.Controller(),
        P = new ScrollMagic.Scene({
        triggerElement: "#some-scroll-section",
        triggerHook: "onLeave"
    }).setPin("#some-scroll-section").on("enter", function () {
        M = !0;
    }).on("leave", function () {
        P.removePin("#some-scroll-section");
    }).on("end", function () {
        console.log("scene end callback");
    }).addTo(C),
        E = !1,
        L = !1,
        M = !1,
        I = !1,
        z = !1,
        A = function A() {
        k = !1;
    },
        _ = function _() {
        k = !0;
    },
        O = function O() {
        k = !0, L = !0;
    },
        D = function D() {
        k = !0, M = !0;
    };
    $(window).scrollTop() > $(".benefits-section").offset().top && (P.removePin("#some-scroll-section"), E = !1), $(window).scroll(function () {
        $(window).scrollTop() == $("#some-scroll-section").offset().top && (P.removePin("#some-scroll-section"), E = !1);
    });
}