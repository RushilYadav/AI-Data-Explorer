import React from "react";
import { useState } from "react";

type DatasetKey = "Dataset A" | "Dataset B" | "Dataset C";

export default function Insights() {

    //mock datasets for mvp
    const datasets: DatasetKey[] = [
        "Dataset A",
        "Dataset B",
        "Dataset C",
    ];

    const [selectedDataset, setSelectedDataset] = useState<DatasetKey>("Dataset A");

    //mock data for mvp
    const datasetInsights: Record<DatasetKey, { totalRows: number; totalColumns: number; anomalies: number }> = {
        "Dataset A": { totalRows: 1000, totalColumns: 10, anomalies: 3 },
        "Dataset B": { totalRows: 500, totalColumns: 8, anomalies: 2 },
        "Dataset C": { totalRows: 50, totalColumns: 2, anomalies: 1 },
    };

    //mock key takeaways for mvp
    const keyTakeaways: Record<DatasetKey, string[]> = {
        "Dataset A": [
            "Example takeaway 1 for Dataset A",
            "Example takeaway 2 for Dataset A",
            "Example takeaway 3 for Dataset A",
        ],
        "Dataset B": [
            "Example takeaway 1 for Dataset B",
            "Example takeaway 2 for Dataset B",
            "Example takeaway 3 for Dataset B",
        ],
        "Dataset C": [
            "Example takeaway 1 for Dataset C",
            "Example takeaway 2 for Dataset C",
            "Example takeaway 3 for Dataset C",
        ],
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition space-y-4">
            <h3 className="text-xl font-semibold mb-4">Dataset Insights</h3>

            <div>
                <label className="block font-medium mb-2" htmlFor="dataset-select">Select Dataset:</label>
                <select
                    id="dataset-select"
                    value={selectedDataset}
                    onChange={(e) => setSelectedDataset(e.target.value as DatasetKey)}
                    className="border-gray-300 border rounded p-2 w-full"
                >
                    {datasets.map((dataset) => (
                        <option key={dataset} value={dataset}>{dataset}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded">
                <p className="text-gray-700">Total rows: {datasetInsights[selectedDataset].totalRows}</p>
                <p className="text-gray-700">Total columns: {datasetInsights[selectedDataset].totalColumns}</p>
                <p className="text-gray-700">Anomalies: {datasetInsights[selectedDataset].anomalies}</p>
            </div>

            <div>
                <h4 className="font-semibold mb-2">Key Takeaways</h4>
                <ul className="list-disc list-inside space-y-1">
                    {keyTakeaways[selectedDataset].map((takeaway, index) => (
                        <li key={index} className="text-gray-700">{takeaway}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}