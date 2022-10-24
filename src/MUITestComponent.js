import React from "react";
import {
  Container,
  Typography,
  Paper,
  Stack,
  Button,
  IconButton,
} from "@mui/material";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { orange } from "@mui/material/colors";
import { green } from "@mui/material/colors";

const MUITestComponent = () => {
  return (
    <Container sx={{ width: "75%", mt: 4 }}>
      <Stack direction="column" spacing={2}>
        <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h1">h1 text</Typography>
          <Typography variant="h2">h2 text</Typography>
          <Typography variant="h3">h3 text</Typography>
          <Typography variant="h4">h4 text</Typography>
          <Typography variant="h5">h5 text</Typography>
          <Typography variant="h6">h6 text</Typography>
          <Typography variant="body" sx={{ m: 2 }}>
            body text
          </Typography>
          <Typography variant="subtitle">subtitle text</Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 2, textAlign: "center", flexWrap: "wrap" }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "flex-start" }}
          >
            <Button variant="contained">Primary</Button>
            <Button variant="contained" color="secondary">
              Secondary Color
            </Button>
            <Button variant="oulined">Outlined Button</Button>
            <Button variant="text">Text Button</Button>
            <Button variant="text" color="secondary">
              Text Secondary Color
            </Button>
            <Button disabled>Disabled</Button>
            <Button variant="contained" onClick={() => alert("Clicked")}>
              Click!
            </Button>
          </Stack>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 2, textAlign: "center", flexWrap: "wrap" }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "space-evenly" }}
          >
            <Button variant="contained" color="success">
              SUCCESS
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="text" size="small">
              Small
            </Button>
            <Button variant="text" size="medium">
              Medium
            </Button>
            <Button variant="text" size="large">
              Large
            </Button>
            <Button variant="contained" startIcon={<LanguageOutlinedIcon />}>
              Explore
            </Button>
            <IconButton size="large" color="secondary">
              <ExploreOutlinedIcon />
            </IconButton>
          </Stack>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 2, textAlign: "center", flexWrap: "wrap" }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "space-evenly" }}
          >
            <AccessibilityOutlinedIcon color="primary" />
            <AccessibleOutlinedIcon sx={{ color: orange[500] }} />
            <ArrowForwardOutlinedIcon size="large" sx={{ color: green[600] }} />
            <ArrowBackOutlinedIcon size="large" sx={{ color: green[300] }} />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default MUITestComponent;
