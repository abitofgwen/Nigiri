//var dic = {"toro":"url(image/torobg.png)", "katsuo":"url(image/katsuobg.png)",
//"salmonbelly" : "url(image/salmonbellybg.png)", "roe" : "url(image/Roebg.png)",
//"sake" : "url(image/sakebg.png)", "kuru" : "url(image/kurubg.png)", "uni": "url(image/unibg.png)",
//"tamago": "url(image/tamagobg.png)", "ika": "url(image/ikabg.png)", "kabishira" : "url(image/kabishirabg.png)",
//"sawara" : "url(image/sawarabg.png)", "sumi-ika": "url(image/sumi-ikabg.png)", "kanpachi" : "url(image/kanpachibg.png)",
//"aori-ika" : "url(image/aori-ikabg.png)", "sayori" : "url(image/sayoribg.png)", "kinmedai" : "url(image/kinmedaibg.png)"};
//Easter Egg counter
var eggCounter = 0;
var txtDic = {"uni" : "SEA URCHIN ROE UNI [OO-NEE] うに 海胆", "toro" : "MEDIUM FATTY TUNA CHŪTORO 中とろ 鮪", "kuru" : "JAPANESE TIGER PRAWN KURUMA 車海老", "sake" : "SALMON SĀMON SAKE[SHA-KE] サーモン鲑", "katsuo": "BONITO RED FLESHEE KATSUO AKAMI 鰹", "salmonbelly": "SALMON BELLY SĀMON HARASU 鮭ハラス", "roe": "SALMON EGGS SALMON ROE IRUKA イクラ", "tamago":"EGG TAMAGO 卵焼き EGG TAMAGO 卵焼き", "ika": "SQUID NIGIRI SUSHI IKA イカ握り寿司 烏賊", "sumi-ika":"SPINELESS CUTTLEFISH SUMI-IKA すみいか", "kabishira":"SCALLOP HOTATE KAIBASHIRA ホタテ 貝柱", "sawara":"YOUNG SPANISH MACKEREL SAGOSHI 狭腰", "kanpachi":"GREAT AMBERJACK WHITE KANPACHI 間八", "aori-ika":"BIG FIN REEF SQUID AORI IKA アオリイカ", "sayori":"JAPANESE HALFBEAK SILVER SAYORI 針魚", "kinmedai":"SPINELESS CUTTLEFISH KINMEDAI 金目鯛"}
var flag = false;
var counter = 0;
// draggble item
function drag(event) {
  event.dataTransfer.setData("Text",event.target.id);
}

function dropCurrent(event) {
  event.preventDefault();
  eggCounter += 1;
  //eggCounter control how many drop will trigger sushi rain
  if (eggCounter == 7) {
    var id = letItRain();
    setTimeout(function() {
      window.clearInterval(id);
    }, 3000)
    eggCounter = 0;
  }
  //the data below is actually id of element.
  var data = event.dataTransfer.getData("Text");
  var item = document.getElementById(data).cloneNode(true);
  //create a new id to diff clonedNode from original node
  var newId = data + "1";
  if (flag) {
    var chilN = event.target.childNodes[0];
    event.target.replaceChild(item, chilN);
  } else {
    event.target.appendChild(item);
    flag = true;
  }
  item.setAttribute("id", newId);
  if (newId == "roe1" || newId == "uni1" || newId == "kabishira1") {
    document.getElementById(newId).style.marginTop = "50px";
    document.getElementById(newId).style.marginLeft = "260px";
  } else if (newId == "sake1" || newId == "kuru1" || newId == "tamago1"
  || newId == "ika1" || newId == "sawara1" || newId == "sumi-ika1" ||
  newId == "kanpachi1" || newId == "aori-ika1" || newId == "kinmedai1" || newId == "sayori1" || newId == "toro1"){
    document.getElementById(newId).style.marginTop = "80px";
    document.getElementById(newId).style.marginLeft = "250px";
  } else {
    document.getElementById(newId).style.marginTop = "90px";
    document.getElementById(newId).style.marginLeft = "250px";
  }

  //scale based on id
  if (newId == "kuru1") {
    document.getElementById(newId).style.transform = "scale(4.5)";
  } else if (newId == "roe1" || newId == "uni1") {
    document.getElementById(newId).style.transform = "scale(3.5)";
  } else {
    document.getElementById(newId).style.transform = "scale(4)";
  }

  //add text div
  var bground = document.getElementById("background");
  // create a new <p>
  var newLine = document.createElement("p");
  newLine.className = "backgroundText";
  var textNode = document.createTextNode(txtDic[data]);
  newLine.appendChild(textNode);

  // we have 3 childNodes before we even add one to the end of the childNodes list,
  // thus, when we wanna start to replace old child, we need to start replace at index == 3.
  // in the following trick, counter is consider as pointer which always point to the position
  // that we going to add/replace (from index 3 to index 12), and we keep the max number of lines to 10.
  if (bground.childNodes.length == 13) {
    var index = 3 + counter % 10;
    for (;index < 14; index++) {
      var topElement = bground.childNodes[index];
      bground.replaceChild(newLine.cloneNode(true), topElement);
    }
  } else {
    //10 times
    for (var i = 0; i < 10; i++) {
      document.getElementById("background").appendChild(newLine.cloneNode(true));
    }
  }
  counter += 10;
  if (counter == 20) {
    counter = 0;
  }
}

function allowDrop(event) {
  event.preventDefault();
}


function refre() {
  location.reload();
}
