import { motion } from 'framer-motion';
import { useMemo, type ElementType, type ReactNode, type CSSProperties } from 'react';

interface FadeInProps {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  [key: string]: unknown;
}

export default function FadeIn({
  children,
  as = 'div',
  className,
  style,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...rest
}: FadeInProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = useMemo(() => motion.create(as as any), [as]) as ElementType;

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
