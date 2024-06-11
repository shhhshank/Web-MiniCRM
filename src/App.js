import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Campaigns from "./scenes/campaigns";
import CampaignCreate from "./scenes/campaign-create";
import CommunicationLogs from "./scenes/communication-logs";
import Customers from "./scenes/customers";
import CustomerCreate from "./scenes/customer-create";
import Orders from "./scenes/orders";
import OrdersCreate from "./scenes/orders-create";
import Visits from "./scenes/visits";
import VisitsCreate from "./scenes/visits-create";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/create" element={<CampaignCreate />} />
              <Route path="/campaigns/communication-logs" element={<CommunicationLogs />} />

              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/create" element={<CustomerCreate />} />

              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/create" element={<OrdersCreate />} />

              <Route path="/visits" element={<Visits />} />
              <Route path="/visits/create" element={<VisitsCreate />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
