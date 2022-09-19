const btnSelect = document.getElementById("button_select")
const ttlContainer = document.getElementById("title_container")
let result;


btnSelect.addEventListener("click", async() => {
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

    tables = getTables(result)
    jsonArray = tableToJSON(tables)
    

    ttlContainer.style.display = "none"
    btnSelect.style.display = "none"

})

function getTables(html){
    arr = html.split("<table",50)
    arrReturn = []

    for(let i = 0; i < arr.length; i++){
        if(i == 0){
            //pass
        }else if(arr[i] == undefined){
            //pass
        }else{
            temp = arr[i].split("</table>",1)
            arrReturn.push(temp)
        }
    }
    return arrReturn
}

function tableToJSON(tables){
    let finalArray = []
    
    return finalArray
}