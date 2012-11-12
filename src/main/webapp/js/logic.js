
function getStatus() {
  var xmlhttp =  new XMLHttpRequest();
  xmlhttp.open('GET', '/status', true);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
            processSatusResponse(xmlhttp.responseText)
        }
    }
  }
  xmlhttp.send("");
}

function processSatusResponse(responseJson) {
  console.log("responseJson: " + responseJson)
  var response = eval("("+responseJson+")")

  setOutletStatus(response.program.outlet[0])
  setOutletStatus(response.program.outlet[1])
  setOutletStatus(response.program.outlet[2])
}

function setOutletStatus(outletStatus) {
  // var outletRow = document.getElementById(outletStatus.id)
  // outletRow.getElementsByTagName("outletName").innerHTML=outletStatus.name
  // outletRow.getElementsByTagName("outletStatus").innerHTML=outletStatus.status
  // outletRow.getElementsByTagName("outletDuration").value=outletStatus.duration
  // outletRow.getElementsByTagName("outletRemaining").innerHTML=outletStatus.remaining
}

function getToggleButton(rowId) {
  var row = document.getElementById(rowId)
  return row.cells[2].firstChild
}

function setDurationInMinutes(id, minutes) {
  console.log("setDurationInMinutes id: " + id + " minutes: " + minutes)
}

function jqueryTest () {
  console.log($("#outlet1[name='outletName'"))
}