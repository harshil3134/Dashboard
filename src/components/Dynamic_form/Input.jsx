import React from 'react'

function Input({label,type,placeholder}) {
  return (
    <div>
                    <div className="flex flex-col  w-3/4">
                <label className="my-1 text-xl ">{label}</label>
                <input
                  type={type}
                  className="bg-gray-100 p-3 border-b-2"
                  name="password"
                  value={value}
                  onChange={(e) => }
                  placeholder={placeholder}
                />
                <div className="h-5 text-red-500 mt-1 leading-tight">
                  <h3 className="hidden" id="passwordv1">
                    Please Enter the Password
                  </h3>
                  </div>
              </div>
    </div>
  )
}

export default Input
