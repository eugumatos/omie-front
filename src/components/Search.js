import styles from './Search.module.css';

export function Search() {
  return(
    <article className={styles.search}>
      <header>
        <form className={styles.searchForm}>
          <strong> Busque por um usuário </strong>

          <textarea 
            name="search"
            placeholder='Busque por um usuário' 
            required
          />
          
          <footer>
            <button type='submit' >
              Publicar
            </button>
          </footer>
        </form>
      </header>

  
    </article>
  )
}