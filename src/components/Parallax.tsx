import React, {useLayoutEffect, useRef, useState} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

interface Props {
  direction?: 'vertical' | 'horizontal' | 'bi-direction';
  xOffset?: number;
  yOffset?: number;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  offset?: number;
}

const Parallax = ({children, xOffset = 0, yOffset = 0, direction = 'horizontal', className, style, offset = 0}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const [elementTop, setElementTop] = useState(0)
  const [elementRight, setElementRight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0)
  const {scrollY} = useScroll();

  // MAPPED VALUES
  const initialY = elementTop - clientHeight
  const finalY = elementTop + offset + yOffset

  const initialX = elementRight - clientWidth;
  const finalX = elementRight + offset + xOffset;

  const xRange = useTransform(scrollY, [initialX, finalX], getOffset('vertical'));
  const yRange = useTransform(scrollY, [initialY, finalY], getOffset('horizontal'))

  const y = useSpring(yRange, {stiffness: 200, damping: 90, mass: 5})
  const x = useSpring(xRange, {stiffness: 200, damping: 90, mass: 5})

  function getOffset(innerDirection?: 'vertical' | 'horizontal' | 'bi-direction') {
    if (direction === 'bi-direction') {
      if (innerDirection === 'vertical') return [offset + xOffset, -(offset + xOffset)];
      else return [offset + yOffset, -(offset + yOffset)]
    } if (innerDirection === direction) return [offset, -offset]
    else return [0, 0]
  }

  useLayoutEffect(() => {
    const element = ref.current;

    const onResize = () => {
      setElementRight(element!.getBoundingClientRect().right + (window.scrollX))
      setElementTop(element!.getBoundingClientRect().top + (window.scrollY))
      setClientHeight(window.innerHeight)
      setClientWidth(window.innerWidth)
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  return <motion.div ref={ref} className={className} style={{x, y, ...style}}>{children}</motion.div>
}

export default Parallax

const removeEmpty = (obj: any) => {
  let newObj: any = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};