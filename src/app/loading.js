import styles from "@/app/styles/loading.module.css";
const loading = () => {
  return (
    <section className={styles.loading_section}>
        <div className={styles.loading}></div>
    </section>
  )
}

export default loading