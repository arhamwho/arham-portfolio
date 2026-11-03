import { useLayoutEffect, useRef, useState } from 'react';

export default function useFitText(fill = 0.98) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number>();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      text.style.fontSize = '100px';
      const size = (100 * container.clientWidth * fill) / text.offsetWidth;
      text.style.fontSize = `${size}px`;
      setFontSize(size);
    };

    fit();
    document.fonts?.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(container);
    return () => observer.disconnect();
  }, [fill]);

  return { containerRef, textRef, fontSize };
}
