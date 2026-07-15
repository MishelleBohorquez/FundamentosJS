const auto = {

  gasolina: 100,

  conducir() {

    this.gasolina -= 10;

    return `Gasolina restante: ${this.gasolina}%`;

  }

};

console.log(auto.conducir());

console.log(auto.conducir());