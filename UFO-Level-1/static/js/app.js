// from data.js
var tableData = data;

var tbody=d3.select("tbody");
function appendTable(data) {
    tbody.html("");
    data.forEach((rowData)=>{

    var trow=tbody.append("tr");
    Object.values(rowData).forEach((value)=>{
        var tcells=trow.append("td");
        tcells.text(value);
    })

    })
}

appendTable(tableData);


function filterTable(){
    var date=d3.select("#datetime").property("value");
    console.log(date);
    var filterdata=tableData.filter(row=>row.datetime==date);
    console.log(filterdata)
    appendTable(filterdata);

}

d3.selectAll("#filter-btn").on("click",filterTable);

