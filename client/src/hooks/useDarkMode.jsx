import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue = false) => {
  const [darkMode, setDarkMode] = useLocalStorage(initialValue);
  darkMode
    ? document.body.classList.add("dark-mode")
    : document.body.classList.remove("dark-mode");
  return [darkMode, setDarkMode];
};
