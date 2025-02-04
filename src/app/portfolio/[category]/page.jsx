import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { items } from './data.js'

const getData = (cat) => {
  const data = items[cat]

  if(data){
    return data
  }

  return notFound()
}

const Category = ({params}) => {
  const data = getData(params.category)  //category because our folder name is category
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>
      {params.category}
      </h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContent}>
          <Image src= {item.image}
          fill={true}
          className={styles.img}
          alt=''
           />
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default Category