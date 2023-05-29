const links = document.querySelectorAll('nav ul li a')

links.forEach(element  => {
  if(element.href == window.location.href) element.classList.toggle('active')
})

// Ativador de aba ativa