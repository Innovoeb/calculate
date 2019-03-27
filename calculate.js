$(document).ready(function() {

// variables
  let inputOne = $("#num_one");
  let inputTwo = $("#num_two");
  let answer = $("#answer");

// addition function
  $("#add").on("click", () => {
    let add_answer = Number(inputOne.val()) + Number(inputTwo.val());
    answer.val(add_answer);
  });
// subtraction function
  $("#subtract").on("click", () => {
    let subtract_answer = Number(inputOne.val()) - Number(inputTwo.val());
    answer.val(subtract_answer);
  })
// multiplication function
  $("#multiply").on("click", () => {
    let multiply_answer = Number(inputOne.val()) * Number(inputTwo.val());
    answer.val(multiply_answer);
  })
// division function
  $("#divide").on("click", () => {
    let divide_answer = Number(inputOne.val()) / Number(inputTwo.val());
    answer.val(divide_answer);
  });

});
