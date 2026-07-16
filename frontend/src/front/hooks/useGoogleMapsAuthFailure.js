import { useLayoutEffect, useState } from "react";

function useGoogleMapsAuthFailure() {
    const [hasAuthFailure, setHasAuthFailure] = useState(false);

    useLayoutEffect(() => {
        const previousAuthFailureHandler = window.gm_authFailure;

        const authFailureHandler = () => {
            setHasAuthFailure(true);
            previousAuthFailureHandler?.();
        };

        window.gm_authFailure = authFailureHandler;

        return () => {
            if (window.gm_authFailure === authFailureHandler) {
                window.gm_authFailure = previousAuthFailureHandler;
            }
        };
    }, []);

    return hasAuthFailure;
}

export default useGoogleMapsAuthFailure;
