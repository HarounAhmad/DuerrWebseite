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
    var dropdown = document.getElementById("gpus");
    var option = document.createElement("option");

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
        txt += lines[x] + "\n"
        option.text = txt
        dropdown.add(option)

    }



    console.log(lines);
}