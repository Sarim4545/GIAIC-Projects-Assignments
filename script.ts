// Career Objective Toggle
const toggleObjective = document.getElementById('toggle-objective') as HTMLButtonElement;
const objectiveContent = document.getElementById('objective-content') as HTMLElement;
toggleObjective.addEventListener('click', () => {
    objectiveContent.style.display = (objectiveContent.style.display === 'none' || objectiveContent.style.display === '') ? 'block' : 'none';
});

// Certifications Toggle
const toggleCertification = document.getElementById('toggle-certification') as HTMLButtonElement;
const certificationContent = document.getElementById('certification-content') as HTMLElement;
toggleCertification.addEventListener('click', () => {
    certificationContent.style.display = (certificationContent.style.display === 'none' || certificationContent.style.display === '') ? 'block' : 'none';
});

// Personal Info Toggle
const togglePersonalInfo = document.getElementById('toggle-personal-info') as HTMLButtonElement;
const personalInfoContent = document.getElementById('personal-info-content') as HTMLElement;
togglePersonalInfo.addEventListener('click', () => {
    personalInfoContent.style.display = (personalInfoContent.style.display === 'none' || personalInfoContent.style.display === '') ? 'block' : 'none';
});

// Education Toggle
const toggleEducation = document.getElementById('toggle-education') as HTMLButtonElement;
const educationContent = document.getElementById('education-content') as HTMLElement;
toggleEducation.addEventListener('click', () => {
    educationContent.style.display = (educationContent.style.display === 'none' || educationContent.style.display === '') ? 'block' : 'none';
});

// Skills Toggle
const toggleSkills = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsContent = document.getElementById('skills-content') as HTMLElement;
toggleSkills.addEventListener('click', () => {
    skillsContent.style.display = (skillsContent.style.display === 'none' || skillsContent.style.display === '') ? 'block' : 'none';
});

// Work Experience Toggle
const toggleWork = document.getElementById('toggle-Work') as HTMLButtonElement;
const workContent = document.getElementById('Work-content') as HTMLElement;
toggleWork.addEventListener('click', () => {
    workContent.style.display = (workContent.style.display === 'none' || workContent.style.display === '') ? 'block' : 'none';
});
