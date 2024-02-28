import {useCallback, useRef} from "react";

export default function useDebounce(callback) {
    const timer = useRef();

    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, 1000)
    }, [callback])

    return debouncedCallback;
}