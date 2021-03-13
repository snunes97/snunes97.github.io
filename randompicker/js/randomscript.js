var input_number = 1;

function addInput(){
  var new_input = document.getElementById("item1").cloneNode(true);
  input_number++;
  new_input.id="item".concat(input_number)

  new_input.querySelector("#input1").name="input".concat(input_number)
  new_input.querySelector("#input1").value=""
  new_input.querySelector("#input1").id="input".concat(input_number)
  new_input.querySelector(".input-text").innerHTML = "Item ".concat(input_number,":")

  document.getElementById('input-section').appendChild(new_input);
  
}

function removeInput(){
  var rem_input = document.getElementById("item".concat(input_number));
  rem_input.parentNode.removeChild(rem_input);
  input_number--;
}

function getRandomItem() {

  text_list = [];
  inputs = document.getElementsByTagName('input');

  for (i = 0; i < inputs.length; ++i) {
    text_list.push(inputs[i].value);
  }

  var random_result = text_list[Math.floor(Math.random() * text_list.length)];
  document.getElementById("result").innerHTML = random_result;
  document.getElementById("mobile-result").innerHTML = random_result;
}
