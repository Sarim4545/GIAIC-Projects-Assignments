const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsContent = document.getElementById('skills-content') as HTMLElement;

togglebutton.addEventListener('click', () => {
    // Check if the content is already displayed using 'display' property
    if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
        skillsContent.style.display = 'block';  // Show content by setting display to block
        skillsContent.classList.add('show');    // Also add 'show' class for consistency (optional)
    } else {
        skillsContent.style.display = 'none';   // Hide content by setting display to none
        skillsContent.classList.remove('show'); // Remove 'show' class
    }
});
