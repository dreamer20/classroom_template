"use strict"

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