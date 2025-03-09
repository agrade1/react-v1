import styles from "../Detail.module.css";

function Characters({name, comics, description, events, series, stories, urls, thumbnail}){
    console.log(comics?.items);
    return(
        <div className={styles.wrapper}>
            <div className={styles.imgWrap}>
                <img src={thumbnail} alt={name}></img>
            </div>
            <div className={styles.contents}>
                <div>
                    <h2>Name : {name}</h2>
                </div>
                <div>
                    <h2>comics</h2>
                    <ul>
                        {comics?.items.map((comic, index) => (
                            <li key={index}>
                                <span>1{comic.name}</span>                  
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>series</h2>
                    <ul>
                        {series?.items.map((serie, index) => (
                            <li key={index}>
                                <span>1{serie.name}</span>                  
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Characters;