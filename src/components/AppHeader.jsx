import React from 'react'

export default function AppHeader() {
    return (
        <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between items-center">
            <div className='brand text-xl font-semibold'>
                <h1>Aabriti</h1>
            </div>
            <div>
                <ul className='flex space-x-6 font-bold'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                    
                </ul>
                    
    
            </div>
           </nav>
  )
}
