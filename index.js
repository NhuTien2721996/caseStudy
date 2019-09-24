let Player = function (name, index, forte_position, nationality, height, weight, dateOfBirth, skill, price) {
    this.name = name;
    this.index = index;
    this.forte_position = forte_position;
    this.nationality = nationality;
    this.height = height;
    this.weight = weight;
    this.dateOfBirth = dateOfBirth;
    this.skill = skill;
    this.price = price;
    this.getName = function () {
        return this.name;
    };
    this.getIndex = function () {
        return this.index;
    };
    this.getForte_position = function () {
        return this.forte_position;
    };
    this.getNationality = function () {
        return this.nationality;
    };
    this.getHeight = function () {
        return this.height;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    this.getSkill = function () {
        return this.skill;
    };
    this.getPrice = function () {
        return this.price;
    };

    this.setName = function (value) {
        this.name = value;
    };
    this.setIndex = function (value) {
        this.index = value;
    };
    this.setForte_position = function (value) {
        this.forte_position = value;
    };
    this.setNationality = function (value) {
        this.nationality = value;
    };
    this.setHeight = function (value) {
        this.height = value;
    };
    this.setWeight = function (value) {
        this.weight = value;
    };
    this.setDateOfBirth = function (value) {
        this.dateOfBirth = value;
    };
    this.setSkill = function (value) {
        this.skill = value;
    };
    this.setPrice = function (value) {
        this.price = value;
    };
    this.getDisplay = function () {
        let str = `<h2>Tên cầu thủ:${this.name}<br>Chỉ số:${this.index}<br>Vị trí:${this.forte_position}<br>Quốc gia:${this.nationality}<br>Chiều cao:${this.height}<br>Cân nặng:${this.weight}<br>Ngày sinh:${this.dateOfBirth}<br>Kỹ thuật:${this.skill}<br>Lương:${this.price}</h2>`;
        return str;
    };
};