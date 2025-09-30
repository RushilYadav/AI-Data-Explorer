import { useState } from "react";

export default function Dashboards() {
    //example datasets
    const datasets = ["Dataset A", "Dataset B", "Dataset C"];
    const [selectedDataset, setSelectedDataset] = useState(datasets[0]);

    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition space-y-6">
            <h3 className="text-xl font-semibold">Dashboards</h3>
            <p className="text-gray-600">
                Auto-generated dashboard panels based on the selected dataset.
            </p>

            {/* Dataset selector */}
            <div>
                <label className="block font-medium mb-2" htmlFor="dashboard-dataset-select">Select Dataset:</label>
                <select
                id="dashboard-dataset-select"
                value={selectedDataset}
                onChange={(e) => setSelectedDataset(e.target.value)}
                className="border-gray-300 border rounded p-2 w-full"
                >
                {datasets.map((dataset) => (
                    <option key={dataset} value={dataset}>{dataset}</option>
                ))}
                </select>
            </div>

            {/* Dashboard panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Chart Placeholder */}
                <div className="bg-gray-50 border rounded p-4">
                    <h4 className="font-semibold mb-2">Chart Title</h4>
                    <div className="h-40 flex items-center justify-center text-gray-400">
                        Chart Placeholder
                    </div>
                </div>

                {/* Metrics Card */}
                <div className="bg-gray-50 border rounded p-4">
                    <h4 className="font-semibold mb-2">Key Metrics</h4>
                    <ul className="space-y-1 text-gray-700">
                        <li>Data 1</li>
                        <li>Data 2</li>
                        <li>Data 3</li>
                    </ul>
                </div>

                {/* Anomalies and Predictions */}
                <div className="bg-gray-50 border rounded p-4 md:col-span-2">
                    <h4 className="font-semibold mb-2">Anomalies and Predictions</h4>
                    <p className="text-gray-700">
                        Example anomaly: example.
                    </p>
                    <p className="text-gray-700">
                        Example prediction: example.
                    </p>
                </div>
            </div>

            {/* Save button */}
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Save Dashboard
            </button>
        </div>
    );
}