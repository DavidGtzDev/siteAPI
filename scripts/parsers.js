function getTableHeaders(table){
    let headers = []
    let tableParse = `<table${table}</table>`
    let stringToDOM = new DOMParser().parseFromString(tableParse, "text/html")
    let headersHTML

    if(typeof(stringToDOM.getElementsByTagName("thead")[0]) != "undefined"){
        headersHTML = stringToDOM.getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")
    }else{
        headersHTML = stringToDOM.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")
    }

    for(let j = 0; j < headersHTML.length; j++){
        if(headersHTML[j].innerText != ""){
            headers.push(headersHTML[j].innerText)
        }
    }

    return(headers)
}

function getTableContent(table){
    let content = []
    let tableParse = `<table${table}</table>`
    let stringToDOM = new DOMParser().parseFromString(tableParse, "text/html")
    let contentHTML

    if(typeof(stringToDOM.getElementsByTagName("thead")[0]) != "undefined"){

        contentHTML = stringToDOM.getElementsByTagName("tbody")[0].getElementsByTagName("tr")
        
        for(let j = 0; j < contentHTML.length; j++){
            let td = contentHTML[j].getElementsByTagName("td")

            for(let k = 0; k < td.length; k++){
                alert(td[k].innerHTML)
                switch(td[k]){
                    case td[k].getElementsByTagName("a")[0].className == "image":
                        alert(td[k].getElementsByTagName("a")[1].innerText)
                    case td[k].getElementsByTagName("a")[0].className != "image":
                        alert(td[k].getElementsByTagName("a")[0].innerText)
                }
                 
            }

        }
    }else{
        alert("a")
    }


    return(content)
}