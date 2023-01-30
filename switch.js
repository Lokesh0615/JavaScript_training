let day;
// console.log(new Date().getDate());
switch (new Date().getDay()) {
    case 0:
        day="sunday";
        break;
    
    case 1:
        day="monday";
        break;
    case 2:
        day="tuesday";
        break;
    case 3:
        day="thursday";
        break;
    case 4:
        day="friday";
        break;
    case 5:
        day="saturday";
        break;

    default:
        day="no day is available"
        break;
}

document.getElementsByClassName("demo")[0].innerHTML=day;