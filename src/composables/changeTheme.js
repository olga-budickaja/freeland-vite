import { reactive } from "vue";

const bodyElement = document.querySelector('body');

const themeState = reactive({
    theme: localStorage.getItem("theme") || "light-theme",
});

const darkTheme = () => {
    themeState.theme = "dark-theme";
    localStorage.setItem("theme", "dark-theme");
};

const lightTheme = () => {
    themeState.theme = "light-theme";
    localStorage.removeItem("theme");
};

export const toggleTheme = () => {
    if (themeState.theme === 'dark-theme') {
        lightTheme();
        bodyElement.classList.remove('dark-theme');
    } else {
        darkTheme();
        bodyElement.classList.add('dark-theme');
    }
}

export const currentTheme = () => {
    const theme = localStorage.getItem("theme");
    theme && bodyElement.classList.add('dark-theme');
}

