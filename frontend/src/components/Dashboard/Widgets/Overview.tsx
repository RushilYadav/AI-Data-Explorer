import React from "react";

export default function Overview() {
    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Dataset Overview</h3>
            <p>Number of datasets: 3</p>  {/* Example data */}
            <p>Total rows: 1500</p>   {/* Example data */}
            <p>Total columns: 12</p>   {/* Example data */}
        </div>
    );
}