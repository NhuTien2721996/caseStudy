let players = [];
let vitri = 0;
let paint = document.getElementById("display");
let arr = [
    {
        name: "Cesc Fàbregas",
        index: "93",
        forte_position: "CM",
        nationality: "Spain",
        height: "180cm",
        weight: "77kg",
        dateOfBirth: "1987/05/04",
        skill: "3 sao",
        price: "56.000.000 đồng"
    },
    {
        name: "C.Ronaldo",
        index: "98",
        forte_position: "ST",
        nationality: "Portugan",
        height: "187cm",
        weight: "83kg",
        dateOfBirth: "1985/02/05",
        skill: "5 sao",
        price: "3.300.000.000 đồng"
    },
    {
        name: "L.Messi",
        index: "98",
        forte_position: "CF",
        nationality: "Argentina",
        height: "170cm",
        weight: "72kg",
        dateOfBirth: "1987/06/24",
        skill: "4 sao",
        price: "953.000.000 đồng"
    },
    {
        name: "Lương Xuân Trường",
        index: "86",
        forte_position: "CM",
        nationality: "Việt Nam",
        height: "178cm",
        weight: "71kg",
        dateOfBirth: "1995/04/28",
        skill: "4 sao",
        price: "116.000.000 đồng"
    },
    {
        name: "Nguyễn Công Phượng",
        index: "85",
        forte_position: "RW",
        nationality: "Việt Nam",
        height: "170cm",
        weight: "67kg",
        dateOfBirth: "1995/01/21",
        skill: "4 sao",
        price: "190.000.000 đồng"
    },
    {
        name: "Mesut Ozil",
        index: "96",
        forte_position: "CAM",
        nationality: "Germany",
        height: "180cm",
        weight: "76kg",
        dateOfBirth: "1988/10/15",
        skill: "4 sao",
        price: "396.000.000 đồng"
    },
    {
        name: "P.Aubameyang",
        index: "96",
        forte_position: "ST",
        nationality: "Gabon",
        height: "187cm",
        weight: "80kg",
        dateOfBirth: "1989/06/18",
        skill: "4 sao",
        price: "841.000.000 đồng"
    },
    {
        name: "Lacazette",
        index: "95",
        forte_position: "ST",
        nationality: "France",
        height: "185cm",
        weight: "73kg",
        dateOfBirth: "1991/05/28",
        skill: "5 sao",
        price: "267.000.000 đồng"
    },
    {
        name: "B.Leno",
        index: "93",
        forte_position: "GK",
        nationality: "Germany",
        height: "190cm",
        weight: "83kg",
        dateOfBirth: "1990/03/04",
        skill: "1 sao",
        price: "69.400.000 đồng"
    },
    {
        name: "Nguyễn Quang Hải",
        index: "85",
        forte_position: "LW",
        nationality: "Việt Nam",
        height: "168cm",
        weight: "65kg",
        dateOfBirth: "1997/12/04",
        skill: "4 sao",
        price: "226.000.000 đồng"
    },
];
addPlayerInArray();
displayListPlayer();

function addPlayerInArray() {

    for (let i = 0; i < arr.length; i++) {
        let player = new Player(arr[i].name, arr[i].index, arr[i].forte_position, arr[i].nationality, arr[i].height, arr[i].weight, arr[i].dateOfBirth, arr[i].skill, arr[i].price);
        players.push(player);
    }
}

function displayListPlayer() {
    paint.innerHTML = "";


    for (let i = 0; i < players.length; i++) {
        paint.innerHTML += `<h3 style="color: blue"><button onclick="display('${players[i].getDisplay()}')">View</button>
<button onclick="del(${i})">Delete</button>
<span>${players[i].name}</span><br></h3>`;
    }
}


function display(value) {
    document.getElementById('displayDetail').innerHTML = value;
}

