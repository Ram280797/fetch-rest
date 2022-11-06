let names = ["Afghanistan ", "Aland Islands", "Albania"];
let cap =["Kabul","Mariehamn","Tirana"];


let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";
container.style.background = "black";
container.style.width = "800px";
container.style.margin = "50px";
container.style.padding = "10px";
container.style.display = "inline-block";
container.style.alignSelf = "center";
function createElement() {
  let card = document.createElement("div");
  let title = document.createElement("h3");
  let img = document.createElement("img");
  let Capital = document.createElement("p");
  let Region = document.createElement("p");
  let CountryCode = document.createElement("p");
  var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Click for Weather";
button.addEventListener("click",foo);

 

  let head = document.createTextNode(names);
  //let ranke=document.createTextNode(capitals);
  
  

  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png";
  img.src = "https://flagcdn.com/ax.svg";
  img.src = "https://flagcdn.com/dz.svg";
  let para =document.createTextNode(cap);
  Capital.appendChild(para);
  title.appendChild(head);


  card.style.width = "200px";
  img.style.width = "100%";
  img.style.height = "200px";
  card.style.background = "cadetblue";
  card.style.color = "#fff";
  card.style.padding = "10px";
  card.style.margin = "24px";
  card.style.display = "inline-block";
  button.style.onClick
 
  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(Capital);
  card.appendChild(button);

  container.appendChild(card);
}
for (let i = 0; i < 3; i++) {
  createElement(i + 1, names[i],cap[i]);

}
async function foo(){
  const response = await fetch('https://openweathermap.org/api');
  const blob = await response.blob();
  }
  foo();