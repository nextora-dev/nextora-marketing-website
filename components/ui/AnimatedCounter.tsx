'use client';

import { useState, useEffect, useRef } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps extends Omit<TypographyProps, 'children'> {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  ...props
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endValue = value;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * endValue);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value, duration]);

  return (
    <Typography ref={ref} {...props}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </Typography>
  );
}
