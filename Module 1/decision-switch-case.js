let marks = 92;

switch (true) {
    case marks >= 95:
        console.log("A+");
        break;
    case marks >= 90:
        console.log("A");
        break;
    case marks >= 85:
        console.log("A-");
        break;
    case marks >= 80:
        console.log("B+");
        break;
    default:
        console.log("Improvement needed");
        break;
}