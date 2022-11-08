const progressBar = document.querySelector('.progress_bar');
progressBar.style.display = "none";


//fonction
let handleScroll = () => {
  progressBar.style.display = "block";
  const height = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const position = window.pageYOffset;
  
  const trackLength = height - windowHeight;
  
  const percentage = Math.floor((position / trackLength) * 100);
  
  
  progressBar.style.right = 100 - percentage + "%"
  
}


//Détection du scroll
window.addEventListener('scroll',handleScroll);
 