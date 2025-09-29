import Overview from "./Widgets/Overview";
import Queries from "./Widgets/Queries";
import Charts from "./Widgets/Charts";
import SavedReports from "./Widgets/SavedReports";
import ActionPanel from "./Widgets/ActionPanel";

export default function MainContent() {
    return (
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Overview />
                <Queries />
                <Charts />
                <SavedReports />
                <ActionPanel />
            </div>
        </main>
    );
}