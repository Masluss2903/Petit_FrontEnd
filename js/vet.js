var veterinario = {
  namevet: "Jonathan Acosta",
  usernamevet: "johnny.a",
  emailvet: "jonny.a@gmail.com",
  descriptionvet:
    "Cuento con 13 años de experiencia trabajando con perritos y me especializo en las razas grandes..."
  //petPic: "assets/PNG/new-02.png"
};

$(document).ready(function() {
  llenarInfo();
});

function llenarInfo() {
  setLabelText("#name-vet", veterinario.namevet);
  setLabelText("#username-vet", veterinario.usernamevet);
  setLabelText("#email-vet", veterinario.emailvet);
  setLabelText("#description-vet", veterinario.descriptionvet);
  // $("#petPic").attr("src", datoscartilla.petPic);
}

function setLabelText(labelId, labelText) {
  $(labelId).empty();
  $(labelId).append(labelText);
}
