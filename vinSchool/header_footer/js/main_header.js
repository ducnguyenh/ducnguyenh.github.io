$(function () {
  // responsive
  $("#icon-click").click(function () {
    $("#mobile-sidebar-view").css("display", "block");
  });

  // show rehister enroll
  $(".register").click(function () {
    $("#popup-enroll").css("display", "block");
  });
  // show popup-teacher
  $(".info-teach .view-more").click(function () {
    $("#popup-teacher").css("display", "block");
  });
  $(".box-teach .img").click(function () {
    $("#popup-teacher").css("display", "block");
  });
  // show popup-student
  $(".box-student .shadow-zoom").click(function () {
    $("#popup-student").css("display", "block");
  });
  $(".hot-face-img").click(function () {
    $("#popup-student").css("display", "block");
  });

  $(".close-popup").click(function () {
    $("#popup-enroll").css("display", "none");
    $("#popup-teacher").css("display", "none");
    $("#popup-student").css("display", "none");
  });
  // close sidebar
  $(".close-sidebar").click(function () {
    $("#mobile-sidebar-view").css("display", "none");
  });
  $(".shadow-bg").click(function () {
    $("#popup-enroll").css("display", "none");
    $("#mobile-sidebar-view").css("display", "none");
    $("#popup-teacher").css("display", "none");
    $("#popup-student").css("display", "none");
  });

  // accordion
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    // Variables privadas
    var links = this.el.find(".link");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };
  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());
    $next.slideToggle();
    $this.parent().toggleClass("open");
    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };
  var accordion = new Accordion($("#accordion"), false);
});
window.onscroll = function () {
  functionFixMenu();
  scrollFunction();
};
function functionFixMenu() {
  let header = document.getElementById("header");
  if (window.pageYOffset > 150) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
let backTop = document.getElementById("back-to-top");
let messenger = document.getElementById("messenger");
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    backTop.style.display = "block";
    messenger.style.display = "block";
  } else {
    backTop.style.display = "none";
    messenger.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
