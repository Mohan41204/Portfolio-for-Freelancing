import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text = '',
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars', // 'chars' | 'words'
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  // Split the text manually into words
  const words = text.split(' ');
  
  useEffect(() => {
    if (!ref.current || !fontsLoaded) return;
    
    // Find all items we want to animate (chars or words)
    const elements = ref.current.querySelectorAll(
      splitType === 'chars' ? '.split-char' : '.split-word'
    );
    
    if (elements.length === 0) return;

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
    const sign = marginValue === 0 ? '' : marginValue < 0 
      ? `-=${Math.abs(marginValue)}${marginUnit}` 
      : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    // Create GSAP context for automatic cleanup
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
            fastScrollEnd: true,
          },
          onComplete: () => {
            if (onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
          },
          willChange: 'transform, opacity',
          force3D: true
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [text, delay, duration, ease, splitType, JSON.stringify(from), JSON.stringify(to), threshold, rootMargin, fontsLoaded]);

  const style = {
    textAlign,
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
  };
  const classes = `split-parent ${className}`;
  const Tag = tag || 'p';

  if (splitType === 'chars') {
    return (
      <Tag ref={ref} style={style} className={classes}>
        {words.map((word, wIdx) => (
          <span key={wIdx} className="split-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, cIdx) => (
              <span key={cIdx} className="split-char" style={{ display: 'inline-block' }}>
                {char}
              </span>
            ))}
            {wIdx < words.length - 1 && <span className="split-char">&nbsp;</span>}
          </span>
        ))}
      </Tag>
    );
  }

  // default 'words'
  return (
    <Tag ref={ref} style={style} className={classes}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="split-word" style={{ display: 'inline-block' }}>
          {word}
          {wIdx < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
