export default function Reports() {
    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Reports</h3>
            <p className="text-gray-700">This section will allow you to generate AI-powered reports from your datasets, insights, and visualisations.</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Automatically represent insights, anomalies, and predictions.</li>
                <li>Include saved visualisations and dashboards in the report.</li>
                <li>Download reports in formats such as PDF and PowerPoint.</li>
                <li>Save reports here for easy access and collaboration.</li>
            </ul>
            <p className="text-gray-700 mt-4">In the future, reports will be customizable, and exportable, making it simple to share findings.</p>
        </div>
    );
}