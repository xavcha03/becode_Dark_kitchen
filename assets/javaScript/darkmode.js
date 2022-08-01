class Switch {
  constructor(domElementArr) {
    this.status = false; //Darkmode off
    this.btnArr = [...domElementArr].map((darkModeSwitchElt) => {
      this.addEvent(darkModeSwitchElt);
      return darkModeSwitchElt;
    });
  }

  //Ajoute un event pour détecter le clic sur le boutton dans le DOM
  addEvent(elt) {
    elt.addEventListener("click", (e) => {
      e.preventDefault();
      //toggle off<->on de tous les switch
      this.btnArr.forEach((cursor) => {
        cursor
          .querySelector(".darkModeBtn__switch")
          .classList.toggle("darkModeBtn__switch--on");
      });
      this.status = !this.status;
      console.log("Switch dark-mode to " + this.getStatus());
      //get the body elemtn
      let body = document.querySelector("body");
      body.classList.toggle("darkmode--on");
    });
  }

  getStatus() {
    return this.status;
  }
}

let darkMode = new Switch(document.querySelectorAll(".darkModeBtn"));
