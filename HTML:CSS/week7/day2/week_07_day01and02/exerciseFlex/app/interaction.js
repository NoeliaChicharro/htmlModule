/* OPEN AND DISPLAYS EXAMPLES BY CHANGING CLASS NAME */
document.querySelectorAll('.exercise button').forEach(element => {
  element.addEventListener('click', (e)=>{
    e.target.classList.toggle('showing');
    e.target.parentElement.querySelector('.container').classList.toggle('active')
  })
});
