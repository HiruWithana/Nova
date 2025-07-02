function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

function openModal(e) {
  e.preventDefault();
  document.getElementById("newsletterModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("newsletterModal").classList.add("hidden");
}
