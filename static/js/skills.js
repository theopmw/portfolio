// Skills
// let skills = [
//     "HTML", "CSS", "JavaScript", "Python", "Git", "GitHub",
//     "Django", "Flask", "Materialize", "Bootstrap", "Sass",
//     "jQuery", "Stripe", "VSCode", "Heroku", "Slack",
//     "AWS", "PostgreSQL", "MongoDB", "Balsamiq"
// ];

let languages = [
    "HTML", "CSS", "JavaScript", "Python"
];

// set variables
let imgType = ".png";
let imgs_skills = "static/img/skills/";
let ul_languages = "<div class='row'><div class='col-12'><ul class='list-group list-group-horizontal'>";

// slice languages array 
let languagesRow1 = languages.slice(0, 4);

// row 1
let row1 = ul_languages;
languagesRow1.map(language => {
    row1 += `<li class="list-group-item skills-item col-3 p-0"><div><img src="${imgs_skills}${language.toLowerCase()}${imgType}" alt="${language}" lazyload="on"><h3>${language}</h3></div></li>`;
});
row1 += "</ul></div></div>";

// append all rows to #skills
let skillsDiv = document.getElementById("skills");
skillsDiv.innerHTML += (row1);