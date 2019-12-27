import React, { useEffect } from 'react'
import { stock } from './stock.module.css'
import { useLozad } from '../../hooks/lozad'

function Stock() {
  useLozad()

  return (
    <div className={stock}>
      <iframe
        data-src="https://gsestockfeed.com/style2.php"
        sandbox
        importance="low"
        scrolling="no"
        className="lozad"
      />
    </div>
  )
}

export default Stock
