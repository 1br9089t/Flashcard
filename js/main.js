jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '50px' //下から50pxの位置に
          }, 300); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-100px' //下から-50pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
      return false;
    });
  });

  function offradio() {
    var ElementsCount = document.sample.elements.length; // ラジオボタンの数
    for( i=0 ; i<ElementsCount ; i++ ) {
       document.sample.elements[i].checked = true;
    }
 }

 (function($){
  $(function() {

      var rBox = [];
      $('.tab-wrap').each(function() {
          rBox.push($(this).html());
      });
      rBox.sort(function() {
          return Math.random() - Math.random();
      });
      $('.tab-wrap').empty();
       
      i = 0;
      $('.tab-wrap').each(function() {
          $(this).append(rBox[i]);
          i++;
      });

  });
})(jQuery);

window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}