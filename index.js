const div = document.createElement("div");
document.body.prepend(div);
div.classList.add("div");

const btn = document.createElement("button");
btn.textContent = "CHANGE PICTURE";
div.prepend(btn);
btn.style.backgroundColor = "aquamarine";
btn.style.border = "none";
btn.style.borderRadius = "10px";
btn.style.padding = "20px";
btn.style.margin = "20px";

const img = document.createElement("img");
img.style.height = "400px";
img.style.borderRadius = "30px";

function handleRequest() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => handleResponse(data));
}


function handleResponse(data) {
  img.src = data.message;
  div.prepend(img);
  // div.innerHTML += data.message;
}

btn.addEventListener("click", handleRequest);
window.onload = handleRequest;