import React, { useState } from "react";

//define dataset keys type
type DatasetKey = "Dataset A" | "Dataset B" | "Dataset C";

export default function Visualisations() {
    //mock datasets
    const datasets: DatasetKey[] = ["Dataset A", "Dataset B", "Dataset C"];

    //mock dataset columns
    const datasetColumns: Record<DatasetKey, string[]> = {
        "Dataset A": ["A", "B", "C", "D"],
        "Dataset B": ["Campaign", "Spend", "CTR", "Conversions"],
        "Dataset C": ["CustomerID", "Age", "Churn", "Revenue"],
    };

    //chart types
    const chartTypes = ["Bar", "Line", "Pie", "Scatter"];

    //states
    const [selectedDataset, setSelectedDataset] = useState<DatasetKey>("Dataset A");
    const [selectedChart, setSelectedChart] = useState(chartTypes[0]);
    const [xAxis, setXAxis] = useState(datasetColumns["Dataset A"][0]);
    const [yAxis, setYAxis] = useState(datasetColumns["Dataset A"][1]);
    const [savedMessage, setSavedMessage] = useState("");

    //handle save to report (placeholder)
    const handleSave = () => {
        setSavedMessage(`Saved ${selectedChart} chart of ${selectedDataset} to report!`);
        setTimeout(() => setSavedMessage(""), 5000); //clears after 5s
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition space-y-6">
            <h3 className="text-xl font-semibold">Visualisations</h3>

            {/* Dataset selector */}
            <div>
                <label className="block font-medium mb-2" htmlFor="dataset-select">Select Dataset:</label>
                <select
                id="dataset-select"
                value={selectedDataset}
                onChange={(e) => {
                    const newDataset = e.target.value as DatasetKey;
                    setSelectedDataset(newDataset);
                    //reset axes when dataset changes
                    setXAxis(datasetColumns[newDataset][0]);
                    setYAxis(datasetColumns[newDataset][1]);
                }}
                className="border-gray-300 border rounded p-2 w-full"
                >
                    {datasets.map((dataset) => (
                    <option key={dataset} value={dataset}>{dataset}</option>
                ))}
                </select>
            </div>

            {/* Chart type selector */}
            <div>
                <label className="block font-medium mb-2" htmlFor="chart-type">Select Chart Type:</label>
                <select
                    id="chart-type"
                    value={selectedChart}
                    onChange={(e) => setSelectedChart(e.target.value)}
                    className="border-gray-300 border rounded p-2 w-full"
                >
                    {chartTypes.map((chart) => (
                    <option key={chart} value={chart}>{chart}</option>
                ))}
                </select>
            </div>

            {/* Axis selector */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium mb-2" htmlFor="x-axis">X-Axis:</label>
                    <select
                        id="x-axis"
                        value={xAxis}
                        onChange={(e) => setXAxis(e.target.value)}
                        className="border-gray-300 border rounded p-2 w-full"
                    >
                        {datasetColumns[selectedDataset].map((col) => (
                        <option key={col} value={col}>{col}</option>
                        ))}
                </select>
                </div>
            

                <div>
                    <label className="block font-medium mb-2" htmlFor="y-axis">Y-Axis:</label>
                    <select
                        id="y-axis"
                        value={yAxis}
                        onChange={(e) => setYAxis(e.target.value)}
                        className="border-gray-300 border rounded p-2 w-full"
                    >
                        {datasetColumns[selectedDataset].map((col) => (
                        <option key={col} value={col}>{col}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Chart preview */}
            <div className="bg-gray-50 border rounded p-6 text-center">
                <p className="text-gray-700">Mock {selectedChart} chart of <strong>{selectedDataset}</strong> with X ={" "}<strong>{xAxis}</strong>, Y = <strong>{yAxis}</strong></p>
            </div>

            {/* Save to Report */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
                >
                    Save to Report
                </button>
                {savedMessage && <span>{savedMessage}</span>}
            </div>

            {/* Suggested charts */}
            <div>
                <h4 className="font-semibold mb-2">Other Suggested Charts</h4>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                </ul>
            </div>
        </div>
    );
}