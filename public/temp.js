let arrayLink = [
  "https://tawk.to/tripimkt",
  "https://tawk.to/tawkto.tripi.ketoan",
  "https://tawk.to/tawkto.tripi.cs",
  "https://tawk.to/tawkto.tripi.ticketing",
  "https://tawk.to/tawkto.tripi.vn",
  "https://tawk.to/tripiit"
]
const startInterval = async () => {
  document.getElementById("btn").innerHTML = "Please wait!"
  console.log("injecting");
  await makeNew();
  await sleep(1000);
  document.getElementById("btn").outerHTML = "";
}

// Get root
let root = document.getElementById("root");

const makeNew = async () => {
  // Get root
  let root = document.getElementById("root");

  // Create container
  let divContainer = document.createElement("div");
  divContainer.className = "container";

  // Add container to root
  root.appendChild(divContainer);

  // Create row
  let divRow = document.createElement("div");
  divRow.className = "row"

  // Add row to container
  divContainer.appendChild(divRow)


  // Create iframe + add to div col
  for (let i = 0; i < 3; i++) {
    let iframe = createIframe(arrayLink[i]);
    sleep(2000);
    let newCol = createCol();
    newCol.appendChild(iframe)

    // Add col to row
    divRow.appendChild(newCol)
  }
  for (let i = 3; i < 6; i++) {
    let iframe = createIframe(arrayLink[i]);
    sleep(2000);
    let newCol = createCol();
    newCol.appendChild(iframe)

    // Add col to row
    divRow.appendChild(newCol)
  }
}
function createCol(){
  // Create col
  let divCol = document.createElement("div")
  divCol.className = "col-md-4"
  return divCol
}
function createIframe(link) {
  let iframe = document.createElement("iframe")
  iframe.setAttribute("src", link);
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "550px");
  return iframe
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
