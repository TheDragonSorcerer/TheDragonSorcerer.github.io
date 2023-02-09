Copy and paste and sue ctrl f to change all of the ZZ to whatever you want

function DOIPZZ() {
  const ZZButton = document.createElement("button")
  document.body.appendChild(ZZButton)
  ZZButton.innerHTML = `Carron Crawler`;
  const ZZ1 = document.createElement('div');
  document.body.appendChild(ZZ1);
ZZ1.innerHTML = `Health 51`;
  const ZZArmor = document.createElement('div');
  document.body.appendChild(ZZArmor);
  ZZArmor.innerHTML = `Armor Class 13`;

  const ZZLine = document.createElement('hr');
  document.body.appendChild(ZZLine);
  

  ZZHealthMax = document.createElement('var');
  var ZZHealthMax = 51;
  ZZButton.onclick = function () {
    const ZZDamage = prompt("How much damage are you dealing?");
    ZZHealth = ZZHealthMax - ZZDamage;
    ZZHealthMax = ZZHealth;
    ZZ1.innerHTML = `Health: `+ ZZHealth;
    if (ZZHealthMax < 1) {
      ZZ1.innerHTML = `<div>Enemy killed</div> `;
      ZZArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}
