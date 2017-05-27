
function appendOutput(line: string) {

    // Detect browser vs cli
    let node = false;
    try {

        node = Object.prototype.toString.call(global.process) === '[object process]'
    } catch (e) { }

    if (node) {
        console.log(line);
    } else {
        if (epWebConsole) {
            webConsoleOutput = webConsoleOutput
                + '\n'
                + line;
            epWebConsole.innerText = webConsoleOutput;

            // Make it console-y
            epWebConsole.style.overflowY = "scroll";
            epWebConsole.scrollTop = epWebConsole.scrollHeight;
        }

    }
}