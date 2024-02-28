import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)

    const fetching = async (...param) => {
        try {
            setIsLoading(true)
            await callback(...param)
        } catch (e) {
            console.log(e.message)
            setTimeout(() => fetching(...param), 2000)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading]
}