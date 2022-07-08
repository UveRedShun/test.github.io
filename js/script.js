$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.acditem .acditem__hd').click(function(){
    $(this).next('.acditem__inner').slideToggle();
    $(this).toggleClass("open");
  });
  /* page_top arrow設定 */
  var $arrowBtn = $('#page_top');
  var isHidden = true;
  $arrowBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 240) {
      if (isHidden) {
        $arrowBtn.stop(true, true).fadeIn(200);
        isHidden = false;
      }
    } else {
      if (!isHidden) {
        $arrowBtn.stop(true, true).fadeOut();
        isHidden = true;
      }
    }
  });
  $arrowBtn.click(function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 1000);
    return false;
  });
  /* プライバシーポリシー設定 */
  $('#ppbox').change(function() {
    // チェックが入っていたら有効化
    if ( $(this).is(':checked') ){ 
        // ボタンを有効化
        $('#form_submit_button').prop('disabled', false);
    } else { 
        // ボタンを無効化
        $('#form_submit_button').prop('disabled', true); 
    }
  });
});