import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NewsType } from "../types/newsTypes";
import { getNews } from "../api/news";

const NewsDetails = () => {
    const { id } = useParams();

    const [news, setNews] = useState<NewsType>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNews() {
            if (!id) return;
            try {
                const data = await getNews(id);
                setNews(data);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError("Failed to load news. Please try again later.");
            }
        }
        fetchNews();
    }, [id]); 

    if (error) return <h1>{error}</h1>;
    if (!news) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="news-container">
            <img src={news.imageUrl} alt="" />
            <div className="desc">
                <p>{news.title}</p>
                <p>{news.text}</p> 
            </div>
        </div>
    );
};

export default NewsDetails;