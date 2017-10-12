// type KickPuncher = KickPuncher & Puncher; // this produces error as the chop method is not a typw of kick boxer
function attack(warrior) {
    warrior.kick(102);
    warrior.punch(412);
    warrior.chop(122);
}
