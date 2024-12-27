import './Marker.css';
declare function Marker({ threshold }: {
    threshold: {
        readonly [key: string]: number | null | ['min' | 'max', number];
    };
}): import("react/jsx-runtime").JSX.Element;
declare function MarkerTailwind(): import("react/jsx-runtime").JSX.Element;
export { Marker, MarkerTailwind };
