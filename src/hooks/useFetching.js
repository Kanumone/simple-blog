import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    async function fetching() {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setErrorMsg(e.message)
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, errorMsg];
}