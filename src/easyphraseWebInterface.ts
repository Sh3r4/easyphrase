// Build the interface
if (document.getElementById("easyphrase")) {
    let effCanvas = document.getElementById("easyphrase");
    effCanvas.style.textAlign = "left";

    // check for an existing output area
    if (!document.getElementById("easyphrase-output-element")) {
        let defaultOutput = '<div id="easyphrase-output-element" style="display: hidden;"></div>';
        effCanvas.innerHTML += defaultOutput;

        let epWebConsole = document.getElementById("easyphrase-output-element");
        epWebConsole.style.height = "50vh";
        epWebConsole.style.width = "100%";
        epWebConsole.style.backgroundColor = "black";
        epWebConsole.style.color = "green";
        epWebConsole.style.fontWeight = "bold";
        epWebConsole.style.textAlign = "left";
    }

    // check for an existing generate button
    if (!document.getElementById("easyphrase-generate-button")) {
        let defaultGenerateButton = '<button id="easyphrase-generate-button" type="button" class="btn btn-primary">Generate Password</button>';
        effCanvas.innerHTML += defaultGenerateButton;
    }

    // check for an existing copy button
    if (!document.getElementById("easyphrase-copy-button")) {
        let defaultCopyButton = '<button id="easyphrase-copy-button" type="button" class="btn">Copy Password to Clipboard</button>';
        effCanvas.innerHTML += defaultCopyButton;
    }

    // check for an existing silent generation checkbox
    if (!document.getElementById("easyphrase-silent-checkbox")) {
        let defaultSilentCheckbox = '<div class="checkbox">'
            + '<label><input type="checkbox" value="" id="easyphrase-silent-checkbox">Silent Generation</label>'
            + '</div>';
        effCanvas.innerHTML += defaultSilentCheckbox;
    }

    // check for an existing less secure checkbox
    if (!document.getElementById("easyphrase-lessSec-checkbox")) {
        let defaultLessSecureCheckbox = '<div class="checkbox">'
            + '<label><input type="checkbox" value="" id="easyphrase-lessSec-checkbox">Less Secure (no dictionary attack mitigation)</label>'
            + '</div>';
        effCanvas.innerHTML += defaultLessSecureCheckbox;
    }

    // check for an existing quantity input area
    if (!document.getElementById("easyphrase-quantity-input")) {
        let defaultQuantityInput = '<label for="easyphrase-quantity-input">Quantity to generate:</label>'
            + '<div class="input-group">'
            + '<input type="number" class="form-control" id="easyphrase-quantity-input">'
            + '<span class="input-group-addon">passwords</span>'
            + '</div>';
        effCanvas.innerHTML += defaultQuantityInput;
    }
}

// get the stuff we need to report back
let epWebConsole = document.getElementById("easyphrase-output-element");
let webConsoleOutput = epWebConsole.innerText;
let silentCheck = document.getElementById("easyphrase-silent-checkbox") as HTMLInputElement;
let lessSecCheck = document.getElementById("easyphrase-lessSec-checkbox") as HTMLInputElement;
let genButton = document.getElementById("easyphrase-generate-button");
let cpyButton = document.getElementById("easyphrase-copy-button");
let qtyInput = document.getElementById("easyphrase-quantity-input") as HTMLInputElement;

let silent = false;

// let us copy the last generated password to clipboard
function getLastPhrase(): void {
    let output = webConsoleOutput.split(/\r?\n/);
    let last = output[output.length - 1];

    let textArea = document.createElement("textarea");

    // attempt to completely unstyle the new element in case it renders
    textArea.style.position = 'fixed';
    textArea.style.right = "0";
    textArea.style.left = "0";
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = "0";
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = last;

    document.body.appendChild(textArea);

    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.log('Copy to clipboard failed.');
    } finally {
        document.body.removeChild(textArea);
    }

}

function webGenerate(): void {
    silent = silentCheck.checked;
    let security = lessSecCheck.checked;
    let generationQuantity = 1;

    // get the quantity to generate
    if (qtyInput.valueAsNumber >= 2) {
        generationQuantity = qtyInput.valueAsNumber;
    }

    // add a line to the output to make it a little less confusing
    webConsoleOutput = webConsoleOutput + '\r\n';

    generatePass(generationQuantity,security);
}


// bind to the buttons
genButton.onclick = (e: Event) => { webGenerate() }
cpyButton.onclick = (e: Event) => { getLastPhrase() }
