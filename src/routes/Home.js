import { useEffect, useState } from "react";
import Marvel from "../components/Marvel";
import styles from "../Home.module.css";
import style from "../style/global.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const json = await (
            await fetch(
                "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
            )
        ).json();
        const sortedCharacters = json.data.results.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    
        setCharacters(sortedCharacters);
        setLoading(false);
    }
    useEffect(() => {
        getCharacters();
    }, [])
    console.log(characters);
    return (
        <div className="main">
            <h1 className="header">
                Marvel Heroes
            </h1>
            {
                loading ? (
                    <h2>loading...</h2>
                ) : (
                    <div className={styles.wrapper}>
                        <ul className={styles.heroes}>
                            {characters.map((character) => (
                                    <Marvel 
                                        key={character.id}
                                        id={character.id}
                                        name={character.name}
                                        description={character.description}
                                        thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                    />
                                )
                            )}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
export default Home;