function addTable() {
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')
    
    table.border = '1'
    table.appendChild(tableBody);
    
    var heading = new Array();
    heading[0] = "Numero de orden"
    heading[1] = "Calificación"
    heading[2] = "Comentario"

    
    var stock = new Array()
    stock[0] = new Array("77", "2", "Le falto azucar al patillo")
    stock[1] = new Array("25", "5", "Excelente")
    stock[2] = new Array("2", "1", "Malo")
    stock[3] = new Array("88", "3", "")
    
    //COLUMNAS DE LA TABLA
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }
    
    //FILAS DE LA TABLA
    for (i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }  
    myTableDiv.appendChild(table)
    }