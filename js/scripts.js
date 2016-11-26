"use strict"

$("#search_form__button").click(function(){
  $(".search-form").toggleClass("search-form_visible");
  $("#search-form__input").focus();

});
$("#search-form__input").blur(function(){
  $(".search-form").removeClass("search-form_visible");    
});
$("#nav_btn").click(function(){
  $('#nav').toggleClass('nav_open');
});

$('#slider').owlCarousel({
  singleItem: true,
  pagination: true
});

$(".select__button").focus(function(){
  $(this).parent().children(".select__list").addClass("select__list_open");
}).blur(function(){
  $(this).parent().children(".select__list").removeClass("select__list_open");
});

$(".select__option").click(function(){
  var value = $(this).attr("data-val");
  var text = $(this).text();
  $(this).parent().parent().children(".select__selected-option").attr("data-val", value).text(text);
});

$("#events_slider").owlCarousel({
  singleItem: true,
  pagination: false,
  navigation: true,
  navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  theme: "events__slider-controls"
});

$("#slider_testimonials").owlCarousel({
  singleItem: true
});