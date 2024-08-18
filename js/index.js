
/* Initialize color theme by user preference */
const prefersLight = () => window.matchMedia("(prefers-color-scheme: light)").matches;

let currentThemeSetting = prefersLight() ? 'light' : 'dark';

const setTheme = (mode) => {
  console.log(mode);
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