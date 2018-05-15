$(document).ready(function(){
  $(".dropdown1").hide();
  $("#collection").click(function(){
    $(".dropdown1").toggle();
  });
  $("#collection").mouseout(function(){
    $(".dropdown1").hide();
  });
  $(".dropdown1").mouseover(function(){
    $(".dropdown1").show();
  });
  $(".dropdown1").mouseout(function(){
    $(".dropdown1").hide();
  });
  // $('body').css('display', 'none');
  // $('body').fadeIn(1000);
// $("#chinese").hide();
// $("#video-1").hide();
// $("#video-2").hide();
// $("#video-3").hide();
// $("#video-4").hide();
// $("#video-5").hide();
// $("#video-6").hide();
// // $("#img1-2").hide();
//   $( "#gif2" ).click(function() {
//     $(".photofeed").toggle();
//     $("#headimg").toggle();
//     $("#chinese").toggle();
//   });
//   $( "#gif1" ).click(function() {
//       $('body').toggleClass('bgimg');
//     });
//   $('#play-1').on('click', function(ev) {
//       $("#video-1").toggle();
//       $("#animation1").toggle();
//       $("#video-1")[0].src += "&autoplay=1";
//        ev.preventDefault();
//        });
//   $('#play-2').on('click', function(ev) {
//       $("#video-2").toggle();
//       $("#animation2").toggle();
//       $("#video-2")[0].src += "&autoplay=1";
//         ev.preventDefault();
//        });
//   $('#play-3').on('click', function(ev) {
//       $("#video-3").toggle();
//       $("#animation3").toggle();
//       $("#video-3")[0].src += "&autoplay=1";
//         ev.preventDefault();
//        });
//   $('#play-4').on('click', function(ev) {
//       $("#video-4").toggle();
//       $("#animation4").toggle();
//       $("#video-4")[0].src += "&autoplay=1";
//        ev.preventDefault();
//        });
//   $('#play-5').on('click', function(ev) {
//       $("#video-5").toggle();
//       $("#animation5").toggle();
//       $("#video-5")[0].src += "&autoplay=1";
//        ev.preventDefault();
//       });
//   $('#play-6').on('click', function(ev) {
//       $("#video-6").toggle();
//       $("#animation6").toggle();
//       $("#video-5")[0].src += "&autoplay=1";
//        ev.preventDefault();
//       });
//
//       $(function() {
//         var inWrap0 = $('.inner-wrapper0');
//         $('#left0').on('click', function() {
//           inWrap0.animate({left: '0%'}, 300, function(){
//           inWrap0.css('left', '-100%');
//         $('.slide0').first().before($('.slide0').last());
//           });
//         });
//         $('#right0').on('click', function() {
//           inWrap0.animate({left: '-200%'}, 300, function(){
//           inWrap0.css('left', '-100%');
//         $('.slide0').last().after($('.slide0').first());
//           });
//         }); });
//
//       $(function() {
//         var inWrap1 = $('.inner-wrapper1');
//         $('#left1').on('click', function() {
//           inWrap1.animate({left: '0%'}, 300, function(){
//           inWrap1.css('left', '-100%');
//         $('.slide1').first().before($('.slide1').last());
//           });
//         });
//         $('#right1').on('click', function() {
//           inWrap1.animate({left: '-200%'}, 300, function(){
//           inWrap1.css('left', '-100%');
//         $('.slide1').last().after($('.slide1').first());
//           });
//         }); });
//
//
//
//       $(function() {
//         var inWrap2 = $('.inner-wrapper2');
//         $('#left2').on('click', function() {
//           inWrap2.animate({left: '0%'}, 300, function(){
//           inWrap2.css('left', '-100%');
//         $('.slide2').first().before($('.slide2').last());
//           });
//         });
//         $('#right2').on('click', function() {
//           inWrap2.animate({left: '-200%'}, 300, function(){
//           inWrap2.css('left', '-100%');
//         $('.slide2').last().after($('.slide2').first());
//           });
//         });  });
//
//
//
//       $(function() {
//         var inWrap3 = $('.inner-wrapper3');
//         $('#left3').on('click', function() {
//           inWrap3.animate({left: '0%'}, 300, function(){
//           inWrap3.css('left', '-100%');
//         $('.slide3').first().before($('.slide3').last());
//           });
//         });
//         $('#right3').on('click', function() {
//           inWrap3.animate({left: '-200%'}, 300, function(){
//           inWrap3.css('left', '-100%');
//         $('.slide3').last().after($('.slide3').first());
//           });
//         });  });
//
//
//
//       $(function() {
//         var inWrap5 = $('.inner-wrapper5');
//         $('#left5').on('click', function() {
//           inWrap5.animate({left: '0%'}, 300, function(){
//           inWrap5.css('left', '-100%');
//         $('.slide5').first().before($('.slide5').last());
//           });
//         });
//         $('#right5').on('click', function() {
//           inWrap5.animate({left: '-200%'}, 300, function(){
//           inWrap5.css('left', '-100%');
//         $('.slide5').last().after($('.slide5').first());
//           });
//         }); });
//
//
//
//       $(function() {
//         var inWrap6 = $('.inner-wrapper6');
//         $('#left6').on('click', function() {
//           inWrap6.animate({left: '0%'}, 300, function(){
//           inWrap6.css('left', '-100%');
//         $('.slide6').first().before($('.slide6').last());
//           });
//         });
//         $('#right6').on('click', function() {
//           inWrap6.animate({left: '-200%'}, 300, function(){
//           inWrap6.css('left', '-100%');
//         $('.slide6').last().after($('.slide6').first());
//           });
//         });  });
//
//
//
//       $(function() {
//         var inWrap8 = $('.inner-wrapper8');
//         $('#left8').on('click', function() {
//           inWrap8.animate({left: '0%'}, 300, function(){
//           inWrap8.css('left', '-100%');
//         $('.slide8').first().before($('.slide8').last());
//           });
//         });
//         $('#right8').on('click', function() {
//           inWrap8.animate({left: '-200%'}, 300, function(){
//           inWrap8.css('left', '-100%');
//         $('.slide8').last().after($('.slide8').first());
//           });
//         });  });
//
//
//         $(function() {
//           var inWrap9 = $('.inner-wrapper9');
//           $('#left9').on('click', function() {
//             inWrap9.animate({left: '0%'}, 300, function(){
//             inWrap9.css('left', '-100%');
//           $('.slide9').first().before($('.slide9').last());
//             });
//           });
//           $('#right9').on('click', function() {
//             inWrap9.animate({left: '-200%'}, 300, function(){
//             inWrap9.css('left', '-100%');
//           $('.slide9').last().after($('.slide9').first());
//             });
//           });  });
//
//
//
//         $(function() {
//           var inWrap10 = $('.inner-wrapper10');
//           $('#left10').on('click', function() {
//             inWrap10.animate({left: '0%'}, 300, function(){
//             inWrap10.css('left', '-100%');
//           $('.slide10').first().before($('.slide10').last());
//             });
//           });
//           $('#right10').on('click', function() {
//             inWrap10.animate({left: '-200%'}, 300, function(){
//             inWrap10.css('left', '-100%');
//           $('.slide10').last().after($('.slide10').first());
//             });
//           });  });
//
//
//           $(function() {
//             var inWrap11 = $('.inner-wrapper11');
//             $('#left11').on('click', function() {
//               inWrap11.animate({left: '0%'}, 300, function(){
//               inWrap11.css('left', '-100%');
//             $('.slide11').first().before($('.slide11').last());
//               });
//             });
//             $('#right11').on('click', function() {
//               inWrap11.animate({left: '-200%'}, 300, function(){
//               inWrap11.css('left', '-100%');
//             $('.slide11').last().after($('.slide11').first());
//               });
//             });  });
//
//
//             $(function() {
//               var inWrap14 = $('.inner-wrapper11');
//               $('#left14').on('click', function() {
//                 inWrap14.animate({left: '0%'}, 300, function(){
//                 inWrap14.css('left', '-100%');
//               $('.slide14').first().before($('.slide14').last());
//                 });
//               });
//               $('#right14').on('click', function() {
//                 inWrap14.animate({left: '-200%'}, 300, function(){
//                 inWrap14.css('left', '-100%');
//               $('.slide14').last().after($('.slide14').first());
//                 });
//               });  });
//
//               $(function() {
//                 var inWrap15 = $('.inner-wrapper15');
//                 $('#left15').on('click', function() {
//                   inWrap15.animate({left: '0%'}, 300, function(){
//                   inWrap15.css('left', '-100%');
//                 $('.slide15').first().before($('.slide15').last());
//                   });
//                 });
//                 $('#right15').on('click', function() {
//                   inWrap15.animate({left: '-200%'}, 300, function(){
//                   inWrap15.css('left', '-100%');
//                 $('.slide15').last().after($('.slide15').first());
//                   });
//                 });  });

  // $(".right").on("click", function(){
  //   $("#img1-2").toggle();
  // });


// $(".right").on("click",function(){
//   var currentImg = $(".active");
//   var nextImg = currentImg.next();
//
//   if(nextImg.length){
//     currentImg.removeClass(".active").css("z-index", -1000);
//     nextImg.addClass(".active").css("z-index", 1000);
//   }
//
// });
});
