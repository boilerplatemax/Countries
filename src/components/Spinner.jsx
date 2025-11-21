import React from 'react'

const Spinner=()=> {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin"></div>
            <span className="text-indigo-700 font-semibold text-lg">Loading...</span>
        </div>
    </div>


  )
}
export default Spinner