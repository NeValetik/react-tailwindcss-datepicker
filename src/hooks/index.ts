import { useEffect } from "react";

export default function useOnClickOutside(
    ref: HTMLDivElement | null,
    handler: (e?: MouseEvent | TouchEvent) => void,
    extraRef?: HTMLDivElement | null
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node;
            if (!ref || ref.contains(target)) {
                return;
            }
            if (extraRef && extraRef.contains(target)) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler, extraRef]);
}
