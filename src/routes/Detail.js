import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Character from "../components/Character"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Detail(){
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [contents, setContents] = useState([]);

    const getDetail = async () => {
            const json = await (
                await fetch(
                    `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
                )
            ).json();
            setContents(json.data.results[0]);
            setLoading(false);
        }
    useEffect(() => {
        getDetail();
    }, [id])
    console.log(contents);
    return(
        
        <div className="main">
            <h1 className="header">
                Marvel Heroes
                <Link to="/">
                    🏠
                </Link>
            </h1>
            {
                loading ? (
                    <h2 className="loading">loading...</h2>
                ) : (
                    <Character 
                        name={contents.name}
                        comics={contents.comics}
                        description={contents.description}
                        events={contents.events}
                        series={contents.series}
                        stories={contents.stories}
                        urls={contents.urls}
                        thumbnail={`${contents.thumbnail?.path}.${contents.thumbnail?.extension}`}
                    />
                )
            }
        </div>
    )
}
export default Detail;