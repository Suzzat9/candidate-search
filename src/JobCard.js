import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const jobData = {
    "logo": "",
    "companyName": "XYZ",
    "role" : "Engineer",
    "location" : "Delhi",
    "salary" : "20-25 LPA",
    "about" : "about the company xyz",
    "experience" : 3
};

export default function JobCard() {
  return (
    <Card sx={{ maxWidth: 320, minHeight: 450 }}>
      <CardMedia
        sx={{ height: 50, width: 50 }}
        image={ jobData.logo }
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h7" component="div">
          {jobData.companyName}
        </Typography>
        <Typography variant="h6" component="div">
          {jobData.role}
        </Typography>
        <Typography variant="h8" component="div">
          {jobData.location}
        </Typography>
        <Typography variant="h8" component="div">
          {jobData.salary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {jobData.about}
        </Typography>
        <Typography variant="h8" component="div">
            Minimum Experience:
          {jobData.experience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
      </CardActions>
    </Card>
  );
}
