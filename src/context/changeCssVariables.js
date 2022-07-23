export const changeCssVariables = theme => {
    const root = document.querySelector(":root");

    root.style.setProperty('--main-color', `var(--${theme}-color)`);
    root.style.setProperty('--main-info', `var(--${theme}-main-info)`);
    root.style.setProperty('--main-button', `var(--${theme}-button-search)`);
    root.style.setProperty('--main-logo', `var(--${theme}-logo)`);
    root.style.setProperty('--main-menu-bg', `var(--${theme}-bg-menu)`);
    root.style.setProperty('--main-bg', `var(--${theme}-bg)`);
    root.style.setProperty('--main-degree', `var(--${theme}-degree)`);
    root.style.setProperty('--main-loading', `var(--${theme}-loading)`);
    root.style.setProperty('--main-bg-color', `var(--${theme}-bg-color)`);
    root.style.setProperty('--main-error-color', `var(--${theme}-error-color)`);
}