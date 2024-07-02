const username = document.getElementById("username");
const password = document.getElementById("password");
const buttonDiv = document.getElementById("buttonDiv");
let valid = false;
const onMouseOverHandeller = () => {
  if ((username.value==="srikanth")&&(password.value=="123")) {
    valid = true;
  } else {
    valid = false;
  }

  if(!valid){
    buttonDiv.classList.toggle('buttonRight');
  }
};

