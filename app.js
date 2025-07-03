// Example projects array
const projects = [
  {
    title: "Project One",
    description: "A short description of project one.",
    link: "https://github.com/yourusername/project-one"
  },
  {
    title: "Project Two",
    description: "What makes this project cool?",
    link: "https://github.com/yourusername/project-two"
  }
];

function renderProjects() {
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = projects.map(project => `
    <div class="project">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);

// Simple contact form handler (no backend yet)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-response').textContent = "Thank you for reaching out!";
  this.reset();
});
