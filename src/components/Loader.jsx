import { Html, useProgress } from "@react-three/drei";
/* for showing loading percentage while loading */
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;