function viewSendJSONFiles(json){
    preList = document.getElementsByTagName("pre")
  
    for(let i = 0; i < preList.length; i++){
      preList[i].style.display = "none"
    }

    let jsonPre = document.createElement("pre")
    jsonPre.textContent = JSON.stringify(json, undefined, 2).substring(0,645)
    jsonPre.className = "jsonSendContainer"
    jsonPre.style.height = "90%"
    
    let sendButton = document.createElement("button")
    let downloadButton = document.createElement("button")
    let buttonContainer = document.createElement("div")
    
    sendButton.innerText = "Send"
    downloadButton.innerText = "Download"
    sendButton.className = "button_general"
    downloadButton.className = "button_general"
    buttonContainer.style.display = "flex"

    //este programa no esta haciendo al


    buttonContainer.appendChild(sendButton)
    buttonContainer.appendChild(downloadButton)
    body.appendChild(jsonPre)
    body.appendChild(buttonContainer)
  }