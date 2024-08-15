'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Result = () => {
  const [sem, setsem] = useState('')

  useEffect(() => {
    console.log(sem)
  }, [sem])
  
  const handleOnChange = (e: any) => {
    setsem(e.target.value)
    console.log(e.target.value)
  }

  const handleClick = () => {
    if(sem == 'sem1') {
      window.location.href = 'https://imgtr.ee/images/2024/08/15/3dc0c6f9a2aabe6061aa4d23e5afe2fa.jpeg'
    }
    else if(sem == 'sem2') {
      window.location.href = 'https://imgtr.ee/images/2024/08/15/848613cd292325ea1082da89f23d8a1d.jpeg'
    }
    else if(sem == 'sem3') {
      window.location.href = 'https://imgtr.ee/images/2024/08/15/1e6b3cc2e3f3e117b84256f350b67fe8.jpeg'
    }
    else if(sem == 'sem4') {
      window.location.href = 'https://imgtr.ee/images/2024/08/15/a5f58b08192f7c4c96d48815d44289eb.jpeg'
    }
  }
  return (
    <div>
      <div className="pt-10 px-2 sm:ml-60">
   <div className="p- border-2 ">
   <div className="flex-1 p-10">
        <div className='flex flex-col'>
        <div className="bg-white flex p-6 justify-between rounded shadow-md">
          <div className="mb-4 flex justify-between items-center mr-10 w-1/2">
            <div className='w-20 text-sm'>Roll no</div>
            <input type="text" className="mt-1 block w-96 p-2 text-sm bg-gray-100 border-gray-500 rounded-sm shadow-sm" value="22001015057" readOnly />
          </div>
          <div className="mb-4  flex justify-between items-center mr-10 w-1/2">
            <label className="block text-sm border-gray-800 text-gray-700">Semester</label>
            <select onChange={handleOnChange} className="mt-1 block w-48 bg-gray-100 p-2 text-sm border-gray-800 rounded-md shadow-sm">
              <option>--Select--</option>
              {/* <Link href={'https://imgtr.ee/images/2024/08/15/3dc0c6f9a2aabe6061aa4d23e5afe2fa.jpeg'}>Semester 1</Link>
              <Link href={'https://imgtr.ee/images/2024/08/15/848613cd292325ea1082da89f23d8a1d.jpeg'}><option>Semester 2</option></Link>
              <Link href={'https://imgtr.ee/images/2024/08/15/1e6b3cc2e3f3e117b84256f350b67fe8.jpeg'}><option>Semester 3</option></Link>
              <Link href={'https://imgtr.ee/images/2024/08/15/a5f58b08192f7c4c96d48815d44289eb.jpeg'}><option>Semester 4</option></Link> */}
              <option value='sem1'>Semester 1</option>
              <option value='sem2'>Semester 2</option>
              <option value='sem3'>Semester 3</option>
              <option value='sem4'>Semester 4</option>
              <option value='sem5'>Semester 5</option>
              <option value='sem6'>Semester 6</option>
              <option value='sem7'>Semester 7</option>
              <option value='sem8'>Semester 8</option>
            </select>
          </div>
          
        </div>
        <div onClick={handleClick} className='flex mt-2 justify-center items-center'><button className="bg-blu w-40 text-white py-2 px-4 rounded">View Result</button></div>
        </div>
        
        <div className="mt-6 bg-white p-6 rounded shadow-md">
          <h2 className="text-xl mb-4">Result</h2>
          <p className="text-red-600 font-bold text-sm">
            **The Results displayed here are subject to updation/correction. The final result will be on DMC.
          </p>
        </div>
      </div>
   </div>
</div>
    </div>
  )
}

export default Result 
