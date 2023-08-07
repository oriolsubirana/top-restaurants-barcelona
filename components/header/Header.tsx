import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export function Header() {
    return (
      <AppBar  position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Top Restaurants Barcelona
          </Typography>
        </Toolbar>
      </AppBar>
    )
}