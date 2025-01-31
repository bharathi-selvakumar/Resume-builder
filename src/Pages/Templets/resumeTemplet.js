import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Button, Box} from '@mui/material';
import resume1 from "../../assets/TempletsImg/Resume1.png";
import { Link } from 'react-router-dom';
const templates = [
  {
    image: resume1,
    alt: "resume1",
    To: "/Resume-Data-Filling"
  },
  {
    image: resume1,
    alt: "resume2",
 
    To: "Resume-Data-Filling"

  },
  {
    image: resume1,
    alt: "resume3",
    To: "Resume-Data-Filling"

  },
  {
    image: resume1,
    alt: "resume4",
    To: "/resume-data-filling"
  },
];

function ResumeTemplet() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // console.log("Hovered index:", hoveredIndex);
  // console.log("Template route:", templates[hoveredIndex]?.To);


  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={3}>
        {templates.map((template, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'none',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={template.image}
                alt={template.alt}
                sx={{
                  width: 260,
                  height: 'auto',
                }}
              />
              {hoveredIndex === index && (
                    <Link to={template.To} key={index} style={{ textDecoration: 'none' }}>

                <Box
                  sx={{
                    position: 'absolute',
                    top: '85%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      size: 'small',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'scale(1.1)',
                        transition: 'transform 0.3s ease',
                      },
                    }}
                    
                  >
                    Use Template
                  </Button>
                </Box>
                </Link>

              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ResumeTemplet;