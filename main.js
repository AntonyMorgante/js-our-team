/* Viene fornito un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team. 
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
BONUS:
Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, 
il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente. */ 

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

const teamContainer = document.querySelector(".team-container");
for (let i=0; i<team.length;i++){
  teamContainer.innerHTML += 
  `<div class="team-card">
    <div class="card-image">
      <img
      src="img/` + team[i][`image`]
      + `"alt=` + team[i][`name`] + 
      `/>
    </div>
    <div class="card-text">
      <h3>` + team[i][`name`] + `</h3>
      <p>` + team[i][`role`] + `</p>
    </div>
  </div>`;
}

function createCard(name,role,image){
  teamContainer.innerHTML += 
  `<div class="team-card">
    <div class="card-image">
      <img
      src="` + image
      + `"alt="` + name + 
      `"/>
    </div>
    <div class="card-text">
      <h3>` + name + `</h3>
      <p>` + role + `</p>
    </div>
  </div>`;
}



function fetchName(){
  let name = document.getElementById("name").value;
  return name;
}

function fetchRole(){
  let role = document.getElementById("role").value;
  return role;
}

function fetchImage(){
  let image = document.getElementById("image").value;
  return image;
}


function addMemberCard(){
  let name = fetchName();
  if (name == ""){
    alert("Non hai inserito nessun nome!");
    return;
  }
  let role = fetchRole();
  if (role == ""){
    alert("Non hai inserito nessun ruolo!");
    return;
  }
  let image = fetchImage();
  if (image == ""){
    alert("Non hai inserito nessun indirizzo immagine!");
    return;
  }
  createCard(name,role,image);
}


const addMember = document.getElementById("addMemberButton");
addMember.addEventListener("click", addMemberCard);
