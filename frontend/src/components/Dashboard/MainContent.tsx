import Home from "./Widgets/Home";
import Insights from "./Widgets/Insights";
import Visualisations from "./Widgets/Visualisations";
import Dashboards from "./Widgets/Dashboards";
import Predictions from "./Widgets/Predictions";
import Collaboration from "./Widgets/Collaboration";
import Reports from "./Widgets/Reports";
import Settings from "./Widgets/Settings";

type MainContentProps = {
    active: string;
};

export default function MainContent({ active }: MainContentProps) {
    return (
        <main className="flex-1 p-6 bg-gray-200 overflow-auto">
            {active === "Home" && <Home />}
            {active === "Insights" && <Insights />}
            {active === "Visualisations" && <Visualisations />}
            {active === "Dashboards" && <Dashboards />}
            {active === "Predictions" && <Predictions />}
            {active === "Collaboration" && <Collaboration />}
            {active === "Reports" && <Reports />}
            {active === "Settings" && <Settings />}
        </main>
    );
}