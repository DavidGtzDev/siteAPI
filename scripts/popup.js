const btnSelect = document.getElementById("button_select")
const ttlContainer = document.getElementById("title_container")
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

})

function tableHtmlToJSON(html){
  let JSON_array = []
  let tables = html.getElementsByTagName("table")

  for(let i = 0; i < tables.length; i++){
    let tableContents = []
    let headers = []
    let content = []
    let headerCounter = 0
    let myObj = {}

    for(let j = 0; j < tables[i].getElementsByTagName("th").length; j++){
      headers.push(tables[i].getElementsByTagName("th")[j].innerText)
    }

    for(let j = 0; j < tables[i].getElementsByTagName("td").length; j++){
      content.push(tables[i].getElementsByTagName("td")[j].innerText)
    }

    for(let j = 0; j < content.length; j++){
      if(headerCounter > headers.length - 1){
        tableContents.push(myObj)
        myObj = {}
        headerCounter = 0
      }

      myObj[headers[headerCounter]] = content[j]
      headerCounter++

    }

    headerCounter = 0
    JSON_array.push(tableContents)
  }

  return(JSON_array)
}



