// Data
const names = document.getElementById("name");
const email = document.getElementById("email");
const btnContinue = document.querySelector(".btn-continue");
const form = document.getElementById("Multi-Step-Form");
const steps = ['.container-perInfo', '.container-interested', '.container-summary'];
const checkBoxItems = ['#softwareDevelopment','#userExperience', '#graphicDesign'];
const summaryName = document.getElementById('summary-name');
const summaryEmail = document.getElementById('summary-email');
const interestsList = document.getElementById('user-interested');

let index = 1;
const formData = {
  name : '',
  email: '',
  interests: [],
}

// Functions
// FIRST STEP:

const saveNameAndEmail = () => {
  formData.name = names.value;
  formData.email = email.value;
}

const validateNames = (names) => {
  return String(names)
    .toLocaleLowerCase()
    .match(/^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/);
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


const saveFirstStep = () => {
  if (!validateNames(names.value) || !validateEmail(email.value)) {
    throw new Error('The data is invalid');
  }
  saveNameAndEmail();
}


// SECOND STEP:
const saveSecondStep = () => {
  if (formData.interests.length === 0){
    throw new Error('You have to select at least one interest.');
  }
  btnContinue.innerHTML = 'Confirm';
}

const addItemSelected = (item) => {
  item.classList.add('active-item');
  const checkBoxId = item.getAttribute("for");
  const itemSelected = document.getElementById(checkBoxId);
  if (formData.interests.includes(itemSelected.value)) {
    return;
  }
  formData.interests.push(itemSelected.value);
}

// THIRD STEP

const showSummary = () => {
  summaryName.innerHTML = formData.name;
  summaryEmail.innerHTML = formData.email;
  for (const interest of formData.interests) {
    const newInterest = document.createElement('li');
    newInterest.innerHTML = interest;
    interestsList.appendChild(newInterest);
  } 
}



const onChangeStep = () => {
  console.log(index);
  try {
    if (index === 1){
      saveFirstStep();
      updateCurrentStepNumber(index+1);
      displayCurrentStep(index);
      displayActiveStep(index);
    }
    if (index === 2){
      saveSecondStep();
      showSummary();
      updateCurrentStepNumber(index+1);
      displayCurrentStep(index);
      displayActiveStep(index);
    }
    if (index === 3){
      alert('Data submitted!')
      btnContinue.disabled = true;
    }
    index++;    
  } catch (error) {
    alert(error.message);
  }
};


function displayCurrentStep(currentIndex) {
  steps.forEach((selector, index) => {
    const displayProperty = currentIndex === index ? "block" : "none";
    document.querySelector(selector).style.display = displayProperty;
  });
}

const displayActiveStep = (currentIndex) => {
  const stepDots = document.querySelectorAll(".dot");
  stepDots[currentIndex].classList.add("active");
};

const updateCurrentStepNumber = (currentStep) => {
  const stepNumber = document.getElementById("step");
  stepNumber.innerHTML = currentStep;
};

// Events
const addLabelsEvents = () => {
  const labels = document.querySelectorAll(".item-interested");
  labels.forEach((label) => {
    label.addEventListener("click", () => addItemSelected(label));
  })
}
btnContinue.addEventListener("click", () => onChangeStep());
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

addLabelsEvents();
