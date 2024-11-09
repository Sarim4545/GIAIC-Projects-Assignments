// Career Objective Toggle
var toggleObjective = document.getElementById('toggle-objective');
var objectiveContent = document.getElementById('objective-content');
toggleObjective.addEventListener('click', function () {
    objectiveContent.style.display = (objectiveContent.style.display === 'none' || objectiveContent.style.display === '') ? 'block' : 'none';
});
// Certifications Toggle
var toggleCertification = document.getElementById('toggle-certification');
var certificationContent = document.getElementById('certification-content');
toggleCertification.addEventListener('click', function () {
    certificationContent.style.display = (certificationContent.style.display === 'none' || certificationContent.style.display === '') ? 'block' : 'none';
});
// Personal Info Toggle
var togglePersonalInfo = document.getElementById('toggle-personal-info');
var personalInfoContent = document.getElementById('personal-info-content');
togglePersonalInfo.addEventListener('click', function () {
    personalInfoContent.style.display = (personalInfoContent.style.display === 'none' || personalInfoContent.style.display === '') ? 'block' : 'none';
});
// Education Toggle
var toggleEducation = document.getElementById('toggle-education');
var educationContent = document.getElementById('education-content');
toggleEducation.addEventListener('click', function () {
    educationContent.style.display = (educationContent.style.display === 'none' || educationContent.style.display === '') ? 'block' : 'none';
});
// Skills Toggle
var toggleSkills = document.getElementById('toggle-skills');
var skillsContent = document.getElementById('skills-content');
toggleSkills.addEventListener('click', function () {
    skillsContent.style.display = (skillsContent.style.display === 'none' || skillsContent.style.display === '') ? 'block' : 'none';
});
// Work Experience Toggle
var toggleWork = document.getElementById('toggle-Work');
var workContent = document.getElementById('Work-content');
toggleWork.addEventListener('click', function () {
    workContent.style.display = (workContent.style.display === 'none' || workContent.style.display === '') ? 'block' : 'none';
});
