var time = new Date();
var currentTime = time.getHours();

switch(currentTime) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert("Good Night!");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        alert("Good Morning!");
        break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert("Good Day!");
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        alert("Good Evening!");
        break;
    default:
        alert("Could not retrieve Time!");
        break;
}