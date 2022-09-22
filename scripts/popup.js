const btnSelect = document.getElementById("button_select")
const ttlContainer = document.getElementById("title_container")
const body = document.getElementById("body")
let result;


btnSelect.addEventListener("click", async() => {
    //Get current tab's HTML as a variable called result
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    try {
        [{result}] = await chrome.scripting.executeScript({
          target: {tabId: tab.id},
          func: () => document.documentElement.innerHTML,
        });
      } catch (e) {
        alert(e);
        return;
    }

    //Transform HTML into a JSON object
    let siteHTML = new DOMParser().parseFromString(result,"text/html")
    let JSON_array = tableHtmlToJSON(siteHTML)
    
    
    //Stop diplaying current elements
    ttlContainer.style.display = "none"
    btnSelect.style.display = "none"

    for(let i = 0; i < JSON_array.length; i++){
      let jsonPre = document.createElement("pre")
      jsonPre.textContent = JSON.stringify(JSON_array[i][0], undefined, 2)
      jsonPre.className = "jsonContainer"
      body.appendChild(jsonPre)

      jsonPre.addEventListener("click", async() => {
        console.log(JSON_array[i])
      })
    }

    body.style.width = "350px"
    body.style.height = "350px"

})





