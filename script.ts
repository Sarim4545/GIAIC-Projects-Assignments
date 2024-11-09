const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsContent = document.getElementById('skills-content') as HTMLElement;

togglebutton.addEventListener('click', () => {
    // Check if the content is already displayed using 'display' property
    if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
        skillsContent.style.display = 'block';  
        skillsContent.classList.add('show');    
    } else {
        skillsContent.style.display = 'none';   
        skillsContent.classList.remove('show'); 
    }
});
