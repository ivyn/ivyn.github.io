window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  btn=document.getElementById("scroll");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
    btn.addEventListener('click', () => window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }));
  } else {
    btn.style.display = "none";
  }
}