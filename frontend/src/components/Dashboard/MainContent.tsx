import Home from "./Widgets/Home";
import Insights from "./Widgets/Insights";
import Visualisations from "./Widgets/Visualisations";
import Dashboards from "./Widgets/Dashboards";
import Predictions from "./Widgets/Predictions";
import Collaboration from "./Widgets/Collaboration";
import Reports from "./Widgets/Reports";
import Settings from "./Widgets/Settings";

export default function MainContent() {
    return (
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Home />
                <Insights />
                <Visualisations />
                <Dashboards />
                <Predictions />
                <Collaboration />
                <Reports />
                <Settings />
            </div>
        </main>
    );
}