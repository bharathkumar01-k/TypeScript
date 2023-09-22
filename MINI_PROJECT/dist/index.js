"use strict";
const button = document.querySelector("#btn");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("button clicked");
});
