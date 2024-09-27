function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
//tabs
var gameData = {
  "flint": 0,
  "shv": 1,
  "shvtr": 1
}
function addflint() {
  var flintgain
  flintgain = 1
  gameData.flint += flintgain
  document.getElementById("flint").innerHTML = "Flint : " + gameData.flint
}

//save & load
function save() {
localStorage.setItem('GGRsave', JSON.stringify(gameData))
    }




function load() {
  var savegame = JSON.parse(localStorage.getItem("GGRsave"))
  if (savegame !== null) {
    gameData = savegame
  }
  //realload
  function pageload() {
    document.getElementById("flint").innerHTML = "Flint : " + gameData.flint
  }
  pageload()
}
function pageload() {
  document.getElementById("flint").innerHTML = "Flint : " + gameData.flint
}