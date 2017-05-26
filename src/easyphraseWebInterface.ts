// Build the interface
if (document.getElementById("easyphrase")) {
    let effCanvas = document.getElementById("easyphrase");
    effCanvas.innerHTML = '<div id="epWebConsole" style="display: hidden;"></div>'
                            + '<button id="epButton" type="button" class="btn btn-primary">Generate Password</button>'
                            + '<button id="cpyButton" type="button" class="btn btn-success">Copy Password to Clipboard</button>';
}

// get the stuff we need to report back
let epWebConsole = document.getElementById("epWebConsole");
epWebConsole.style.height = "50vh";
epWebConsole.style.width = "100%";
epWebConsole.style.backgroundColor = "black";
epWebConsole.style.color = "green";
epWebConsole.style.fontWeight = "bold";
epWebConsole.style.textAlign = "left"

let webConsoleOutput = epWebConsole.innerText;
let genButton = document.getElementById("epButton");
let cpyButton = document.getElementById("cpyButton");

let silent = false;


// bind to the buttons
genButton.onclick = (e: Event) => { generatePass() }