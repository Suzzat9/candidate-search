import React, useState, useEffect from 'react';

const InfiniteScroll = () => {
    // Set initial state of trackers for infinite scroll
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Jobs data 
    const [jobs, setJobs] = useState([]);

    // fetch data from the API
    const fetchData = async () => {

        try {

        } catch(error) {

        } finally {

        }
    }

    // handling a scroll event
    const handleScroll = () => {

    }

    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )

}