function tableHtmlToJSON(html){
    let JSON_array = []
    //OObtain the tables
    let tables = html.getElementsByTagName("table")
  
    for(let i = 0; i < tables.length; i++){
      let tableContents = []
      let headers = []
      let content = []
      let headerCounter = 0
      let myObj = {}
  
      for(let j = 0; j < tables[i].getElementsByTagName("th").length; j++){
        headers.push(tables[i].getElementsByTagName("th")[j].innerText.replace(/[\r\n]/gm, ''))
      }
  
      for(let j = 0; j < tables[i].getElementsByTagName("td").length; j++){
        content.push(tables[i].getElementsByTagName("td")[j].innerText.replace(/[\r\n]/gm, ''))
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

