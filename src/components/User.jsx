import user_img from "../assets/user_img.jpg"
function User({u_details={}}) {
  const email=u_details.email
  return (
    <div className="max-w-[24rem] max-h-[32rem]  py-6 flex flex-row p-5 ">
      <div className="w-full h-full">
<img src={user_img} className="w-auto h-auto max-w-full max-h-full border-4 border-white rounded-full" alt="user_img"></img>
      </div>
      <div className="px-7 py-4">
        <h2 className="text-2xl">Annie Randolf</h2>
        <h4>{email?email:""}</h4>
      </div>
    </div>
  )
}
export default User
  