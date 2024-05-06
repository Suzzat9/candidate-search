import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

// References : https://mui.com/material-ui/react-card/

// Defining JobCard to display details of each job posting
export default function JobCard({jobData}) {

    return (
    <Card sx={{ maxWidth: 320, minHeight: 500, marginTop: 5 }}>
    <CardContent>
        <div className="flex-row">
            <CardMedia
                    sx={{ height:65, width: 65 }}
                    image={jobData.logoUrl}
                    className="inline-div"
            />
            <div className="info-container">
            <Typography className="head-3" component="div">
                {jobData.companyName}
            </Typography>
            <Typography className="head-2" component="div">
                {jobData.jobRole}
            </Typography>
            <Typography className="cards-sub-text" component="div">
                {jobData.location}
            </Typography>
            </div>
        </div>
        <Typography className="salary" component="div">
            {/* If minJdSalary exists display range else display upto maxSalary */}
            Estimated Salary: {jobData.minJdSalary ? `${jobData.minJdSalary}-${jobData.maxJdSalary}` : 
            `upto ${jobData.maxJdSalary}`} {jobData.salaryCurrencyCode} ✅
        </Typography>
        <Typography className="about-comp" component="div">
          About Company: 
        </Typography>
        <Typography variant="strong" className="about-us" component="div">
          About us 
        </Typography>
        <Typography
            className="row">
          {jobData.jobDetailsFromCompany}
        </Typography>
        <CardActions className="centered">
        <Button size="small" className="view-job">View job</Button>
        </CardActions>
        <Typography className="head-3" component="div">
            Minimum Experience:
        </Typography>
        <Typography className="head-2" component="div">
        {/* If minExp exists else NA */}
        {jobData.minExp ? `${jobData.minExp} years` : `NA`}
        </Typography>
        </CardContent>
        <CardActions className="centered">
        <Button className="apply-button"> Easy Apply ⚡</Button>
        <Button className="referral-button"> Unlock referral asks</Button>
      </CardActions>
    </Card>
  );
}
