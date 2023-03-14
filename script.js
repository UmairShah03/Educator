var navlinks = document.getElementById("navlinks");

function showmenu() {
    navlinks.style.right = "0%";

}

function closemenu() {
    navlinks.style.right = "-200%"
}

// Map 
function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        alert("Doesn't Support ")
    }
}

function showPosition(position) {
    alert("Latitude: "+position.coords.latitude + "\n"+"Longtitude: " + position.coords.longitude)
}


let map;

function initMap() {
    let myLocation = { lat:25.0835, lng: 67.0113 }
    map = new google.maps.Map(document.getElementById("map"), {
        center: myLocation,
        zoom: 20,
    });
    const marker = new google.maps.Marker({
        position:  myLocation ,
        map : map,
        label: "H",
        title: "Hamdard Univeristy",
        draggable: false,
        animation: google.maps.Animation.BOUNCE,
        icon: 'icon.png'
    });
}

window.initMap = initMap;
