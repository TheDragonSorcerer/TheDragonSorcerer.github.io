
//write everyhting below this line




function campBattles() {  
  const beta = document.getElementById('beta');
  const startPar1 = document.getElementsByClassName('startPar1');
  const startGame = document.getElementById('StartGame');
  const channelog = document.getElementById('channelog');
  const startParAdult = document.getElementById('startParAdult');
  const origonalBattle = document.getElementById('origonalBattle');
  const battleButtons = document.getElementById('battleButtons');
  const firstPar = document.getElementById('firstPar');

  
  firstPar.remove();
  battleButtons.remove();
  origonalBattle.remove();

  beta.remove();
  startGame.remove();
  channelog.remove();
  startParAdult.remove();

  var presetBattle =  document.getElementById("presetBattle");
  presetBattle.classList.remove("campaignBattlePageHidden");
  presetBattle.classList.add("CampaignBattleVisible");
  
  
  
 
}







//notifications
function AllowNotifs() {
  Notification.requestPermission().then(perm => {
  if (perm === "granted") {
    new Notification("Test Notification", {
      icon: "Dog.webp",
      body: "Congratulations, notifications are allowed!",
      playSound: true
      
      })
    }
  })
}

function presetBattles() {
    document.getElementsByClassName("campaignBattle").style.opacity = 100;

  
}





function creategoblin() {

  const buttonForGob = document.createElement('button')  
  buttonForGob.setAttribute("Id", "GobDamage");
  document.body.appendChild(buttonForGob);
  buttonForGob.innerHTML = `Goblin`;
  const gob2 = document.createElement('div');
  document.body.appendChild(gob2);
  const gob = document.createElement('div');
  document.body.appendChild(gob)
  gob.innerHTML = `Health: 7 `;
  gob2.innerHTML = `Armor Class: 15`;
  const spaceForGob = document.createElement('hr');
  document.body.appendChild(spaceForGob);

    
  
  gobHealthMax = document.createElement('var');
  var gobHealthMax = 7;
  buttonForGob.onclick = function () {
    const gobDamage = prompt("How much damage are you dealing?");
    gobHealth = gobHealthMax - gobDamage;
    gobHealthMax = gobHealth;
    gob.innerHTML = `Health: `+ gobHealth;
    if (gobHealthMax < 1) {
      gob.innerHTML = `<div>Enemy killed</div>`;
      gob2.innerHTML = '<div>Armor Class: 0</div>';
      
      
    }  
  }
  


}

function createogre() {

  const buttonForOg = document.createElement('button');
  document.body.appendChild(buttonForOg);
  buttonForOg.innerHTML = `Ogre`;
  const org2 = document.createElement('div');
  document.body.appendChild(org2);
  org2.innerHTML = `Armor Class 11`;
  const org = document.createElement('div');
  document.body.appendChild(org);
  org.innerHTML = `Health: 59 `;
  const spaceForOg = document.createElement('hr');
  document.body.appendChild(spaceForOg);


  orgHealthMax = document.createElement('var');
  var orgHealthMax = 59;
  buttonForOg.onclick = function () {
    const orgDamage = prompt("How much damage are you dealing?");
    orgHealth = orgHealthMax - orgDamage;
    orgHealthMax = orgHealth;
    org.innerHTML = `Health: `+ orgHealth;
    if (orgHealthMax < 1) {
      org.innerHTML = `<div>Enemy killed</div>`;
      org2.innerHTML = '<div>Armor Class: 0</div>';
      }
      
  }  

  
}

function createorc() {


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

function createzombie() {

  const zomButton = document.createElement('button');
  document.body.appendChild(zomButton);
  zomButton.innerHTML = `Zombie`;

  const zomArmor = document.createElement('div');
  document.body.appendChild(zomArmor);
  zomArmor.innerHTML = `Armor Class 8`;
  const zom1 = document.createElement('div');
  document.body.appendChild(zom1);
  zom1.innerHTML = `Health 22`;
  
  const zomLine = document.createElement('hr');
  document.body.appendChild(zomLine);

   
  zomHealthMax = document.createElement('var');
  var zomHealthMax = 22;
  zomButton.onclick = function () {
    const zomDamage = prompt("How much damage are you dealing?");
    zomHealth = zomHealthMax - zomDamage;
    zomHealthMax = zomHealth;
    zom1.innerHTML = `Health: `+ zomHealth;
    if (zomHealthMax < 1) {
      zom1.innerHTML = `<div>Enemy killed</div>`;
      zomArmor.innerHTML = '<div>Armor Class: 0</div>';
      
      
    }  
  }
  



  
}


function createAchoriteOfTalos() {
  
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
      AOT1.innerHTML = `<div>Enemy killed</div>) `;
      AOTArmor.innerHTML = '<div>Armor Class: 0</div>';
    }  
  }
}
