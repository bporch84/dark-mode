import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage("dark")

    return [storedValue, setValue]
}

export default useDarkMode