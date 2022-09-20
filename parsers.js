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
        contentHTML = stringToDOM.getElementsByTagName("thead")[0].getElementsByTagName("tr")
        alert(contentHTML.innerHTML)
        for(let j = 0; j < contentHTML.length; j++){
            let td = contentHTML[j].getElementsByTagName("td")
            alert(td[0])

            for(let k = 0; k < td.length; k++){
                if(td.getElementsByTagName("a")[0].innerText == "undefined"){
                    alert(td.getElementsByTagName("a")[1].innerText)
                }else{
                    alert(td.getElementsByTagName("a")[0].innerText)
                }
            }
        }
    }else{
        alert("a")
    }


    return(content)
}