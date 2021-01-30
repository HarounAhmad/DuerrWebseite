$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "GPU.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    var txt;
    var txtString;
    var url;
    var counter;
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    for (var x = 0; x < lines.length; x++) {
        txt += lines[x] + "\n";
        counter += 1;
        txtString = lines[x].toString();
        url = txtString.match("https[\\s\\S]*$");
        getURL(url);

    }


   // console.log(txt.toString());
}

function getURL(url, count)
{
    var node = document.createElement("LI");
    var textNode = document.createTextNode(url[0]);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);

}