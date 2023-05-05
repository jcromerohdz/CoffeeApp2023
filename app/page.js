'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner'

export default function Home() {

  const handleOnBannerClick = () => {
    console.log('Click banner button')
  }

  return (
    <main className={styles.main}>
      <Banner 
        buttonText="View stores nearby"
        handleOnClick={handleOnBannerClick}
      />
    </main>
  )
}
