// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Project Modal
function showProject(button) {
  const title = button.getAttribute('data-title');
  const image = button.getAttribute('data-image');
  const tech = button.getAttribute('data-tech');
  const detail = button.getAttribute('data-detail');

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-image').src = image;
  document.getElementById('modal-tech').textContent = tech;
  document.getElementById('modal-description').textContent = detail;

  document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}
