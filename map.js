var webMap = null;
var lurayPosition = {lat: 38.664434, lng: -78.483815 };
var niagraPosition = {lat: 43.084140, lng: -79.074034};
var rhodePosition = {lat: 41.700027, lng: -71.414997};
var bostonPosition = {lat: 42.360048,lng:  -71.058156};
var Luray = null
var Niagra = null
var Rhode = null
var Boston = null
var paraTitle = null
var paraText = null
var picture = null
function initMap()
{
    var InitializedMap = document.getElementById("webMap")
    webMap = new google.maps.Map(InitializedMap, {
        zoom: 13,
        center: lurayPosition
    });

    var marker1 = new google.maps.Marker({position:lurayPosition, map: webMap, title: 'Luray'})
    var marker2 = new google.maps.Marker({position:niagraPosition, map: webMap, title: 'Niagra'})
    var marker3 = new google.maps.Marker({position:rhodePosition, map: webMap, title: 'Rhode Island'})
    var marker4 = new google.maps.Marker({position:bostonPosition, map: webMap, title: 'Boston'})

    marker1.addListener('click', () => LurayClicked());
    marker2.addListener('click', () => NiagraClicked());
    marker3.addListener('click', () => RhodeClicked());
    marker4.addListener('click', () => BostonClicked());

}

function disable(){
  Luray = document.getElementById("Luray")
  Niagra = document.getElementById("Niagra")
  Rhode = document.getElementById("Rhode")
  Boston = document.getElementById("Boston")
  paraTitle = document.getElementById("paraTitle")
  paraText = document.getElementById("paraText")

  picture = document.getElementById("locationPic")

  Luray.children[0].setAttribute("class", "nav-link")
  Niagra.children[0].setAttribute("class", "nav-link")
  Rhode.children[0].setAttribute("class", "nav-link")
  Boston.children[0].setAttribute("class", "nav-link")
}


function LurayClicked(){
  disable()
  Luray.children[0].setAttribute("class", "nav-link active")
  webMap.setZoom(13)
  webMap.setCenter(lurayPosition)
  paraTitle.innerHTML = "Luray Caverns"
  paraText.innerHTML = "Luray Caverns is located in Viginia, in the area of the Shanendoah Valley. The Caverns is an amazing place to explore caves and see art made by nature. It's very close to the mountains where you can take the Skyline Drive. It took us hours to drive through the mountains and at every checkpoint there were amazing views."
  picture.setAttribute("src", "images/Luray.jpg")

}

function NiagraClicked(){
  disable()
  Niagra.children[0].setAttribute("class", "nav-link active")
  webMap.setZoom(13)
  webMap.setCenter(niagraPosition)
  paraTitle.innerHTML = "Niagra Falls"
  paraText.innerHTML = "I've been to Niagra Falls many times throughout the years. When it gets dark, the Falls light up to a bunch of different colors. The Maid of the Mist is very fun, but you're bound to get your phone and camera wet when the boat gets near the Falls."
  picture.setAttribute("src", "images/Niagra.jpg")

}

function RhodeClicked(){
  disable()
  Rhode.children[0].setAttribute("class", "nav-link active")
  webMap.setZoom(13)
  webMap.setCenter(rhodePosition)
  paraTitle.innerHTML = "Rhode Island"
  paraText.innerHTML = "I went to Rhode Island during the winter and it was VERY cold. I loved it because I was always used to the dirty New York snow, but the snow was pure white and looked untouched. I looked at some colleges while I was there, and although I liked them, I didn't want to leave NYC just yet."
  picture.setAttribute("src", "images/RhodeIsland.jpg")
}

function BostonClicked(){
  disable()
  Boston.children[0].setAttribute("class", "nav-link active")
  webMap.setZoom(13)
  webMap.setCenter(bostonPosition)
  paraTitle.innerHTML = "Boston"
  paraText.innerHTML = "My cousin and I decided to take a drive to Boston for a weekend. He applied for some jobs there and had to go for an interview. While driving there, we got lost many times because the roads started to get confusing. A day later, when it was time for his interview, I walked around Boston for a couple of hours using my phone for GPS. My phone ran out of charge and I was lost in the middle of Boston with no idea how to get back to the AirBnB. I had to ask strangers for help in a Starbucks and they were nice enough to give me directions as well as show me some hotspots to check out."
  picture.setAttribute("src", "images/Boston.jpg")
}
