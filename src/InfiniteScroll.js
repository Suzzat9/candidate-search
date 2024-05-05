import React, {useState, useEffect} from 'react';

const InfiniteScroll = () => {
    // Set initial state of trackers for infinite scroll
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Jobs data 
    const [jobs, setJobs] = useState([]);

    // fetch data from the API
    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await response.json();
            const dataScroll = data.results
            setJobs(prevJobs => [...prevJobs, ...dataScroll]); // update the state of setItems
            setPage(prevPage => prevPage + 1); // update the page number
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    // handling a scroll event
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== 
            document.documentElement.offsetHeight || loading) {
            return;
        }
        fetchData();
    };

    // calling fetchdata on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // listen for the scroll event then call handleScroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    } , [loading]);



    return (
        <div>
            <ul>
                {jobs.map(job => (
                    <li>{job.name}</li>
                ))}
            </ul>
            {loading && <p>Data Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    )

}

export default InfiniteScroll;