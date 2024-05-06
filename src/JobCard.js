import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// References : https://mui.com/material-ui/react-card/

const jobData = {
    "logoUrl": "https://logo.clearbit.com/dropbox.com",
    "companyName": "Dropbox",
    "role" : "Engineer",
    "location" : "Delhi",
    "salary" : "20-25 LPA",
    "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Nec ultrices dui sapien eget mi. Amet massa vitae tortor condimentum lacinia quis vel eros. Sed odio morbi quis commodo odio aenean. Suspendisse ultrices gravida dictum fusce ut placerat. Feugiat vivamus at augue eget. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Urna et pharetra pharetra massa massa ultricies mi. Netus et malesuada fames ac turpis. Massa placerat duis ultricies lacus sed turpis tincidunt id. Est velit egestas dui id ornare arcu odio ut sem.",
    "experience" : 3
};

export default function JobCard() {
    const [showFullAbout, setShowFullAbout] = React.useState(false);

    const toggleAbout = () => {
    setShowFullAbout(showFullAbout);
    };

    return (
    <Card sx={{ maxWidth: 320, minHeight: 450 }}>
    <CardContent>
        <div className="flex-row">
            <CardMedia
                    sx={{ height:65, width: 65 }}
                    image={jobData.logoUrl}
                    className="inline-div"
            />
            <div>
            <Typography className="company-name" component="div">
                {jobData.companyName}
            </Typography>
            <Typography variant="h6" component="div">
                {jobData.role}
            </Typography>
            <Typography variant="sub-text" component="div">
                {jobData.location}
            </Typography>
            </div>
        </div>
        <Typography sx={{ marginTop: 2}} variant="h8" component="div">
          Expected Salary: {jobData.salary}
        </Typography>
        <Typography
            sx={{ marginTop: 4, fontSize: 15 }}
            className="row"
            >
          {jobData.about}
        </Typography>
        <CardActions className="centered">
        <Button size="small">View job</Button>
        </CardActions>
        <Typography sx={{ marginTop: 2}} variant="h8" component="div">
            Minimum Experience: {jobData.experience}
        </Typography>
        </CardContent>
        <CardActions className="centered">
        <Button size="small">Apply</Button>
      </CardActions>
    </Card>
  );
}
