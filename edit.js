function edit() {
    let editPlayer = [{
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
    for (let i = 0; i < editPlayer.length; i++) {
        let editplayer = new Player(editPlayer[i].name, editPlayer[i].index, editPlayer[i].forte_position, editPlayer[i].nationality, editPlayer[i].height, editPlayer[i].weight, editPlayer[i].dateOfBirth, editPlayer[i].skill, editPlayer[i].price);
        players.push(edit);
        players.splice(index, 1, editplayer);


    }
    displayListPlayer();


}