function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

function openModal(e) {
  e.preventDefault();
  const modal = document.getElementById("newsletterModal");
  modal.classList.remove("hidden");

  // Close if clicking outside the white box
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  document.getElementById("newsletterModal").classList.add("hidden");
}
