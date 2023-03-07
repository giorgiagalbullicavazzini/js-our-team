'use strict';

////////////
// Functions
////////////

// A function to create a team member object containing their name, role and photo
function createTeamMember(fullName, memberRole, memberPhoto) {
  const teamMember = {
    name: fullName,
    role: memberRole,
    photo: memberPhoto,
  };

  return teamMember;
}

// A function to create an element
function elementCreation(elementType) {
  const element = document.createElement(elementType);

  return element;
}

// A function to add a class to an element
function addClass(element, className) {
  element.classList.add(className);
}

// A function to add a text to an element
function addText(element, text) {
  element.innerText = text;
}

////////////
// Main
////////////

// For each team member, we can create an object will all the information needed
const wayneBarnett = createTeamMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg');
const angelaCaroll = createTeamMember('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg');
const walterGordon = createTeamMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg');
const angelaLopez = createTeamMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg');
const scottEstrada = createTeamMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg');
const barbaraRamos = createTeamMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg');

// Creation of an array to contain the different staff members
const teamMembers = [wayneBarnett, angelaCaroll, walterGordon, angelaLopez, scottEstrada, barbaraRamos];

// Creation of DOM elements
const membersContainer = document.getElementById('team-members');
const row = elementCreation('div');
addClass(row, 'row');
addClass(row, 'gy-5');
addClass(row, 'mb-5');
membersContainer.append(row);

// To check if the code is correct, we can console print all the single information for every team member
// The first for loop goes through the entire array
// The second loop prints all the information needed
for(let i = 0; i < teamMembers.length; i++) {
  for(let key in teamMembers[i]) {
    console.log(teamMembers[i][key]);
  }

  // To transform our project into a visual one, we can then print all the information as strings in our DOM and transform the photo string into an image
  const col = elementCreation('div');
  addClass(col, 'col-4');

  const imageContainer = elementCreation('div');
  addClass(imageContainer, 'card');
  addClass(imageContainer, 'bg-white');
  addClass(imageContainer, 'border-0');
  imageContainer.innerHTML = `<img src="img/${teamMembers[i].photo}" class="card-img-top rounded-0" alt="Foto di ${teamMembers[i].name}">`;
  col.append(imageContainer);

  const teamMemberInfo = elementCreation('div');
  addClass(teamMemberInfo, 'card-body');

  const teamMemberName = elementCreation('h5');
  addClass(teamMemberName, 'card-title');
  teamMemberName.innerHTML = teamMembers[i].name;
  teamMemberInfo.append(teamMemberName);

  const teamMemberRole = elementCreation('p');
  addClass(teamMemberRole, 'card-text');
  teamMemberRole.innerHTML = teamMembers[i].role;
  teamMemberInfo.append(teamMemberRole);

  imageContainer.append(teamMemberInfo);
  row.append(col);
}