import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        width: "screen",
        borderRadius: "20px"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Boulder Flash
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Enhance climbing experience with session tracking, achievements, and social sharing.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography> 

            <Typography variant="body2" color="text.secondary">
              Email: woodrow7reese@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://github.com/woooocoder/boulder-flash/" color="inherit">
              <GitHub />
            </Link>

            <Link href="https://www.linkedin.com/in/reese-woodrow/" color="inherit">
                <LinkedIn />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}