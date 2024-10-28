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


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  // Check if the window width is greater than 768px (or your defined breakpoint)
  if (window.innerWidth > 768) { // Only apply the shrink effect for larger screens
      if (window.scrollY > 50) {  // Adjust the value (50) to when you want the effect to start
          navbar.classList.add('shrink');
      } else {
          navbar.classList.remove('shrink');
      }
  } else {
      navbar.classList.remove('shrink'); // Ensure the shrink class is removed on smaller screens
  }
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


const messages = [
  "2025 Admission is Ongoing",
  "Admission for CSE IT is Open",
  "College remain college till Kartik 25"
];

let messageIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // Speed of typing
let erasingSpeed = 50; // Speed of erasing
let delayBetweenMessages = 2000; // Delay between showing new message

const typingTextElement = document.getElementById("typing-text");

// Function to make the text and background visible smoothly
function showText() {
  typingTextElement.style.opacity = 1; // Make the text visible
  typeMessage(); // Start typing the first message
}

function typeMessage() {
  // Show the background immediately
  typingTextElement.style.backgroundColor = 'orangered'; // Ensure background color is visible

  if (charIndex < messages[messageIndex].length) {
      // Add next character
      typingTextElement.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, typingSpeed);
  } else {
      // Start erasing after delay
      setTimeout(eraseMessage, delayBetweenMessages);
  }
}

function eraseMessage() {
  if (charIndex > 0) {
      // Remove last character
      typingTextElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseMessage, erasingSpeed);
  } else {
      // Move to next message and set background color to transparent
      typingTextElement.style.backgroundColor = 'transparent'; // Hide background after erasing
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeMessage, typingSpeed);
  }
}

// Start by showing the text after a short delay
setTimeout(showText, 1000); // Adjust delay as needed


window.onload = function() {
  const midSection = document.querySelector('.mid');
  midSection.style.opacity = 1; // Ensures it's visible immediately
};




// Function to check if an element is at least a certain percentage in the viewport
function isElementPartiallyInViewport(el, threshold) {
  const rect = el.getBoundingClientRect();
  const elementHeight = rect.height;
  const elementVisible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(0, rect.top));

  // Calculate the percentage of the element that is visible
  const visiblePercentage = (elementVisible / elementHeight) * 100;

  // Check if the visible percentage meets the threshold
  return visiblePercentage >= threshold;
}

// Function to add the visible class when scrolling
function checkVisibility() {
  const directorSection = document.querySelector('.dir');
  const admitSection = document.querySelector('.admit');
  const missionVideo = document.querySelector('.mission');
  const coursesSection = document.querySelector('.cources');
  const gallerySection = document.querySelector('.gallery');
  const activitySection = document.querySelector('.activity');
  const ourteamSection = document.querySelector('.ourteam');
  const subscribeSection = document.querySelector('.subscribe');
  const infoSection = document.querySelector('.info');
  const midSection = document.querySelector('.mid');
  const highlightsSection = document.querySelector('.highlights');

  

  

  // Check visibility with thresholds: 20% to show and 15% to hide for the director section
  if (isElementPartiallyInViewport(directorSection, 30)) {
      directorSection.classList.add('visible'); // Add visible class to director section
  } else if (!isElementPartiallyInViewport(directorSection, 15)) {
      directorSection.classList.remove('visible'); // Remove visible class when out of view
  }

  // Check visibility with thresholds: 50% to show and 15% to hide for the admit section
  if (isElementPartiallyInViewport(admitSection, 30)) {
      admitSection.classList.add('visible'); // Add visible class to admit section
  } else if (!isElementPartiallyInViewport(admitSection, 15)) {
      admitSection.classList.remove('visible'); // Remove visible class when out of view
  }

  // Check visibility for the mission video with a 20% threshold to show and 15% to hide
  if (isElementPartiallyInViewport(missionVideo, 30)) {
      missionVideo.classList.add('visible'); // Add visible class to the mission video
  } else if (!isElementPartiallyInViewport(missionVideo, 15)) {
      missionVideo.classList.remove('visible'); // Remove visible class when out of view
  }

   if (isElementPartiallyInViewport(coursesSection, 30)) {
      coursesSection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(coursesSection, 15)) {
      coursesSection.classList.remove('visible'); // Remove 'visible' class when out of view
  }

  if (isElementPartiallyInViewport(gallerySection, 30)) {
    gallerySection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(gallerySection, 15)) {
    gallerySection.classList.remove('visible'); // Remove 'visible' class when out of view
  }


  if (isElementPartiallyInViewport(activitySection, 30)) {
    activitySection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(activitySection, 15)) {
    activitySection.classList.remove('visible'); // Remove 'visible' class when out of view
  }

  if (isElementPartiallyInViewport(ourteamSection, 30)) {
    ourteamSection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(ourteamSection, 15)) {
    ourteamSection.classList.remove('visible'); // Remove 'visible' class when out of view
  }
  
  if (isElementPartiallyInViewport(subscribeSection, 30)) {
    subscribeSection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(subscribeSection, 15)) {
    subscribeSection.classList.remove('visible'); // Remove 'visible' class when out of view
  }


  
  if (isElementPartiallyInViewport(infoSection, 30)) {
    infoSection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(infoSection, 15)) {
    infoSection.classList.remove('visible'); // Remove 'visible' class when out of view
  }

  
  if (isElementPartiallyInViewport(midSection, 5)) {
    midSection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(midSection, 15)) {
    midSection.classList.remove('visible'); // Remove 'visible' class when out of view
  }


  if (isElementPartiallyInViewport(highlightsSection, 5)) {
    highlightsSection.classList.add('visible'); // Add 'visible' class to courses section
  } else if (!isElementPartiallyInViewport(highlightsSection, 15)) {
    highlightsSection.classList.remove('visible'); // Remove 'visible' class when out of view
  }





}

// Add scroll event listener
window.addEventListener('scroll', checkVisibility);

// Call the function on page load to check visibility
window.addEventListener('load', checkVisibility);



 // Simulate loading process (remove this part in production)
 window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none'; // Hide loading screen after content is loaded
});



function openForm() {
  document.getElementById('popupForm').style.display = 'flex';
}

function closeForm() {
  document.getElementById('popupForm').style.display = 'none';
}







let slideIndex = 1;
      showSlides();

      function showSlides() {
        const slides = document.querySelector(".slides");
        const dots = document.querySelectorAll(".dot");
        

        // Move to the next slide
        slideIndex++;
        if (slideIndex >= dots.length) {
          slideIndex = 0; // Loop back to the first slide
        }

        // Update slide position
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;

        // Remove active class from all dots
        dots.forEach((dot) => dot.classList.remove("active"));
        // Add active class to current dot
        dots[slideIndex].classList.add("active");

        // Change slide every 4 seconds
        setTimeout(showSlides, 4000);
      }

      function currentSlide(n) {
        slideIndex = n - 1; // Manually set current slide
        showSlides();
      }