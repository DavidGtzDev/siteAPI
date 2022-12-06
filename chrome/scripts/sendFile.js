function sendFile(json){
    document.body.innerHTML = '';
    let sendContainer = document.createElement("div")
    let h3 = document.createElement("h3")
    let sendButton = document.createElement("button")

    h3.innerText = "Endpoint"
    sendButton.innerText = "Send"
    let input = document.createElement("input")
    sendContainer.appendChild(h3)
    sendContainer.appendChild(input)
    sendContainer.appendChild(sendButton)
    sendButton.className = "button_general"

    input.className = "inputSend"
    h3.className = "textSend"
    sendContainer.className = "containerSend"
    document.body.style.width = "200px"
    document.body.appendChild(sendContainer)


    sendButton.addEventListener("click", () => {
        document.body.innerHTML = '';
        window.close();
    })

}