class SpaService {
  constructor() {
    this.defaultPage = "home";
  }

  init() {
    this.pages = document.querySelectorAll(".page");
    this.navItems = document.querySelectorAll(".tabbar a");
    this.pageChange();
  }

  // hide all pages
  hideAllPages() {
    for (let page of this.pages) {
      page.style.display = "none";
    }
  }

  // show page or tab
  showPage(pageId) {
    this.hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    this.setActiveTab(pageId);

    if (pageId === 'home') {
      document.querySelector('#signText').innerHTML = /*html*/ `<p>At</p> <h1>Majas Livingroom</h1>`
    } else {
      let signAndText = document.querySelector('#signText');

      signAndText.innerHTML = /*html*/ `<p>Back to</p> <h1>Livingroom</h1>`;
      // signAndText.style.animation = 'fadeIn 8s';
      signAndText.style.cursor = "pointer";
      document.querySelector(`#${pageId}`).style.minHeight = '100vh';

    }
  }

  // sets active tabbar/ menu item
  setActiveTab(pageId) {
    for (let navItem of this.navItems) {
      if (`#${pageId}` === navItem.getAttribute("href")) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
  }

  // navigate to a new view/page by changing href
  navigateTo(pageId) {
    window.location.href = `#${pageId}`;
  }

  // set default page or given page by the hash url
  // function is called 'onhashchange'
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }

    // if (window.location.hash === '#home') {
    //   document.querySelector('#signText').innerHTML = /*html*/ `<p>At</p> <h1>Majas Livingroom</h1>`
    // } else {
    //   let signAndText = document.querySelector('#signText');

    //   signAndText.innerHTML = /*html*/ `<p>Back to</p> <h1>Livingroom</h1>`;
    //   // signAndText.style.animation = 'fadeIn 8s';
    //   signAndText.style.cursor = "pointer";



    // }

    this.showPage(page);
  }

  // show and hide tabbar
  hideTabbar(hide) {
    let tabbar = document.querySelector('#tabbar');
    if (hide) {
      tabbar.classList.add("hide");
    } else {
      tabbar.classList.remove("hide");
    }
  }
}

const _spaService = new SpaService();
export default _spaService;