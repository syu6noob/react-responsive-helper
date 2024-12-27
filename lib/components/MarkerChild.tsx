import React from 'react';

export default function MarkerChild({
  width,
  name,
  type,
  value,
  color
}: {
  width: number,
  name: string
  type: 'min' | 'max' | null,
  value: number,
  color: string
}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (type === 'max') {
      if (width < value) setIsVisible(true)
      else setIsVisible(false)
    } else if (type === 'min') {
      if (width > value) setIsVisible(true)
      else setIsVisible(false)
    } else {
      setIsVisible(true);
    }
  }, [width]);
  
  return (
    <div
      className={isVisible ? "responsive-helper-marker" : "responsive-helper-marker responsive-helper-marker--hidden"}
      style={{ background: color }}>
      {name}
    </div>
  )
}
