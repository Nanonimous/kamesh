export function GreenBall(props){
  const {top, left, bottom, right} = props
  return(
    <div 
    className="green-ball"
    style={{
      '--top':`${top}px`,
      '--left':`${left}px`,
      '--bottom':`${bottom}px`,
      '--right':`${right}px`,
    }}
    >
    </div>  
  )
}