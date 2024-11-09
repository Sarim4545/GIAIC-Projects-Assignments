var togglebutton = document.getElementById('toggle-skills');
var skillsContent = document.getElementById('skills-content');
togglebutton.addEventListener('click', function () {
    if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
        skillsContent.style.display = 'block'; // Show content
    }
    else {
        skillsContent.style.display = 'none'; // Hide content
    }
});
