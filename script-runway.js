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

  $(window).scroll(function(){
           if ($(this).scrollTop() > 15) {
              $(".topbar").addClass('changeColor')
           }
           if ($(this).scrollTop() < 10) {
              $(".topbar").removeClass('changeColor')
           }
        });

  // $("#18AW").hide();
  $("#tag-18AW").click(function(){
    $("#tag-18AW").css("border-bottom","1px solid red");
    $("#tag-18SS").css("border-bottom","none");
    $("#tag-17AW").css("border-bottom","none");
    $("#tag-17SS").css("border-bottom","none");
    $("#18AW").show();
    $("#18SS").hide();
    $("#17AW").hide();
    $("#17SS").hide();
  });
  $("#18SS").hide();
  $("#tag-18SS").click(function(){
    $("#tag-18SS").css("border-bottom","1px solid red");
    $("#tag-18AW").css("border-bottom","none");
    $("#tag-17AW").css("border-bottom","none");
    $("#tag-17SS").css("border-bottom","none");
    $("#18SS").show();
    $("#18AW").hide();
    $("#17AW").hide();
    $("#17SS").hide();
  });
  $("#tag-17AW").click(function(){
    $("#tag-17AW").css("border-bottom","1px solid red");
    $("#tag-18AW").css("border-bottom","none");
    $("#tag-18SS").css("border-bottom","none");
    $("#tag-17SS").css("border-bottom","none");
    $("#17AW").show();
    $("#18AW").hide();
    $("#18SS").hide();
    $("#17SS").hide();
  });
  $("#tag-17SS").click(function(){
    $("#tag-17SS").css("border-bottom","1px solid red");
    $("#tag-18AW").css("border-bottom","none");
    $("#tag-17AW").css("border-bottom","none");
    $("#tag-18SS").css("border-bottom","none");
    $("#17SS").show();
    $("#18AW").hide();
    $("#18SS").hide();
    $("#17AW").hide();
  });
});
