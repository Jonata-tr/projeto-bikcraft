// Ativadar LINKS DO MENU
const links = document.querySelectorAll('nav ul li a')

links.forEach(element => {
  const url = window.location.href;
  if(url.includes(element.href)) element.classList.add('active');
})

// Ativar items do ORÇAMENTO
const parametros = new URLSearchParams(location.search)

parametros.forEach(parametro => {
  const element = document.getElementById(parametro)
  if(element) element.checked = true
})

// ACCORDION

const perguntas = document.querySelectorAll('.perguntas button');

perguntas.forEach(element => {
  element.addEventListener("click", () => {
    const ariaControls = element.getAttribute('aria-controls');
    const resposta = document.getElementById(ariaControls);

    resposta.classList.toggle('ativa');

    resposta.classList.contains('ativa') ? element.setAttribute('aria-expanded', 'true') : element.setAttribute('aria-expanded', 'false');

  })
})