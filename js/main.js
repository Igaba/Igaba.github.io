console.log("DevPortfolio JavaScript connected successfully!");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
});
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});
const projects = [
    {
        name: "ScholarTrack",
        description: "A full-stack academic dashboard for managing courses, assignments, and grades.",
        technologies: ["Python", "FastAPI", "JavaScript"],
        github: ""
    },
    {
        name: "DevPortfolio",
        description: "My personal responsive software engineering portfolio website.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Igaba/Igaba.github.io"
    }
];
const projectsContainer = document.querySelector("#projects-container");

projects.forEach(function (project) {
    const card = document.createElement("article");

    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.name;

    const description = document.createElement("p");
    description.textContent = project.description;

    const techContainer = document.createElement("div");
techContainer.classList.add("tech-container");

project.technologies.forEach(function (technology) {
    const badge = document.createElement("span");
    badge.classList.add("tech-badge");
    badge.textContent = technology;

    techContainer.appendChild(badge);
});

card.appendChild(title);
card.appendChild(description);
card.appendChild(techContainer);
if (project.github) {
    const githubLink = document.createElement("a");

    githubLink.href = project.github;
    githubLink.textContent = "View Code →";
    githubLink.classList.add("project-link");
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";

    card.appendChild(githubLink);
}
projectsContainer.appendChild(card);
});
const yearElement = document.querySelector("#current-year");

yearElement.textContent = new Date().getFullYear();