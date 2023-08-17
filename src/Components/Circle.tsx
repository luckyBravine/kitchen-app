

const Circle = () => {
  const circeWidth = 200
  const radius = 85;
  const dashArray = radius * Math.PI * 2
  return (
    <div className="flex relative w-full">
      <svg width={circeWidth} height={circeWidth} viewBox={`0 0 ${circeWidth} ${circeWidth}`} className="bg-red-500">
        <circle cx={circeWidth / 2} cy={circeWidth / 2} strokeWidth="15px" r={radius} className='circle-background' />
        <circle cx={circeWidth / 2} cy={circeWidth / 2} strokeWidth="15px" r={radius} className='circle-slider' style={{strokeDasharray: dashArray}} />
      </svg>
    </div>
  )
}

export default Circle