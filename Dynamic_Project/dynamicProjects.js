document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            title: 'Student Management System',
            description: 'Developed a full-stack Student Management system website using MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented features such as Course Information, Student Information, and Instructor Information. Users can add, edit, and delete courses, students, and instructors. And also added Virtual Library for the students to access the study materials online.',
            link: 'https://github.com/Ayankhatri06/Student-Management-System'
        },
        {
            title: 'To - Do List website',
            description: 'Build a Basic To-Do List website using HTML, CSS, and JavaScript. Users can add, edit, and delete tasks. Tasks can be marked as completed and can be filtered by All, Active, and Completed tasks.',
            link: 'https://github.com/Ayankhatri06/To-Do-List-App'
        },
        {
            title: 'Courence Converter',
            description: 'Developed a Currency Converter website using HTML, CSS, and JavaScript. Users can convert the currency from one country to another. Implemented features such as Currency Exchange Rate, Currency Conversion, and Currency Symbols.',
            link: 'https://github.com/Ayankhatri06/Currency-Converter'
        }
    ];


    const projectList = document.getElementById('project-list');

    function generateProjectElement(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const titleElement = document.createElement('h3');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const linkElement = document.createElement('a');
        linkElement.textContent = 'View Project';
        linkElement.href = project.link;
        linkElement.target = '_blank';

        projectElement.appendChild(titleElement);
        projectElement.appendChild(descriptionElement);
        projectElement.appendChild(linkElement);

        return projectElement;
    }

    function displayProjects() {
        projectList.innerHTML = ''; // Clear existing content

        projects.forEach(project => {
            const projectElement = generateProjectElement(project);
            projectList.appendChild(projectElement);
        });
    }

    displayProjects();

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validation code will go here

        // Dummy success message
        formMessage.innerHTML = '<p>Message sent successfully!</p>';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Git',


    ];

    const skillsSection = document.getElementById('skills');

    function generateSkillsList(skillsArray) {
        const ul = document.createElement('ul');

        skillsArray.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            ul.appendChild(li);
        });

        return ul;
    }

    function displaySkills() {
        const skillsList = generateSkillsList(skills);
        skillsSection.innerHTML = ''; // Clear existing content
        skillsSection.appendChild(skillsList);
    }

    displaySkills();
});
