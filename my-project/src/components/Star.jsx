import { forwardRef } from 'react';

const Star = forwardRef(({ size, color, x, y }, ref) => {
  const style = {
    position: 'fixed',
    left: x,
    top: y,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '50%',
    pointerEvents: 'none',
    opacity: 1
  };

  return <div ref={ref} style={style} />;
});

export default Star;
