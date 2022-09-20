function getTableHeaders(table){
    let headers = []
    let tableParse = `<table${table}</table>`
    let stringToDOM = new DOMParser().parseFromString(tableParse, "text/html")
    let headersHTML

    //Use switch case to get all cases because there are tons of individual cases

    return(headers)
}

function getTableContent(table){
    let content = []
    let tableParse = `<table${table}</table>`
    let stringToDOM = new DOMParser().parseFromString(tableParse, "text/html")
    let contentHTML

    //Use switch case to get all cases because there are tons of individual cases

    return(content)
}