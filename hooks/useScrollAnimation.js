import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    // Keep a stable ref to the observer so we can clean it up
    const observerRef = useRef(null);

    const observe = useCallback(() => {
        const element = ref.current;
        if (!element) return;

        // Disconnect any previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once visible — animation only triggers once
                    observerRef.current?.disconnect();
                }
            },
            {
                root: null,
                // Trigger 100px before the element enters viewport for smoother feel
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.05,
            }
        );

        observerRef.current.observe(element);
    }, []);

    useEffect(() => {
        observe();

        // Fallback: if IntersectionObserver never fires (e.g. SSR or old browser),
        // make element visible after a short delay
        const fallback = setTimeout(() => {
            if (!isVisible && ref.current) {
                // Check if element is already in viewport
                const rect = ref.current.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    setIsVisible(true);
                }
            }
        }, 300);

        return () => {
            clearTimeout(fallback);
            observerRef.current?.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [observe]);

    return [ref, isVisible];
};
