import React, {useState, useEffect} from 'react';
import JobCard from './JobCard'
import FilterBar from './FilterBar'
import { useSelector } from 'react-redux';
// References : https://blog.logrocket.com/3-ways-implement-infinite-scroll-react/#building-entire-implementation-scratch

// Setting up fetch data options 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// Infinite Scroll component which will hold all the job cards
const InfiniteScroll = () => {
    // Set initial state of trackers for infinite scroll
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);

    // Jobs data 
    const [jobs, setJobs] = useState([]);

    const filters = useSelector((state) => state.filters); // getting filter vars from redux
    //console.log(filters)

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
            //console.log(offset)
            const dataScroll = data.jdList
            //console.log(dataScroll)
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
            return; // if the user has not scrolled to the end of the page, just return
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
        <FilterBar/>
        <div className="content-wrapper flex-content">
                {jobs.filter(job => {
                    return (
                        (job.companyName !== '') &&
                        (!filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) &&
                        (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
                        (!filters.jobRole || job.jobRole.toLowerCase().includes(filters.jobRole)) &&
                        (!filters.techStack || job.jobRole.toLowerCase().includes(filters.techStack)) &&
                        (!filters.minExp || job.minExp <= filters.minExp) &&
                        (!filters.minJdSalary || job.minJdSalary >= filters.minJdSalary) && 
                        (!filters.workMode || 
                            (filters.workMode === 'remote' && job.location === 'remote') ||
                            (filters.workMode === 'onsite' && job.location !== 'remote')
                        )
                    );
                })
                .map(job => (
                    <JobCard jobData={job} />
                ))}
            {loading && <p>Data Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
        </>
    )

}

export default InfiniteScroll;