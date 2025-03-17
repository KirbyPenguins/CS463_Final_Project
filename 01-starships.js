// Note: Your JavaScript code should be inside of functions


document.addEventListener('DOMContentLoaded', () => {
  let section = document.querySelector('#welcome');

    let image = document.createElement('img');
    image.src = 'Files/HW/hw1/images/kirby_faverty.jpg';
    image.alt = 'A picture of myself on the beach';
    image.width = 400;
    image.height = 300;
    image.style.borderRadius = '50%';
    image.style.display = 'block';
    image.style.margin = 'auto';
    

    let text = document.createElement('p');
    text.textContent = "My name is Kirby Faverty, I am currently studying computer science at Portland State University. I am a Junior and I am excited to learn more about web development in this class. I am from Haines, Alaska and I love to hike and explore the outdoors.";
    text.style.textAlign = 'center';
    text.style.fontSize = '20px';

    section.appendChild(image);
    section.appendChild(text);

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
      form.reset();
    });
});

const url = 'https://swapi.dev/api/starships/'
const app = document.querySelector('#starships');

// Create a container for the starships
const starshipsContainer = document.createElement('div');
starshipsContainer.style.display = 'flex';
starshipsContainer.style.flexWrap = 'wrap';
app.appendChild(starshipsContainer);

const fetchData = (url) => {
  // Retrieve the data from the API
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      data.results.forEach((starship) => {
        console.log(starship.name);
      // Call createSpaceshipComponent for each starship
        createSpaceshipComponent(starship);
      });
    })
    .catch(error => console.log(error));
};


// Use this function to create the individual spaceship component
const createSpaceshipComponent = (spaceship) => {
  let section = document.querySelector('#starships div');

  // Create a div to wrap the spaceship details
  const spaceshipDiv = document.createElement('div');
  spaceshipDiv.classList.add('spaceship-block'); // Add a class for styling
  spaceshipDiv.style.borderRadius = '10px'; // Rounded corners
  spaceshipDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  spaceshipDiv.style.padding = '16px'; // Add padding
  spaceshipDiv.style.margin = '16px'; // Add margin
  spaceshipDiv.style.width = '400px';
  spaceshipDiv.style.boxSizing = 'border-box';

  // Create a container for name and cost
  const nameCostContainer = document.createElement('div');
  nameCostContainer.style.display = 'flex';
  nameCostContainer.style.justifyContent = 'space-between';

  const name = document.createElement('p');
  name.textContent = spaceship.name;
  name.style.fontWeight = 'bold'; 

  const cost = document.createElement('p');
  cost.textContent = `Cost: ${spaceship.cost_in_credits} credits`;
  cost.style.fontWeight = 'bold'; // Bold the cost
  cost.style.textAlign = 'right'; // Align cost to the right

  nameCostContainer.appendChild(name);
  nameCostContainer.appendChild(cost);

  const manufacturer = document.createElement('p');
  manufacturer.textContent = `Manufactured by ${spaceship.manufacturer}`;

  const cargoSpeedContainer = document.createElement('div');
  cargoSpeedContainer.style.display = 'flex';
  cargoSpeedContainer.style.justifyContent = 'space-between';
  cargoSpeedContainer.style.paddingTop = '8px';
  cargoSpeedContainer.style.marginTop = '8px';

  const cargo = document.createElement('p');
  cargo.innerHTML = `Cargo Capacity: <span style="font-weight: bold;">${spaceship.cargo_capacity}</span>`;
  cargo.style.flex = '1';
  cargo.style.marginRight = '8px';
  cargo.style.textAlign = 'right'; // Align cargo to the right

  const speed = document.createElement('p');
  speed.innerHTML = `<span style="font-weight: bold;">${spaceship.max_atmosphering_speed}</span> max atmosphering speed`;
  speed.style.flex = '1';
  speed.style.marginLeft = '8px';
  speed.style.borderRight = '1px solid #ccc'; // Add border to the right
  speed.style.paddingRight = '8px';
  speed.style.textAlign = 'left'; // Align speed to the left

  cargoSpeedContainer.appendChild(speed);
  cargoSpeedContainer.appendChild(cargo);

  // Append details to the div
  spaceshipDiv.appendChild(nameCostContainer);
  spaceshipDiv.appendChild(manufacturer);
  spaceshipDiv.appendChild(cargoSpeedContainer);

  // Append the div to the section
  section.appendChild(spaceshipDiv);
};


const handleFormSubmit = (event) => {
  event.preventDefault();

  console.log("=======Form submission: =====")
  const nameInput = document.querySelector('#name');
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const date = document.querySelector('#date');
  const pronouns = document.querySelector('input[name="pronouns"]:checked');

  let errors = [];
  if (!nameInput.value) {
    errors.push('Name is required');
  }
  if (!username.value) {
    errors.push('Username is required');
  }
  if (!email.value) {
    errors.push('Email is required');
  }
  if (!password.value) { 
    errors.push('Password is required');
  }
  if (!date.value) {
    errors.push('Date is required');
  }
  if (!pronouns) {
    errors.push('Pronouns is required');
  }
  if (errors.length > 0) {
    alert("Form submission failed. Please correct the following errors: \n" + errors.join("\n"));
  } else {

  console.log("Name: " , nameInput.value);
  console.log("Username: ", username.value); 
  console.log("Email: ", email.value);
  console.log("Password: ", password.value);
  console.log("Date:", date.value);
  if (pronouns) {
    console.log("Preferred Pronouns: ", pronouns.value);
  } else {
    console.log("Preferred Pronouns: Not selected");
  }

  alert('Thanks for submitting the form!');
  }
}

// Call fetchData to retrieve and log the data
fetchData(url);