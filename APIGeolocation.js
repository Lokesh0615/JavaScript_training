// const succsses= (position)=>{
//     // console.log(position.coords);
//     // console.log(position.coords.latitude);
//     // console.log(position.coords.longitude);
//     // console.log(position.coords.accuracy);
//     // altitude above sea level
//     // console.log(position.coords.altitude);
//     console.log(position.coords.heading);
//     // document.getElementById("show").innerHTML=position;
// }
// const err=(er)=>{
//     console.error(er);
// }

// navigator.geolocation.getCurrentPosition(succsses, err);
// // const watchid=navigator.geolocation.watchPosition(succsses, err)
// // navigator.geolocation.clearWatch(watchid);
// let aa=[1,3,2,5,1,6,0];
// let b=Math.max.apply(null, aa);
// console.log(Math.min.apply(null, aa));
// console.log(b);
const x = document.getElementById("show");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "loaction is not supported by the browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for geolocation";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "location information is unavailable";
            break;
        case error.TIMEOUT:
            x.innerHTML="the request to get user location timed out";
            break;
        case error.UNKOWN_ERROR:
            x.innerHTML="an unknown erron";
            break;
    }

}
getLocation();
