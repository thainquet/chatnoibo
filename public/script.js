function makeNew() {
    // Get root
    let root = document.getElementById("root");
    // Create container
    let div = document.createElement("div");
    div.className = "container";

    // Create row
    let divRow = document.createElement("div");
    divRow.className = "row"

    // Create col
    let divCol = document.createElement("div")
    divCol.className = "col-md-3"



    // Add col to row
    divRow.appendChild(divCol)

    // Add row to container
    div.appendChild(divRow)


    // Add container to root
    root.appendChild(div);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function startInterval() {
    console.log("so 1");
    sleep(1000);
    makeNew();
    sleep(1000);
    console.log("so 2")
}
