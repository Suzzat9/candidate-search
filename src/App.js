import logo from './logo.svg';
import './App.css';
import InfiniteScroll from './InfiniteScroll'
import JobCard from './JobCard'

function App() {
  return (
    <>
    {/* <div className="content-wrapper flex-content">
        <JobCard/>
        <JobCard/>
        <JobCard/>
    </div> */}
    <div className="content-wrapper flex-content">
    <InfiniteScroll/>
    </div>
    
    </>
  );
}

export default App;
