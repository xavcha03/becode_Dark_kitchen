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
      console.log(this.btnArr);
      this.btnArr.forEach((cursor) => {
        cursor
          .querySelector(".darkModeBtn__switch")
          .classList.toggle("darkModeBtn__switch--on");
      });
      this.status = !this.status;
      console.log("Switch dark-mode to " + this.getStatus());
    });
  }

  getStatus() {
    return this.status;
  }
}

let darkModeBtn = new Switch(document.querySelectorAll(".darkModeBtn"));
