let result = getVicDef(102, 1)
let lvl =""

if (result < 10) {
    lvl = "Ferro";
} else if (result <= 20) {
    lvl = "Bronze";
} else if (result <= 50) {
    lvl = "Prata";
} else if (result <= 80) {
    lvl = "Ouro";
} else if (result <= 90) {
    lvl = "Diamante";
} else if (result <= 100) {
    lvl = "Lendário";
} else {
    lvl = "Imortal";
}

console.log("O Herói tem de saldo de " + result + " vitórias e está no nível " + lvl)

function getVicDef(vic, def){
    let result = vic - def
    return result
}