import React from "react";

export const useIntersectionObserver = (options: {
  [key: string]: string | number | boolean | undefined;
}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const refrenceElem = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (refrenceElem) {
      observer.observe(refrenceElem);
    }
    return () => {
      if (!refrenceElem) return;
      observer.unobserve(refrenceElem);
    };
  }, [options]);

    return { isIntersecting, ref };
};
