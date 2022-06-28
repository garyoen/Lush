$(function(){
  var imgwd = $(".box-wrap > li:first").width();
  var hap = imgwd * $(".box-wrap > li").length;
  $(".box-wrap").width(hap)


  $("#banner .dot> li").click(function(){
    $("#banner .dot> li").removeClass("on");
    $(this).addClass("on");

    var imgw = $(".box-wrap > li:first").width();
    var i = $(this).index();
    var sum = -(imgw*i);
    $(".box-wrap").animate({"left":sum},500,"easeOutBounce");
  })

  //spa
  var current = 0;
  setInterval(function(){
    var next = (current+1) % 3
    $(".spa-group > li").eq(current).fadeOut(800);
    $(".spa-group > li").eq(next).fadeIn(800);
    current = next;
  },3000);

  //foryou
  var leng = $(".foryou-box").length-1;

  function left(n,i){
    if($(".foryou-box").is(":animated")) return false;
    $(".foryou-box").eq(n).css("left","100%").addClass("on").animate({"left":0},600);

    $(".foryou-box").eq(i).animate({"left":"-100%"},600,function(){
      $(this).removeClass("on").css("left",0);
    });

    $(".foryou-dot > li").removeClass("on").eq(n).addClass("on");
  }

  $("#foryouNext").click(function(e){
    e.preventDefault()
    var now = $(".foryou-dot > li.on")
    var i = now.index();

    var n = now.next().index();
    console.log(i,n)
    if(i != leng){
      left(n,i);
    }else{
      left(0,i);
    }
  });

  function right(n,i){
    if($(".foryou-box").is(":animated")) return false;
    $(".foryou-box").eq(n).css("left","-100%").addClass("on").animate({"left":0},600);

    $(".foryou-box").eq(i).animate({"left":"100%"},600,function(){
      $(this).removeClass("on").css("left",0);
    });

    $(".foryou-dot > li").removeClass("on").eq(n).addClass("on");
  }

  $("#foryouPrev").click(function(e){
    e.preventDefault()
    var now = $(".foryou-dot > li.on")
    var i = now.index();
    var p = now.prev().index();
    if(i != 0){
      right(p,i); 
    }else{
      right(leng,i);
    }
  });

  //닷버튼
  $(".foryou-dot > li").click(function(){
    var th = $(this).attr("class");
    if(th != "on"){
      var i = $(".foryou-dot > li.on").index();
      var n = $(this).index();
      if(i < n){ 
        left(n,i);
      }else{
        right(n,i)
      }
    }
  })
});

//campain
function conf(){
  var input = document.querySelector('input')
  var num = input.value;
  console.log(num);
  if(num == ''){
    alert("정보를 모두 입력해주세요.")
  }
}
