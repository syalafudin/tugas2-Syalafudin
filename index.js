

function tampilkanData() {
  const nama = document.getElementById("nama-profil").textContent;
  const role = document.getElementById("role-profil").textContent;
  const availability = document.getElementById("availability-profil").textContent;
  const usia = document.getElementById("usia-profil").textContent;
  const lokasi = document.getElementById("lokasi-profil").textContent;
  const pengalaman = document.getElementById("pengalaman-profil").textContent;
  const email = document.getElementById("email-profil").textContent;

  document.getElementById("nama-input").value = nama;
  document.getElementById("role-input").value = role;
  document.getElementById("availability-input").value = availability;
  document.getElementById("usia-input").value = usia;
  document.getElementById("lokasi-input").value = lokasi;
  document.getElementById("pengalaman-input").value = pengalaman;
  document.getElementById("email-input").value = email;
}

window.onload = tampilkanData;

function simpanForm(event) {
  event.preventDefault();

  const nama = document.getElementById("nama-input").value;
  const role = document.getElementById("role-input").value;
  const availability = document.getElementById("availability-input").value;
  const usia = document.getElementById("usia-input").value;
  const lokasi = document.getElementById("lokasi-input").value;
  const pengalaman = document.getElementById("pengalaman-input").value;
  const email = document.getElementById("email-input").value;

  document.getElementById("nama-profil").textContent = nama;
  document.getElementById("role-profil").textContent = role;
  document.getElementById("availability-profil").textContent = availability;
  document.getElementById("usia-profil").textContent = usia;
  document.getElementById("lokasi-profil").textContent = lokasi;
  document.getElementById("pengalaman-profil").textContent = pengalaman;
  document.getElementById("email-profil").textContent = email;
}

document.querySelector("form").addEventListener("submit", simpanForm);

const editButton = document.getElementById('edit-btn');
const formSection = document.getElementById('form');

editButton.addEventListener('click', () => {
  formSection.style.display = 'block';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nama = document.querySelector('#nama-input').value;
  const role = document.querySelector('#role-input').value;
  const availability = document.querySelector('#availability-input').value;
  const usia = document.querySelector('#usia-input').value;
  const lokasi = document.querySelector('#lokasi-input').value;
  const pengalaman = document.querySelector('#pengalaman-input').value;
  const email = document.querySelector('#email-input').value;

  document.querySelector('#nama-profil').textContent = nama;
  document.querySelector('#role-profil').textContent = role;
  document.querySelector('#availability-profil').textContent = availability;
  document.querySelector('#usia-profil').textContent = usia;
  document.querySelector('#lokasi-profil').textContent = lokasi;
  document.querySelector('#pengalaman-profil').textContent = pengalaman;
  document.querySelector('#email-profil').textContent = email;

  formSection.style.display = 'none';
  profileSection.style.display = 'block';
});