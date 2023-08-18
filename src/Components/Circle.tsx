

const Circle = ({ images }) => {

  const renderImages = () => {
    return images.map((image, index) => (
      <image
        key={index}
        href={image}
        x={150 + 100 * Math.cos((index / images.length) * 2 * Math.PI)}
        y={150 + 100 * Math.sin((index / images.length) * 2 * Math.PI)}
        width="40"
        height="40"
        transform={`translate(-20, -20)`}
      />
    ));
  };

  return (
    <div>
      <svg width="300" height="300">
        <circle cx="150" cy="150" r="100" fill="lightgray" />
        {renderImages()}
        <circle cx="150" cy="150" r="50" fill="white" />
      </svg>
    </div>
  );
};

export default Circle;
