import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Typography variant="h2" color={colors.greenAccent[400]}>
        {"👈 Press Menu Items to Begin"}
      </Typography>
    </Box>
  );
};

export default Dashboard;
