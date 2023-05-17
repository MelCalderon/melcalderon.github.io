function changeLanguage(lang) {
    var heading = document.getElementById('heading');
    
    if (lang === 'es') {
      heading.textContent = '¡Hola!';
    } else if (lang === 'en') {
      heading.textContent = 'Hello!';
    }
  }