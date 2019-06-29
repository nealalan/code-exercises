/* eslint-disable no-unused-vars, no-throw-literal*/

//     pikachu = new Pokemon('Pikachu', 250, 4);
function Pokemon(name, health = 1, attackBonus = 0) {
    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
}
/*it('should have a biteAttack and isDefeated function on its .prototpye',
it('the `biteAttack` method should return the sum of the `attackBonus` property + 2', () => {
    expect(pikachu.biteAttack()).toBe(6);*/
Pokemon.prototype.biteAttack = function () {
    return (this.attackBonus + 2);
}
/*    it('the `isDefeated` method returns `false` if the health property is >= 1', () => {
      expect(pikachu.isDefeated()).toBe(false);*/
Pokemon.prototype.isDefeated = function () {
    return !(this.health >= 1);
}
//expect(simulateBattle(pikachu, charizard, 'Pikachu')).toBe('Charizard Wins!');
const simulateBattle = (pokemon1, pokemon2, theOtherValue) => {

    // Not sure what to do in here or how the inputs relate to the outputs
    
    if (pokemon2.isDefeated) return `${pokemon1.name} Wins!`;
    if (pokemon1.isDefeated) return `${pokemon2.name} Wins!`;
    return theOtherValue;
}
