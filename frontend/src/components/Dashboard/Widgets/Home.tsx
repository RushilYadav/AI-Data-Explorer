export default function Home() {

//placeholder content for saved dashboards and reports
const savedDashboards = [
    { id: 1, name: "dashboard1" },
    { id: 2, name: "dashboard2" },
    { id: 3, name: "dashboard3" },
]

//mock
const totalDatasets = 12;

    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition space-y-6">
            <h3 className="text-xl font-semibold mb-4">Home</h3>
            <div>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-100 cursor-pointer">
                    Upload Dataset
                </button>
            </div>

            <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700">Total Datasets: {totalDatasets}</p>
            </div>

            <div>
                <h4 className="font-semibold mb-2">Saved Dashboards</h4>
                {savedDashboards.length > 0 ? (
                    <ul className="spcae-y-2">
                        {savedDashboards.map((dashboard) => (
                            <li key={dashboard.id} className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                                {dashboard.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No saved dashboards.</p>
                )}
            </div>
        </div>
    );
}