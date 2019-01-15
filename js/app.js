// app.js

$(function(){

  $('#btn-result').click(function(){
    // 한화 입력(숫자)
    var krw = $('#ko').val();

    // 달러 환율 계산
    var usd = krw * 0.00089; 

    // usd 출력
    // 값.toFixed(자릿수)
    $('#us').val(usd.toFixed(2));

    return false; // form submit 무효화
  });

});