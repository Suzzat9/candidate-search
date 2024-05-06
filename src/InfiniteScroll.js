import React, {useState, useEffect} from 'react';
import JobCard from './JobCard'
import FilterBar from './FilterBar'
// References : https://blog.logrocket.com/3-ways-implement-infinite-scroll-react/#building-entire-implementation-scratch

// Setting up fetch data options 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


const InfiniteScroll = () => {
    // Set initial state of trackers for infinite scroll
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);

    // Jobs data 
    const [jobs, setJobs] = useState([]);

    // fetch data from the API
    const fetchData = async () => {
        setLoading(true);
        setError(null);

        const body = JSON.stringify({
            "limit": 18,
            "offset": offset
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        try {
            const response = await fetch(`https://api.weekday.technology/adhoc/getSampleJdJSON`, requestOptions)
            const data = await response.json();
            console.log(offset)
            const dataScroll = data.jdList
            setJobs(prevJobs => [...prevJobs, ...dataScroll]); // update the state of setItems
            setOffset(prevOffset => prevOffset + 18); // update the offset
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
        <>
        <FilterBar className="text-box"/>
        <div className="content-wrapper flex-content">
                {jobs.filter(job => {
                    if (job.companyName !== '') return true
                })
                .map(job => (
                    <JobCard key={job.jdUid} jobData={job} />
                ))}
            {loading && <p>Data Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
        </>
    )

}

export default InfiniteScroll;