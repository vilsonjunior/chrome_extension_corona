function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText)
        let results = response.results 
        let html = ""
        
        results.forEach(elem => {
          
              html += "<tr>" 
                  html += "<td></td>"                  
                  html += "<td>" + elem.total_obitos + "</td>"
                  html += "<td>" + elem.total_confirmado + "</td>"
                  html += "<td>" + elem.total_letalidade + "</td>"                  
              html += "</tr>"
                                                    
          document.getElementById('data_corona').innerHTML = html
          document.getElementById('data_atualizacao').innerHTML = elem.dt_atualizacao          
        });        
      }
    };
  
    xhttp.open("GET", "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral", true);
    xhttp.setRequestHeader("x-parse-application-id", "unAFkcaNDeXajurGB7LChj8SgQYS2ptm")
    xhttp.send();
  }

window.onload = function() {
    loadDoc()
};