import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";


export default function Header() {
return (
	<AppBar
        position="fixed"
        color="secondary"
        enableColorOnDark="true"
        >
			  <Button color="inherit"
                size="String"
                fullWidth="bool"
                href="https://cronosnauts.space/"
                sx={{ mr: 10 }}
                >SPACESHIP</Button>
	</AppBar>
);
}

