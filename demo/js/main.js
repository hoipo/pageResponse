var $view = $("#view");
var $iSliderWrapper = $("#iSlider-wrapper");
var islider4p2,islider4p3,islider4p4,islider4p5;
var lock = false;
var list = [{
    'content': '<div id="page1" class="page"><div class="tit" id="t1"></div><div class="tit" id="t2"></div><div class="tit" id="t3"></div><div class="tit" id="t4"></div><div class="text" id="text1"></div><div class="public_pageNum"><span></span><span></span></div></div>'
}, {
    'content': '<div id="page2" class="page"><div id="iSliderDiv1" class="iSliderDiv"></div><div class="logo"></div><div id="detail21"></div><div id="detail22"></div><div id="detail23"></div><div class="text" id="text2"></div></div>'
}, {
    'content': '<div id="page3" class="page"><div id="iSliderDiv2" class="iSliderDiv"></div><div class="logo"></div><div id="detail31"></div><div id="detail32"></div><div id="detail33"></div><div id="p3layer"></div><div class="text" id="text3"></div></div>'
}, {
    'content': '<div id="page4" class="page"><div id="iSliderDiv3" class="iSliderDiv"></div><div class="logo"></div><div id="detail41"></div><div id="detail42"></div><div id="detail43"></div><div id="p4layer"></div><div class="text" id="text4"></div></div>'
}, {
    'content': '<div id="page5" class="page"><div id="iSliderDiv4" class="iSliderDiv"></div><div class="logo"></div><div id="detail51"></div><div id="detail52"></div><div id="detail53"></div><div class="text" id="text5"></div></div>'
}, {
    'content': '<div id="page6" class="page"><div id="bigWord"></div><div id="text6"></div></div>'
}, {
    'content': '<div id="page7" class="page"></div>'
}];
var dom4p2 = [{
    content: '<div class="content" id="p2content1"></div>'
}, {
    content: '<div class="content" id="p2content2"></div>'
}, {
    content: '<div class="content" id="p2content3"><div id="p2detailBtn1" class="detailBtn btnTag" data-index="21"></div></div>'
}, {
    content: '<div class="content" id="p2content4"><div id="p2detailBtn2" class="detailBtn btnTag" data-index="22"></div>'
}, {
    content: '<div class="content" id="p2content5"><div id="p2detailBtn3" class="detailBtn btnTag" data-index="23"></div>'
}];
var dom4p3 = [{
    content: '<div class="content" id="p3content1"></div>'
}, {
    content: '<div class="content" id="p3content2"></div>'
}, {
    content: '<div class="content" id="p3content3"><div id="p3detailBtn1" class="detailBtn btnTag" data-index="31"></div></div>'
}, {
    content: '<div class="content" id="p3content4"><div id="p3detailBtn2" class="detailBtn btnTag" data-index="32"></div>'
}, {
    content: '<div class="content" id="p3content5"><div id="p3detailBtn3" class="detailBtn btnTag" data-index="33"></div>'
}];
var dom4p4 = [{
    content: '<div class="content" id="p4content1"></div>'
}, {
    content: '<div class="content" id="p4content2"></div>'
}, {
    content: '<div class="content" id="p4content3"><div id="p4detailBtn1" class="detailBtn btnTag" data-index="41"></div></div>'
}, {
    content: '<div class="content" id="p4content4"><div id="p4detailBtn2" class="detailBtn btnTag" data-index="42"></div>'
}, {
    content: '<div class="content" id="p4content5"><div id="p4detailBtn3" class="detailBtn btnTag" data-index="43"></div>'
}];
var dom4p5 = [{
    content: '<div class="content" id="p5content1"></div>'
}, {
    content: '<div class="content" id="p5content2"></div>'
}, {
    content: '<div class="content" id="p5content3"><div id="p5detailBtn1" class="detailBtn btnTag" data-index="51"></div></div>'
}, {
    content: '<div class="content" id="p5content4"><div id="p5detailBtn2" class="detailBtn btnTag" data-index="52"></div>'
}, {
    content: '<div class="content" id="p5content5"><div id="p5detailBtn3" class="detailBtn btnTag" data-index="53"></div>'
}];

function generateIslider4p2 () {
     islider4p2 = new iSlider({
            data: dom4p2,
            dom: document.getElementById("iSliderDiv1"),
            animateTime: 600,
            isVertical: false,
            isAutoplay: false,
            duration: 3000,
            isLooping: true,
            onslidestart: function() {
                islider4p2.isAutoplay = false;
                islider4p2.pause();
            },
            plugins: ['dot']
        }); 
}
function generateIslider4p3 () {
     islider4p3 = new iSlider({
            data: dom4p3,
            dom: document.getElementById("iSliderDiv2"),
            animateTime: 600,
            isVertical: false,
            isAutoplay: false,
            duration: 3000,
            isLooping: true,
            onslidestart: function() {
                islider4p3.isAutoplay = false;
                islider4p3.pause();
            },
            plugins: ['dot']
        }); 
}
function generateIslider4p4 () {
     islider4p4 = new iSlider({
            data: dom4p4,
            dom: document.getElementById("iSliderDiv3"),
            animateTime: 600,
            isVertical: false,
            isAutoplay: false,
            duration: 3000,
            isLooping: true,
            onslidestart: function() {
                islider4p4.isAutoplay = false;
                islider4p4.pause();
            },
            plugins: ['dot']
        }); 
}
function generateIslider4p5 () {
     islider4p5 = new iSlider({
            data: dom4p5,
            dom: document.getElementById("iSliderDiv4"),
            animateTime: 600,
            isVertical: false,
            isAutoplay: false,
            duration: 3000,
            isLooping: true,
            onslidestart: function() {
                islider4p5.isAutoplay = false;
                islider4p5.pause();
            },
            plugins: ['dot']
        }); 
}
function anime4p1 () {
     setTimeout(function() {
            $("#t2,#t4").addClass('show');
            setTimeout(function() {
                $("#t1").addClass('show');
                setTimeout(function() {
                    $("#t3").addClass('show');
                }, 300);
            }, 400);
        }, 500); 
}
var islider = new iSlider({
    data: list,
    dom: document.getElementById("iSlider-wrapper"),
    animateTime: 600,
    isVertical: true,
    oninitialized: function() {
        console.log('finish!');
        this.hold();
        anime4p1();
        generateIslider4p2();
    },
    onslidechanged: function() {
        islider.hold();
        lock = false;
        if (islider.slideIndex == 1) {
            islider4p2.isAutoplay = true;
            islider4p2.play();
            generateIslider4p3();
        }else if (islider.slideIndex == 2) {
            islider4p3.isAutoplay = true;
            islider4p3.play();
            generateIslider4p2();
            generateIslider4p4();
        }else if (islider.slideIndex == 3) {
            islider4p4.isAutoplay = true;
            islider4p4.play();
            generateIslider4p3();
            generateIslider4p5();
        }else if (islider.slideIndex == 4) {
            islider4p4.isAutoplay = true;
            islider4p4.play();
            generateIslider4p4();
        }else if (islider.slideIndex == 5) {
            islider4p4.isAutoplay = true;
            islider4p4.play();
            generateIslider4p5();

        }else if (islider.slideIndex == 0) {
            anime4p1();
        };
    },
    onslidechange: function () {
        islider.hold();
        lock = true; 
    }
});

$view.bind('swipeUp', function(event) {
    if (lock) return false;
    if (islider.slideIndex == 0) {
        if ($("#text1").hasClass('show')) {
            islider.slideNext();
        } else {
            $("#text1").addClass('show');
        }
    }else if (islider.slideIndex == 1) {
        if ($("#text2").hasClass('show')) {
            islider.slideNext();
        } else {
            $("#text2").addClass('show');
        }
    }else if (islider.slideIndex == 2) {
        if ($("#text3").hasClass('show')) {
            islider.slideNext();
        } else {
            $("#text3").addClass('show');
        }
    }else if (islider.slideIndex == 3) {
        if ($("#text4").hasClass('show')) {
            islider.slideNext();
        } else {
            $("#text4").addClass('show');
        }
    }else if (islider.slideIndex == 4) {
        if ($("#text5").hasClass('show')) {
            islider.slideNext();
        } else {
            $("#text5").addClass('show');
        }
    }else if (islider.slideIndex == 5) {
        if ($("#text6").hasClass('show')) {
            islider.slideNext();
        } else {
            $("#text6").addClass('show');
            $("#bigWord").addClass('hide');
        }
    };
});

$view.bind('swipeDown', function(event) {
    if (lock) return false;
    if (islider.slideIndex == 6) {
        islider.slidePrev();
    }else if (islider.slideIndex == 5) {
        if ($("#text6").hasClass('show')) {
            $("#text6").removeClass("show");
            $("#bigWord").removeClass('hide');
        } else {
            islider.slidePrev();
        }
    }else if (islider.slideIndex == 4) {
        if ($("#text5").hasClass('show')) {
             $("#text5").removeClass("show");
        } else {
             islider.slidePrev();
        }
    }else if (islider.slideIndex == 3) {
        if ($("#text4").hasClass('show')) {
             $("#text4").removeClass("show");
        } else {
             islider.slidePrev();
        }
    }else if (islider.slideIndex == 2) {
        if ($("#text3").hasClass('show')) {
             $("#text3").removeClass("show");
        } else {
             islider.slidePrev();
        }
    }else if (islider.slideIndex == 1) {
        if ($("#text2").hasClass('show')) {
             $("#text2").removeClass("show");
        } else {
             islider.slidePrev();
        }
    }else if (islider.slideIndex == 0) {
        if ($("#text1").hasClass('show')) {
             $("#text1").removeClass("show");
        };
    };
});

$view.tap(function (e) {
     var that = e.target;
     if (that.classList.contains('detailBtn')) {
        // e.stopPropagation();
        $("#detail" + that.getAttribute("data-index")).addClass('ani').bind("webkitAnimationEnd", function () {
              $(this).removeClass('ani');
              switch(that.getAttribute("data-index")){
                case "31":
                    $("#p3layer").addClass('show');
                    break;
                case "32":
                    $("#p3layer").addClass('show');
                    break;
                case "33":
                    $("#p3layer").removeClass('show');
                    break;
                case "41":
                    $("#p4layer").removeClass('show');
                    break;
                case "42":
                    $("#p4layer").removeClass('show');
                    break;
                case "43":
                    $("#p4layer").addClass('show');
                    break;
                default:
                    break;
              }
        });

     };
});


