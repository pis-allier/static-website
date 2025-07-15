function toggleMore() {
  const moreText = document.getElementById('moreText');
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
  } else {
    moreText.style.display = 'none';
  }
}

function sendMessage() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message) {
    document.getElementById('formStatus').innerText = "Thank you, " + name + "! Your message has been 'sent' (just demo).";
  } else {
    document.getElementById('formStatus').innerText = "Please fill out all fields.";
  }

  // Prevent actual form submission
  return false;
}
