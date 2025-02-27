
/* Initialize color theme by user preference */
const prefersLight = () => window.matchMedia("(prefers-color-scheme: light)").matches;

let currentThemeSetting = prefersLight() ? 'light' : 'dark';

const setTheme = (mode) => {
  const html = document.getElementsByTagName('html')[0];
  if (!html) {
    return;
  }

  currentThemeSetting = mode;
  html.dataset['theme'] = currentThemeSetting;
}
setTheme(currentThemeSetting);

/* Handles theme toggle */
const toggleSwitch = () => {
  console.log(currentThemeSetting);
  setTheme(currentThemeSetting === 'light' ? 'dark' : 'light')
}

const themeSwitch = document.getElementById('color-mode-switch');
themeSwitch.addEventListener('change', toggleSwitch);

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('interest-form-submit').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Send the data to your Google Apps Script Web App
    fetch("https://script.google.com/macros/s/AKfycbzgcp7xdbWVFjB3CZHm0G_mTBTWR0Ma-x-KPhTETEYd_2x9E9GgII6S79eeeTBsMxQX_g/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        document.getElementById('interest-form-submit').reset(); //Clear the form
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    });
  });
});
