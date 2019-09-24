function creat() {
    let newPlayer = [{
        name: prompt("name"),
        index: prompt("index"),
        forte_position: prompt("forte_position"),
        nationality: prompt("nationality"),
        height: prompt("height"),
        weight: prompt("weight"),
        dateOfBirth: prompt("dateOfBirth"),
        skill: prompt("skill"),
        price: prompt("price"),
    }
    ];
    for (let i = 0; i < newPlayer.length; i++) {
        let add = new Player(newPlayer[i].name, newPlayer[i].index, newPlayer[i].forte_position, newPlayer[i].nationality, newPlayer[i].height, newPlayer[i].weight, newPlayer[i].dateOfBirth, newPlayer[i].skill, newPlayer[i].price);
        players.push(add);
    }

    displayListPlayer();
}