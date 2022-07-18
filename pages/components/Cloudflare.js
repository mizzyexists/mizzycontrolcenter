import { useState, useEffect } from "react";

const Cloudflare = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch("/api/cloudflare/getSites");
            const json = await res.json();
            console.dir(json);
            setData(json.result);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="cloudflare">
            {loading ? <p>Loading...</p> : <p className="animate__animated animate__fadeIn animate__slower">TOTAL SITES: {data.length}</p>}
            {error && <p>Error: {error.message}</p>}
            {data.map(site => (
                <div className="site animate__animated animate__fadeIn animate__slower" key={site.id}>
                    <h3>{site.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default Cloudflare;