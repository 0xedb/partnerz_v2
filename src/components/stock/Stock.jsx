import React, { useEffect } from 'react'
import { stock } from './stock.module.css'
import lozad from 'lozad'

function Stock() {
  useEffect(() => {
    const observer = lozad() 
    observer.observe()
  }, [])

  return (
    <div className={stock}>
      <iframe
        data-src="https://gsestockfeed.com/style2.php"
        sandbox
        importance="low"
        scrolling="no"
        className='lozad'
      />
    </div>
  )
}

export default Stock
