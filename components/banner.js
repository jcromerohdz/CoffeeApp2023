import styles from '../components/banner.module.css'

export default function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffe shops!</p>
      <button 
        className={styles.button}
        onClick={props.handleOnClick}
      >{props.buttonText}</button>
    </div>
  )
}