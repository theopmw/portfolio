// Skills
// let skills = [
//     "HTML", "CSS", "JavaScript", "Python", "Git", "GitHub",
//     "Django", "Flask", "Materialize", "Bootstrap", "Sass",
//     "jQuery", "Stripe", "VSCode", "Heroku", "Slack",
//     "AWS", "PostgreSQL", "MongoDB", "Balsamiq"
// ];

let languages = [
    "HTML", "CSS", "JavaScript", "Python"
]

// set variables
let imgType = ".png";
let imgs_skills = "static/img/skills/";
let ul_languages = "<ul class='list-group list-group-horizontal'>";

// slice languages array 
let languagesRow1 = languages.slice(0, 4);

// row 1
let row1 = ul_languages;S
languagesRow1.map(language => {
    row1 += `<li class="list-group-item"><div><img src="${imgs_skills}${skill.toLowerCase()}${imgType}" alt="${language}" lazyload="on"><h1>${language}</h1></div></li>`;
});
row1 += "</ul>";

// append all rows to #skills
let skillsDiv = document.getElementById("skills");
skillsDiv.innerHTML += (row1);