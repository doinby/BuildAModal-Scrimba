class App {
  constructor() {
    this.$modalToggleButtons = document.querySelectorAll(".modal-toggle");
    this.$modalOverlay = document.querySelector("#modal-overlay");

    this.$modalOverlay.style.display = 'none';
    this.toggleModalDisplay();
  }

  toggleModalDisplay() {
    this.$modalToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(this.$modalOverlay.style.display === 'none') {
                this.$modalOverlay.style.display = 'flex';
            } else this.$modalOverlay.style.display = 'none';
        })
    })
  }
}

new App();
