$(".buttonLeft").click(function(){
  $(".gamekind1").toggle(1000);
  $(".gamekind2").toggle(1000);
})
$(".buttonRight").click(function(){
  $(".gamekind1").toggle(1000);
  $(".gamekind2").toggle(1000);
})
$(".gameBegin").click(function(){
  $("#look").toggle(800);
  $("#home").toggle(800);
  resetscore();
  if($(".gamekind2").css("display")=='none')
      normalgame();
  else crazygame();
})
var timer;
$(".mid").click(function(){
  $("#look").toggle(800);
  $("#home").toggle(800);
  clearInterval(timer);
})
$(".gameKnown").click(function(){
  $("#look").toggle(800);
  $("#home").toggle(800);
  resetscore();
  crazygame();
})
function crazygame(){
    normalgame();
    var speed = 2000;
    timer = setInterval(function(){
        var ngame = updateMap();
        var c = parseInt(Math.random()*ngame.length);
        var i = parseInt(Math.random()*10);
        if(i<6) i=2;
        else i=4;
        $(ngame[c]).text(i);
        $(ngame[c]).css("animation","add 0.25s");
        setTimeout(function(){
            $(ngame[c]).css("animation","donothing 0.01s")
        },400)
        changecolor();
    },speed)
}
//界面切换
var gamec = new Array(".b11",".b12",".b13",".b14",".b21",".b22",".b23",".b24",".b31",".b32",".b33",".b34",".b41",".b42",".b43",".b44");
var gamecLeft = [
  [".b11",".b12",".b13",".b14"],
  [".b21",".b22",".b23",".b24"],
  [".b31",".b32",".b33",".b34"],
  [".b41",".b42",".b43",".b44"]
];
//定义数组


//改变颜色
function changecolor(){
  for(var i=0;i<gamec.length;i++){
        if($(gamec[i]).text() == ' ')
            $(gamec[i]).css("background-color","#D5CDC2");
        else if($(gamec[i]).text()==2)
            $(gamec[i]).css({"background-color":"#ECE4D9","color":"#766E63"});
        else if($(gamec[i]).text()==4)
            $(gamec[i]).css({"background-color":"#ECE0C6","color":"#766E63"});
        else if($(gamec[i]).text()==8)
            $(gamec[i]).css({"background-color":"#F2B179","color":"white"});
        else if($(gamec[i]).text()==16)
            $(gamec[i]).css({"background-color":"#F59562","color":"white"});
        else if($(gamec[i]).text()==32)
            $(gamec[i]).css({"background-color":"#F57C5F","color":"white"});
        else if($(gamec[i]).text()==64)
            $(gamec[i]).css({"background-color":"#F45E39","color":"white"});
        else
            $(gamec[i]).css({"background-color":"#ECCF71","color":"white"});

  }
}
//随机数产生
function normalgame(){
    for(var i=0;i<gamec.length;i++)
         $(gamec[i]).text(" ");
    var n1 = parseInt(Math.random()*gamec.length);
    var n2 = parseInt(Math.random()*gamec.length);
    while(n1 == n2)
         n2 = parseInt(Math.random*gamec.length);
    $(gamec[n1]).text("2");
    $(gamec[n2]).text("2");
    changecolor();
}
//疯狂模式


//地图更新
function updateMap(){
  var newgamec = new Array();
  for(var i=0;i<16;i++)
      if($(gamec[i]).text()==' ')
         newgamec.unshift(gamec[i]);
  return newgamec;
}
//还原特效
function later(name){
     setTimeout(function(){
         $(name).css("animation" ,"donothing 0.01s")
     },300);
}

//随机数字生成
function addNumber(){
    var ngamec = updateMap();
    var i = parseInt(Math.random()*10);
    if(i<=7) i=2;
    else i=4;
    var n = parseInt(Math.random()*ngamec.length);
    $(ngamec[n]).text(i);
    $(ngamec[n]).css("animation","add 0.25s");
    setTimeout(function(){
        $(ngamec[n]).css("animation","donothing 0.01s");
    },300);
    changecolor();
}
//SCORE
function best(n){
  $(".best-k").text(n);
}
function resetscore(){
   score = 0;
   best(score);

}


/*  
        a 1 to left
        w 2 to up
        d 3 to right
        s 4 to down    
    */
function numbermove(n){
  if(n == 1){
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++)
            if($(gamecLeft[i][j]).text() == ' ')
                for(var n=j+1;n<4;n++)
                    if($(gamecLeft[i][n]).text() != ' '){
                        $(gamecLeft[i][j]).text($(gamecLeft[i][n]).text());
                        $(gamecLeft[i][n]).text(' ');
                        break;
                    }
}
else if(n == 2){          
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++)
            if($(gamecLeft[j][i]).text() == ' ')
                for(var n=j+1;n<4;n++)
                    if($(gamecLeft[n][i]).text() != ' '){
                        $(gamecLeft[j][i]).text($(gamecLeft[n][i]).text());
                        $(gamecLeft[n][i]).text(' ');
                        break;
                    }
}
else if(n == 3){              
    for(var i=0;i<4;i++)
        for(var j=3;j>=0;j--)
            if($(gamecLeft[i][j]).text() == ' ')
                for(var n=j-1;n>=0;n--)
                    if($(gamecLeft[i][n]).text() != ' '){
                        $(gamecLeft[i][j]).text($(gamecLeft[i][n]).text());
                        $(gamecLeft[i][n]).text(' ');
                        break;
                    }
}
else if(n == 4){
    for(var i=0;i<4;i++)
        for(var j=3;j>=0;j--)
            if($(gamecLeft[j][i]).text() == ' ')
                for(var n=j-1;n>=0;n--)
                    if($(gamecLeft[n][i]).text() != ' '){
                        $(gamecLeft[j][i]).text($(gamecLeft[n][i]).text());
                        $(gamecLeft[n][i]).text(' ');
                        break;
                    }
}
}
function judge(direct){
  if(direct == 1){
      for(var i=0;i<4;i++){
          for(var j=0;j<3;j++){
              if($(gamecLeft[i][j]).text() == $(gamecLeft[i][j+1]).text()&&$(gamecLeft[i][j]).text() != ' '){
                  var m = parseInt($(gamecLeft[i][j]).text());
                  m *= 2;score+=m;
                  $(gamecLeft[i][j]).text(m);
                  $(gamecLeft[i][j]).css("animation","turn 0.3s");
                  later(gamecLeft[i][j]);
                  $(gamecLeft[i][j+1]).text(' ');
              }
          }
      }
      numbermove(1);
  }
  else if(direct == 2){     
      for(var i=0;i<4;i++){
          for(var j=0;j<3;j++){
              if($(gamecLeft[j][i]).text() == $(gamecLeft[j+1][i]).text()&&$(gamecLeft[j][i]).text() != ' '){
                  var m = parseInt($(gamecLeft[j][i]).text());
                  m *= 2;score+=m;
                  $(gamecLeft[j][i]).text(m);
                  $(gamecLeft[j][i]).css("animation","turn 0.3s"); 
                  later(gamecLeft[j][i]);
                  $(gamecLeft[j+1][i]).text(' ');
              }
          }
      }
      numbermove(2);
  }
  else if(direct == 3){              
      for(var i=0;i<4;i++){
          for(var j=3;j>0;j--){
              if($(gamecLeft[i][j]).text() == $(gamecLeft[i][j-1]).text()&&$(gamecLeft[i][j]).text() != ' '){
                  var m = parseInt($(gamecLeft[i][j]).text());
                  m *= 2;score+=m;
                  $(gamecLeft[i][j]).text(m);
                  $(gamecLeft[i][j]).css("animation","turn 0.3s");
                  later(gamecLeft[i][j]);
                  $(gamecLeft[i][j-1]).text(' ');
              }
          }
      }
      numbermove(3);
  }
  else if(direct == 4){
      for(var i=0;i<4;i++){
          for(var j=3;j>0;j--){
              if($(gamecLeft[j][i]).text() == $(gamecLeft[j-1][i]).text()&&$(gamecLeft[j][i]).text() != ' '){
                  var m = parseInt($(gamecLeft[j][i]).text());
                  m *= 2;score+=m;
                  $(gamecLeft[j][i]).text(m);
                  $(gamecLeft[j][i]).css("animation","turn 0.3s");
                  later(gamecLeft[j][i]);
                  $(gamecLeft[j-1][i]).text(' ');
              }
          }
      }
      numbermove(4);
  }

  best(score);
}
function movechange(n){
  numbermove(n);
  judge(n);
  addNumber(n);
}

//判断游戏结束



//实现wasd
$(document).keypress(function(event){
  var keycode = event.keyCode;
  if($("#home").css("display") == 'block'){
    if(keycode == '97'){
      movechange(1);
    }
    else if(keycode == '119'){
      movechange(2);
    }
    else if(keycode == '100'){
      movechange(3);
    }
    else if(keycode == '115'){
      movechange(4);
    }
    
  }
  else if($("#home").css("display")!='block'){
    if(keycode == 13){
      $("#main").slideToggle(600);
      $("#home").slideToggle(800);
      resetscore();
      gameStart();
    }
  }
});




///jquery.mobile+touches手机触屏移动事件

$(document).on("pagecreate",function(){
    $("#gamec").on("swiperight",function(){
      movechange(3);
    });       
    $("#gamec").on("swipeleft",function(){
        movechange(1);
      });              
  });
  

var gamecmo = document.getElementById("gamec")
document.body.addEventListener('touchmove',function(event){
      event.preventDefault();
  },false);
var nsx,nsy,ncx,ncy;
gamecmo.addEventListener('touchstart',function(game){
    nsx = game.targetTouches[0].pageX;
    nsy = game.targetTouches[0].pageY;
});

gamecmo.addEventListener('touchend',function(game){
    event.preventDefault();
    ncx = game.changedTouches[0].pageX;
    ncy = game.changedTouches[0].pageY;
 /* if(Math.abs(ncx-nsx)>Math.abs(ncy-nsy)){
        if(ncx>nsx)
           movechange(3);
        else
            movechange(1);
    }*/
    if(Math.abs(ncx-nsx)<Math.abs(ncy-nsy)){
        if(ncy>nsy)
           movechange(4);
        else
           movechange(2);
    }
});
