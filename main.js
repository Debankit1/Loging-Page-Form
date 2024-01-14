let f = document.getElementById("f");
let u = document.getElementById("username");
let e = document.getElementById("email");
let b = document.getElementById("btn");
let htag = document.getElementById("val1");
let htag2 = document.getElementById("val2");
// console.log(f);
// console.log(e);
f.addEventListener("submit", function (event) {
  event.preventDefault(); //to stop auto fill submit
  var user = htag.innerText + " " + u.value;
  htag.textContent = user;
  // console.log(u.value);
  var em = htag2.innerText + " " + e.value;
  htag2.textContent = em;
  // console.log(e.value);
});
b.addEventListener("click", () => {
  let k = (u.value = "");
  let h = (e.value = "");
  let h1 = (htag.innerText = "Your User Name is =");
  let h2 = (htag2.innerText = "Your Email id =");
  console.log(k);
  console.log(h);
});
