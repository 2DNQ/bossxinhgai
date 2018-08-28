$(document).ready(function() {
  
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");
  
  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };
  
function confirmAction() {
        return confirm("Thông báo?")
      };

  $(document).on("click", ".login__submit", function(e) {
    user=document.dulieu.ten.value;
password=document.dulieu.matkhau.value;
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      if (user=="Anh gì ơi" && password=="Anh đây") {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
        
      }, submitPhase2 - 70);
      setTimeout(function() {
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
        confirm('Điều bất ngờ còn ở phía trước. Thế boss có muốn tiếp tục? Còn nếu muốn thoát thì có nút đỏ dưới đó.');
        setTimeout("location.href = 'chuyen.html';", 3598);
      }, submitPhase2);
    }
   else if(user=="" || password==""){
   alert("Em chua dien du thong tin");
  $(that).removeClass("success processing");
  animating=false;


   }
   else{
//neu ko dung thi bao ko thanh cong
   alert("YOU ARE NOT MY BOSS");
   $(that).removeClass("success processing");
animating=false;
    }
  },
  submitPhase1);
});
  


  $(document).on("click", ".app__logout", function(e) {
    if (animating) return;
    $(".ripple").remove();
    animating = true;
    var that = this;
    $(that).addClass("clicked");
    setTimeout(function() {
      $app.removeClass("active");
      $login.show();
      $login.css("top");
      $login.removeClass("inactive");
    }, logoutPhase1 - 120);
    setTimeout(function() {
      $app.hide();
      animating = false;
      $(that).removeClass("clicked");
    }, logoutPhase1);
  });

  
});