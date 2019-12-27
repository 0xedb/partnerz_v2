import lozad from 'lozad'
import { useEffect } from 'react'

const useLozad = () => {
  useEffect(() => {
    const observer = lozad()
    observer.observe()
    console.log('lozad used!')
  })
}

export { useLozad }
