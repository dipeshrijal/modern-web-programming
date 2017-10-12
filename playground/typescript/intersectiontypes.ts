interface Kicker {
    kick(speed : number) : number;
}

interface Puncher {
    punch(power: number) : number;
}

interface  JudoChop {
    chop(chopper: number) : number;
}

type KickPuncher = Kicker & Puncher & JudoChop; // does not give error
// type KickPuncher = KickPuncher & Puncher; // this produces error as the chop method is not a typw of kick boxer
function attack(warrior: KickPuncher) {
    warrior.kick(102);
    warrior.punch(412);
    warrior.chop(122);
}