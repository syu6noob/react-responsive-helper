'use client';

import React from 'react';
import './Marker.css';
import MarkerChild from "./MarkerChild";

function Marker({
  threshold
}: {
  threshold: {
    readonly [key: string]: number | null | ['min'|'max', number]
  }
}) {
  const colors = [
    '#ef4444', '#d97706', '#84cc16', '#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'
  ]
  const [width, setWidth] = React.useState(0);

  const handleWindowResize = () => {
    setWidth(document.body.clientWidth);
  }

  React.useLayoutEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });
  
  return (
    <div className="responsive-marker">
      {Object.keys(threshold).map((name, index) => {
        let value: number;
        let type: 'min' | 'max' | null;
        let colorIndex = index % 8;

        if (Array.isArray(threshold[name])) {
          type = threshold[name][0];
          value = threshold[name][1];
        } else if (threshold[name]) {
          value = threshold[name];
          type = 'min';
        } else {
          type = null;
          value = 0;
        }

        return (
          <MarkerChild key={index} width={width} name={name} value={value} type={type} color={colors[colorIndex]}/>
        );
      })}
    </div>
  )
}

function MarkerTailwind() {
  return (
    <Marker threshold={{
      'x': null,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    }} />
  )
}

export {
  Marker, 
  MarkerTailwind
}
