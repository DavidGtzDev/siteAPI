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

    //Get all tables from the HTML
    tables = getTables(result)
    //Transform those tables into JSON 
    jsonArray = tableToJSON(tables)
    
    //Stop diplaying current elements
    ttlContainer.style.display = "none"
    btnSelect.style.display = "none"

})

function getTables(html){
    //Split every element with the table tag
    //This could be done better by transforming the html string into a DOM element
    //and then getting all the table elements
    //might do it later
    arr = html.split("<table",50)
    arrReturn = []

    //From the 50 elements of the array, push only the valid ones
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
    for(let i = 0; i < tables.length; i++){
        //Get the headers and the content
        let headers = getTableHeaders(tables[i])
        let content = getTableContent(tables[i])
    }

    return finalArray
}

