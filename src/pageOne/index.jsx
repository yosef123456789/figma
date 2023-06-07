import styles from './style.module.css'
export default function Page_one() {
    return (
        <div className={styles.div}>
            <h1>helllooo</h1>
            <img className={styles.imgBack} ref="src/pageOne/Image.png" />
        </div>
    )
}