
document.getElementById('textInput').focus;

const items = [];

let id = 0;

let choiceDisplayed = false;

function addItem() {
  let itemName = document.getElementById('textInput').value.trim();
  if(itemName.length > 0 && itemName != null) {
    items.push({name: itemName, id: id});
    addItemTile(itemName, id);
    id++;
    //Enable choice making button
    if(items.length > 0) {
      document.getElementById("makeChoiceButton").disabled = false;
    }
  }
  document.getElementById('textInput').value = "";
  document.getElementById('textInput').focus;
  return false;
}

function addItemTile(item, id) {
  let ul = document.getElementById("tiles");
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.appendChild(document.createTextNode('x'));

  a.setAttribute("href", "#");
  li.appendChild(a);
  li.appendChild(document.createTextNode(item));
  li.setAttribute("class", "tile");
  li.setAttribute("id", id);
  a.setAttribute("onClick", "removeItem(this.parentElement.id)");
  ul.appendChild(li);
}

function removeItem(id) {
  //remove object from array
  id = parseInt(id);
  let removeIndex = items.map(item => item.id).indexOf(id);
  ~removeIndex && items.splice(removeIndex, 1)
  //remove div from the dom
  document.getElementById(id).outerHTML = "";
  //Disable choice making button if no tiles
  if(items.length <= 0) {
    document.getElementById("makeChoiceButton").disabled = true;
  }
}

function makeChoice() {
    let choice = items[Math.floor(Math.random() * items.length)].name;
    displayChoice(choice);
}

function displayChoice(choice) {
  let div = document.getElementById("displayChosen");
  let innerDiv = document.getElementById("displayChosenTile");
  innerDiv.innerHTML = "<a href='#' onclick='hideDisplayChoice()'>x</a>";
 
  innerDiv.appendChild(document.createTextNode(choice));
  div.style.display = "flex";
}

function hideDisplayChoice() {
  let div = document.getElementById("displayChosen");
  let innerDiv = document.getElementById("displayChosenTile");

  
  div.style.display = "none";
}