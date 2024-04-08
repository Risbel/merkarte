const Circle = ({
  h,
  w,
  border,
  borderColor,
  translateX,
  translateY,
}: {
  h: number;
  w: number;
  border: number;
  borderColor: string;
  translateX: number;
  translateY: number;
}) => {
  return (
    <div>
      <div
        style={{
          height: `${h}px`,
          width: `${w}px`,
          border: `${border}px solid ${borderColor}`,
          transform: `translate(${translateX}px, ${translateY}px)`,
        }}
        className={`absolute rounded-full`}
      ></div>
    </div>
  );
};

export default Circle;
