
function getStatus() {
  var xmlhttp =  new XMLHttpRequest();
  xmlhttp.open('GET', '/status', true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
            processResponse(xmlhttp.responseText)
        }
    }
  }
  xmlhttp.send("");
}

function toggle(id) {
  var xmlhttp =  new XMLHttpRequest();
  xmlhttp.open('POST', '/toggle/' + id, true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
            processResponse(xmlhttp.responseText)
        }
    }
  }
  xmlhttp.send("");
}

function processResponse(responseJson) {
  console.log("responseJson: " + responseJson)
  var response = eval("("+responseJson+")")
  setStatus("s1", response.s1)
  setStatus("s2", response.s2)
  setStatus("s3", response.s3)
}

function setStatus(id, status) {
  var toggleButton = getToggleButton(id)
  if (status)
    toggleButton.value = "Stop"
  else 
    toggleButton.value = "Run"

}

function getToggleButton(rowId) {
  var row = document.getElementById(rowId)
  return row.cells[2].firstChild
}

function setDurationInMinutes(id, minutes) {
  console.log("setDurationInMinutes id: " + id + " minutes: " + minutes)
}