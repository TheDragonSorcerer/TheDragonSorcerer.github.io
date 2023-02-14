


/*function setPlayers() {
  var player1 = document.getElementById('player1').value;
  localStorage.player1Name = player1;
} */



function settings() {
  document.getElementById('settingsPage').classList.remove('hide');
}


function exitMenu() {
  document.getElementById('popup').classList.add('hide');
}



function DOIPGTTB () {
  const GTTBButton = document.createElement("button")
  document.body.appendChild(GTTBButton)
  GTTBButton.innerHTML = `Gorthok the Thunder Boar `;
  const GTTB1 = document.createElement('div');
  document.body.appendChild(GTTB1);
GTTB1.innerHTML = `Health 73`;
  const GTTBArmor = document.createElement('div');
  document.body.appendChild(GTTBArmor);
  GTTBArmor.innerHTML = `Armor Class 15`;

  const GTTBLine = document.createElement('hr');
  document.body.appendChild(GTTBLine);
  

  GTTBHealthMax = document.createElement('var');
  var GTTBHealthMax = 73;
  GTTBButton.onclick = function () {
    const GTTBDamage = prompt("How much damage are you dealing?");
    GTTBHealth = GTTBHealthMax - GTTBDamage;
    GTTBHealthMax = GTTBHealth;
    GTTB1.innerHTML = `Health: `+ GTTBHealth;
    if (GTTBHealthMax < 1) {
      GTTB1.innerHTML = `<div>Enemy killed</div> `;
      GTTBArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }

  
}



function DOIPWR() {

  const WRButton = document.createElement("button")
  document.body.appendChild(WRButton)
  WRButton.innerHTML = `Were Rat`;
  const WR1 = document.createElement('div');
  document.body.appendChild(WR1);
WR1.innerHTML = `Health 15`;
  const WRArmor = document.createElement('div');
  document.body.appendChild(WRArmor);
  WRArmor.innerHTML = `Armor Class 13`;

  const WRLine = document.createElement('hr');
  document.body.appendChild(WRLine);
  

  WRHealthMax = document.createElement('var');
  var WRHealthMax = 15;
  WRButton.onclick = function () {
    const WRDamage = prompt("How much damage are you dealing?");
    WRHealth = WRHealthMax - WRDamage;
    WRHealthMax = WRHealth;
    WR1.innerHTML = `Health: `+ WRHealth;
    if (WRHealthMax < 1) {
      WR1.innerHTML = `<div>Enemy killed</div> `;
      WRArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}



function DOIPHAR() {
  const HARButton = document.createElement("button")
  document.body.appendChild(HARButton)
  HARButton.innerHTML = `Harpy`;
  const HAR1 = document.createElement('div');
  document.body.appendChild(HAR1);
HAR1.innerHTML = `Health 38`;
  const HARArmor = document.createElement('div');
  document.body.appendChild(HARArmor);
  HARArmor.innerHTML = `Armor Class 11`;

  const HARLine = document.createElement('hr');
  document.body.appendChild(HARLine);
  

  HARHealthMax = document.createElement('var');
  var HARHealthMax = 38;
  HARButton.onclick = function () {
    const HARDamage = prompt("How much damage are you dealing?");
    HARHealth = HARHealthMax - HARDamage;
    HARHealthMax = HARHealth;
    HAR1.innerHTML = `Health: `+ HARHealth;
    if (HARHealthMax < 1) {
      HAR1.innerHTML = `<div>Enemy killed</div> `;
      HARArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}



function DOIPAK() {
  const AKButton = document.createElement("button")
  document.body.appendChild(AKButton)
  AKButton.innerHTML = `Ankeh`;
  const AK1 = document.createElement('div');
  document.body.appendChild(AK1);
AK1.innerHTML = `Health 39`;
  const AKArmor = document.createElement('div');
  document.body.appendChild(AKArmor);
  AKArmor.innerHTML = `Armor Class 14`;

  const AKLine = document.createElement('hr');
  document.body.appendChild(AKLine);
  

  AKHealthMax = document.createElement('var');
  var AKHealthMax = 39;
  AKButton.onclick = function () {
    const AKDamage = prompt("How much damage are you dealing?");
    AKHealth = AKHealthMax - AKDamage;
    AKHealthMax = AKHealth;
    AK1.innerHTML = `Health: `+ AKHealth;
    if (AKHealthMax < 1) {
      AK1.innerHTML = `<div>Enemy killed</div> `;
      AKArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}


function DOIPCC() {
  const CCButton = document.createElement("button")
  document.body.appendChild(CCButton)
  CCButton.innerHTML = `Carron Crawler`;
  const CC1 = document.createElement('div');
  document.body.appendChild(CC1);
CC1.innerHTML = `Health 51`;
  const CCArmor = document.createElement('div');
  document.body.appendChild(CCArmor);
  CCArmor.innerHTML = `Armor Class 13`;

  const CCLine = document.createElement('hr');
  document.body.appendChild(CCLine);
  

  CCHealthMax = document.createElement('var');
  var CCHealthMax = 51;
  CCButton.onclick = function () {
    const CCDamage = prompt("How much damage are you dealing?");
    CCHealth = CCHealthMax - CCDamage;
    CCHealthMax = CCHealth;
    CC1.innerHTML = `Health: `+ CCHealth;
    if (CCHealthMax < 1) {
      CC1.innerHTML = `<div>Enemy killed</div> `;
      CCArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}



function DOIPGhoul() {
  const GHButton = document.createElement("button")
  document.body.appendChild(GHButton)
  GHButton.innerHTML = `Ghoul`;
  const GH1 = document.createElement('div');
  document.body.appendChild(GH1);
  GH1.innerHTML = `Health 22`;
  const GHArmor = document.createElement('div');
  document.body.appendChild(GHArmor);
  GHArmor.innerHTML = `Armor Class 12`;

  const GHLine = document.createElement('hr');
  document.body.appendChild(GHLine);
  

  GHHealthMax = document.createElement('var');
  var GHHealthMax = 22;
  GHButton.onclick = function () {
    const GHDamage = prompt("How much damage are you dealing?");
    GHHealth = GHHealthMax - GHDamage;
    GHHealthMax = GHHealth;
    GH1.innerHTML = `Health: `+ GHHealth;
    if (GHHealthMax < 1) {
      GH1.innerHTML = `<div>Enemy killed</div> `;
      GHArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}

  


function DOIPAOT() {
  const AOTButton = document.createElement('button');
  document.body.appendChild(AOTButton);
  AOTButton.innerHTML = `Anchorite of Talos`;
  const AOT1 = document.createElement('div');
  document.body.appendChild(AOT1);
  AOT1.innerHTML = `Health 58`;
  const AOTArmor = document.createElement('div');
  document.body.appendChild(AOTArmor);
  AOTArmor.innerHTML = `Armor Class 13`;

  const AOTLine = document.createElement('hr');
  document.body.appendChild(AOTLine);
  

  AOTHealthMax = document.createElement('var');
  var AOTHealthMax = 58;
  AOTButton.onclick = function () {
    const AOTDamage = prompt("How much damage are you dealing?");
    AOTHealth = AOTHealthMax - AOTDamage;
    AOTHealthMax = AOTHealth;
    AOT1.innerHTML = `Health: `+ AOTHealth;
    if (AOTHealthMax < 1) {
      AOT1.innerHTML = `<div>Enemy killed</div> `;
      AOTArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}

function addPlayer() {
  document.getElementById("popup").classList.remove('hide');
  
  
}



function DOIPGianRat() {
  const GRButton = document.createElement('button');
  document.body.appendChild(GRButton);
  GRButton.innerHTML = `Giant Rat`;
  const GR1 = document.createElement('div');
  document.body.appendChild(GR1);
  GR1.innerHTML = `Health 7`;
  const GRArmor = document.createElement('div');
  document.body.appendChild(GRArmor);
  GRArmor.innerHTML = `Armor Class 12`;

  const GRLine = document.createElement('hr');
  document.body.appendChild(GRLine);
  

  GRHealthMax = document.createElement('var');
  var GRHealthMax = 7;
  GRButton.onclick = function () {
    const GRDamage = prompt("How much damage are you dealing?");
    GRHealth = GRHealthMax - GRDamage;
    GRHealthMax = GRHealth;
    GR1.innerHTML = `Health: `+ GRHealth;
    if (GRHealthMax < 1) {
      GR1.innerHTML = `<div>Enemy killed</div> `;
      GRArmor.innerHTML = '<div>Armor Class: 0</div>';
    }
  }  
}


function DOIPOrc() {
const orcButton = document.createElement('button');
  document.body.appendChild(orcButton);
  orcButton.innerHTML = `Orc`;
  const orc2 = document.createElement('div');
  document.body.appendChild(orc2);
  orc2.innerHTML = `Armor Class 13`;
  const orc1 = document.createElement('div');
  document.body.appendChild(orc1);
  orc1.innerHTML = `Health 15`;
  
  const orcLine = document.createElement('hr');
  document.body.appendChild(orcLine);


  
  orcHealthMax = document.createElement('var');
  var orcHealthMax = 15;
  orcButton.onclick = function () {
    const orcDamage = prompt("How much damage are you dealing?");
    orcHealth = orcHealthMax - orcDamage;
    orcHealthMax = orcHealth;
    orc1.innerHTML = `Health: `+ orcHealth;
    if (orcHealthMax < 1) {
      orc1.innerHTML = `<div>Enemy killed</div>`;
      orc2.innerHTML = '<div>Armor Class: 0</div>';
      
      
    }  
  }




}




function DOIP() { // Dragon of Icepire Peak button
document.getElementById("DOIP").classList.remove("DOIPHidden"); 
}