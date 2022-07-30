import React from 'react'
import { WatchProducts } from '../data'
import Product from "./Product"
import styles from "./WatchPageProducts.module.css"

const WatchPageProducts = () => {
  return (
    <>
    <div className={styles.Title}>WATCHES PAGE PRODUCTS</div>
    <div className={styles.Container}>
        {WatchProducts.map((item)=>(
                <Product item={item} key={item.id}/>
        ))}
    </div>
    </>
  )
}

export default WatchPageProducts
