import { Typography } from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function Education() {
  return (
    <section id="education" className="bg-black">
      <div className="container d-flex flex-column align-items-center py-2 py-md-5">
        <Typography
          data-aos="fade-up"
          data-aos-dutaion="1000"
          data-aos-delay="200"
          sx={{
            fontSize: { xs: 20, sm: 25, md: 30, lg: 40 },
            fontWeight: "bold",
            color: "white",
            marginBottom: "15px",
          }}
        >
          Education / Courses
        </Typography>
        <Timeline
          position="alternate-reverse"
          className="w-100 text-black"
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                data-aos="fade-up"
                data-aos-dutaion="1000"
                data-aos-delay="250"
                sx={{
                  fontSize: { xs: 8, sm: 15, md: 17.5, lg: 20 },
                  color: "white",
                }}
              >
                <div className="fw-bold">Full Stack Development Program</div>
                <div>Jun 2023 - Oct 2023</div>
                <div>GUVI GEEK Institute</div>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="error" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="w-100">
              <Typography
                data-aos="fade-up"
                data-aos-dutaion="1000"
                data-aos-delay="300"
                sx={{
                  fontSize: { xs: 8, sm: 15, md: 17.5, lg: 20 },
                  color: "white",
                }}
              >
                <div className="fw-bold">
                  Electronics and Communication Engineering
                </div>
                <div>K. L. N. College of Engineering</div>
                <div>2019 - 2023</div>
                <div>CGPA: 8.44</div>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                data-aos="fade-up"
                data-aos-dutaion="1000"
                data-aos-delay="350"
                sx={{
                  fontSize: { xs: 8, sm: 15, md: 17.5, lg: 20 },
                  color: "white",
                }}
              >
                <div className="fw-bold">HSC</div>
                <div>V.H.N. Higher Secondary School</div>
                <div>2018 - 2019</div>
                <div>Percentage: 72%</div>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                data-aos="fade-up"
                data-aos-dutaion="1000"
                data-aos-delay="400"
                sx={{
                  fontSize: { xs: 8, sm: 15, md: 17.5, lg: 20 },
                  color: "white",
                }}
              >
                <div className="fw-bold">SSLC</div>
                <div>Sivakasi Nadar Matriculation Higher Secondary School</div>
                <div>2016 - 2017</div>
                <div>Percentage: 87%</div>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}

export default Education;
