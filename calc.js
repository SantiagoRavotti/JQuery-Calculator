"use strict";
//For starterts, the button on click function to add the first value
var currentValue;
$(document).ready(function () {
  $(".button").click(function () {
    currentValue = $(this).val();
    //Concatenate  also the second clicked value as a string and loop over this function with each added value
    if ($(this).hasClass("number")) {
      $("input").val((currentValue = $("input").val() + currentValue));
    } else if ($(this).is("#multiplyButton")) {
      newNavalue
    }
  });

  //Use of the four operators and change of current_value

  //$(this).click("#multiplyButton");

  //new button after the use of operators and asigned it to current_value

  //We add the concatenation module

  //Equal as starter of the operation added

  //Press equal again adn repeat the previous operation

  //Use of the button as a new operation start and display the value
});
