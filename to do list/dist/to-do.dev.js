"use strict";

var inputs = document.getElementById("inp");
var text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter in To-Do Item");
  } else {
    var remove = function remove() {
      newEle.remove();
    };

    var newEle = document.createElement("ul");
    newEle.innerHTML = "".concat(inputs.value, "<i class=\" fa-solid fa-trash\"></i>");
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
  }
}
//# sourceMappingURL=to-do.dev.js.map
