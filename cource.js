function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
    const menu=document.querySelector('.menu')
    menu.style.display='none'
}
function closesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
      const menu=document.querySelector('.menu')
    menu.style.display='inline'
}
const icons=document.querySelectorAll('.icon')
icons.forEach(icon => {
    icon.addEventListener('click',()=>{
        icons.forEach(i=>i.classList.remove('activeicon'));
        icon.classList.add('activeicon')
    });
});
const icons1=document.querySelectorAll('.icon1')
icons1.forEach(icon => {
    icon.addEventListener('click',()=>{
        icons1.forEach(i=>i.classList.remove('activeicon'));
        icon.classList.add('activeicon')
    });
});




// Get the up-arrow icon element
const upArrow = document.querySelector('.up-arrow');

// Function to handle the scroll event
window.addEventListener('scroll', function() {
    // Check the scroll position
    if (window.scrollY > window.innerHeight * 0.01) { // 1vh in pixels
        upArrow.style.display = 'block'; // Show the icon
    } else {
        upArrow.style.display = 'none'; // Hide the icon
    }
});

// Optional: Scroll to top function when the icon is clicked
upArrow.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});



