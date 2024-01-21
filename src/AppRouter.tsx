import { Route, Routes } from "react-router-dom";
import { BalancesView, IntegrationsView, ActivityView, Costs } from "@/views";
import { Navbar, ViewLayout } from "@/components";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <ViewLayout>
        <Routes>
          <Route path="/" element={<BalancesView />} />
          <Route path="/activity" element={<ActivityView />} />
          <Route path="/integrations" element={<IntegrationsView />} />
          <Route path="/costs" element={<Costs />} />
        </Routes>
      </ViewLayout>
    </>
  );
};
export default AppRouter;
