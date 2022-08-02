// card data
let cardsJSON = '[{"name": "Paolo Maldini", "jobTitle": "Front End Developer", "company": "Web Weavers", "experience": "3 years", "school": "University of Washington", "major": "Marketing", "email": "paolo@example.com", "linkedInUrl": "paolo.linkedinprofile.com", "codeLanguages": [ "HTML", "CSS", "JavaScript", "Node", "Express" ] }, { "name": "Barbara Bonansea", "jobTitle": "Software Engineer", "company": "Excellence in the Cloud", "experience": "12 years", "school": "University of Southern California", "major": "Computer Science", "email": "barbara@example.com", "linkedInUrl": "barbara.linkedinprofile.com", "codeLanguages": [ "HTML", "JavaScript", "C", "Go" ] }, { "name": "Javier Hernandez", "jobTitle": "User Experience Engineer", "company": "Web Sites and More", "experience": "5 years", "school": "Seattle University", "major": "Performing Arts", "email": "javier@example.com", "linkedInUrl": "javier.linkedinprofile.com", "codeLanguages": [ "HTML", "CSS" ] }, { "name": "Maribel Dominguez", "jobTitle": "Front End Engineer", "company": "Bits and Bytes", "experience": "6 years", "school": "University of Washington", "major": "Mechanical Engineering", "email": "maribel@example.com", "linkedInUrl": "maribel.linkedinprofile.com", "codeLanguages": [ "HTML", "CSS", "JavaScript", "React", "Vue", "Redux" ] } ]'

// convert from JSON to JavaScript
let cards = JSON.parse(cardsJSON);

// Loop through data with string templating
cards.forEach(element => {
  let card = document.createElement("div"); // creates card
  card.classList.add("template-hook");
  card.innerHTML = `
<main class="main">
  <img src="img/headshot.jpg" alt="headshot" />
  <h1>${element.name}</h1>
  <h2>${element.jobTitle}</h2>
</main>
<aside>
  <p><span class="info">Company:</span> ${element.company}</p>
  <p><span class="info">Experience:</span> ${element.experience}</p>
  <p><span class="info">School:</span> ${element.school}</p>
  <p><span class="info">Major:</span> ${element.major}</p>
  <p><span class="info">Email:</span> ${element.email}</p>
  <div class="linkedin">
      <img src="img/linkedin.svg" alt="Linkedin logo">
      <p>${element.linkedInUrl}</p>
  </div>
</aside>`

// Appends each card to the HTML body
let body = document.querySelector("body");
body.append(card)
});