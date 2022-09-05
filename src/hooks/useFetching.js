import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    async function fetching(...args) {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e) {
            setErrorMsg(e.message)
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, errorMsg];
}