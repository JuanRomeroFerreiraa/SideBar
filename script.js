function clicar() {
    const sidebar = document.querySelector('nav');

    const menuBtn = document.querySelector('.riscos');

    menuBtn.onclick = ()=>{
        sidebar.classList.toggle('active')
    }
  }