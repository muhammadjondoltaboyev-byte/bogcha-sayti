import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieAnim({ path, className = '', style = {}, loop = true, autoplay = true }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop,
      autoplay,
      path
    });
    return () => anim.destroy();
  }, [path, loop, autoplay]);
  return <div ref={ref} className={className} style={style}></div>;
}