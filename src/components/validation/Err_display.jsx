
function Err_display({errobj,errkey}) {
  // console.log("err msg in display",errobj,errkey)
  return (
    <h3 className="text-red-500" >
        {errobj&&errobj[errkey]}
    </h3>
  )
}

export default Err_display
