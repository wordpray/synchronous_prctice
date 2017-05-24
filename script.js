$(function(){
  // window.locationを使って同期通信
  $('.index1').click(function(){
    window.location = './index1.html';
  });
  $('.index2').click(function(){
    window.location = './index2.html';
  });
  $('.index3').click(function(){
    window.location = './index3.html';
  });
  // window.historyを使って「進む  」「戻る」
  $('.back').click(function(){
    window.history.back();
  });
  $('.forward').click(function(){
    window.history.forward();
  });

});