import { useState, useEffect } from 'react';


const useEmoji = () => {
    const [emojis, setEmoji] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchEmojis = async () => {
            try {
                const response = await fetch('https://emojihub.yurace.pro/api/all/category/travel-and-places');
                const data = await response.json();
                setEmoji(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchEmojis();
    }, []);
    
    return { emojis, loading, error };
}

export default useEmoji;