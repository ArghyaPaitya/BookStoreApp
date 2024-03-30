import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:4-xl">We're delighted to have you {''} <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi mollitia assumenda inventore cupiditate amet. Ipsa velit maxime reiciendis magnam optio facilis quo assumenda, deleniti esse fugiat pariatur voluptatem eius corporis porro libero,
             quia similique officia neque nulla incidunt repellendus! Sequi quaerat blanditiis, similique repellat perspiciatis molestias doloribus,
             architecto unde recusandae dignissimos repellendus nulla? Consequuntur architecto magni officiis inventore amet.
        </p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300">
            Back
            </button>
        </Link>
       </div>
       <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
        {
            list.map((item) => (
              <Cards key={item.id} item={item}/>
            ))
        }
       </div>
    </div>
   </>
  )
}

export default Course