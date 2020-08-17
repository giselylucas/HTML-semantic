function openModal() {
    var modal = document.getElementById("modal1");
    console.log(modal);
    modal.classList.add("show-modal");
  }
  
  function closeModal() {
    var modal = document.getElementById("modal1");
  
    modal.classList.remove("show-modal");
  }
  
  function expandOrCollapseCard() {
    var element = document.getElementById("card1");
    element.classList.toggle("hidden");
  }
  
  window.onclick = function (event) {
    var modal = document.getElementById("modal1");
    if (event.target === modal) {
      modal.classList.remove("show-modal");
    }
  };
  