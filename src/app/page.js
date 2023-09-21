import Image from 'next/image'
import styles from './page.module.css'
import Header from './header/header'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from './card/card'

export default function Home() {
  return (
     <>
     <div className='fashion-bg-color'>
     <Header/>
    <Card/>
     </div>
    
     </>
  )
}
