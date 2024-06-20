import { useLocalStorage } from "./useLocalStorage";


export function useDarkMode() {
    const [dark, setDark] = useLocalStorage('darkmood', false);
    return [dark, setDark]
}