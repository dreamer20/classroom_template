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