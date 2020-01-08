const spells = ['patron', 'pactOfBoon', 'burningHands', 'charmPerson', 'command', 'hex', 'witchBolt', 'blindDeaf', 'crownOfMadness', 'mirrorImage', 'scorchingRay', 'counterspell', 'dispelMagic', 'fireball', 'fly', 'stinkingCloud', 'dimensionDoor', 'fireShield', 'wallOfFire', 'flameStrike', 'hallow', 'eldritchBlast', 'mageHand', 'mending', 'shillelagh', 'thunderclap', 'trueStrike']


function spellVisibility(spellId) {
  for (i = 0; i < spells.length; i++) {
    let spell = document.getElementById(spellId)
    if (spell.style.display === "none") {
      spell.style.display = "block";
    } else {
      spell.style.display = "none";
    }
  }
}


