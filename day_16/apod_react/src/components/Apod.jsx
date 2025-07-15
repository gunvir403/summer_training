import { useState, useEffect } from "react";
import Loading from './Loading';
import Error from './Error';
import RenderedPage from "./RenderedPage";


const Apod = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cachedData = localStorage.getItem("apodData");
                if (cachedData) {
                    setApodData(JSON.parse(cachedData));
                    setLoading(false);
                } else {
                    const response = await fetch(apiUrl);
                    if (!response.ok) {
                    throw new Error('Error Fetching Data');
                    }
                    const data = await response.json();
                    localStorage.setItem("apodData", JSON.stringify(data));
                    setApodData(data);
                    setLoading(false);
                }
            } catch (e) {
                setError('Failed to load Data');
                setLoading(false);
            }
        };
        fetchData();
    }, [apiUrl]);

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <RenderedPage {...apodData}/>
    )
}

export default Apod;