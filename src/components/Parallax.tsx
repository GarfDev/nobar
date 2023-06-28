import React, {useLayoutEffect, useRef, useState} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

interface Props {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  offset?: number;
}

const Parallax = ({children, className, style, offset = 0}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const {scrollY} = useScroll();

  // MAPPED VALUES
  const initial = elementTop - clientHeight
  const final = elementTop + offset
  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const y = useSpring(yRange, {stiffness: 400, damping: 90})

  useLayoutEffect(() => {
    const element = ref.current;

    const onResize = () => {
      setElementTop(element!.getBoundingClientRect().top + (window.scrollY))
      setClientHeight(window.innerHeight)
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  return <motion.div ref={ref} className={className} style={{y, ...style}}>{children}</motion.div>
}

export default Parallax