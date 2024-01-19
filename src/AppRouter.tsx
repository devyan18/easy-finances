import { Route, Routes } from "react-router-dom";
import { BalancesView, IntegrationsView, ActivityView } from "@/views";
import { CustomNavbar as Navbar, ViewLayout } from "@/components";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <ViewLayout>
        <Routes>
          <Route path="/" element={<BalancesView />} />
          <Route path="/activity" element={<ActivityView />} />
          <Route path="/integrations" element={<IntegrationsView />} />
        </Routes>
      </ViewLayout>
    </>
  );
};
export default AppRouter;
