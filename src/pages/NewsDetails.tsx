import { useParams } from "react-router";

const NewsDetails = () => {
    const {newsId} = useParams();
    return <div>News Details: {newsId}</div>
};

export default NewsDetails;