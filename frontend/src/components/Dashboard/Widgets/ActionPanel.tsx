export default function ActionPanel() {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="font-semibold mb-2">Actions</h3>
      <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
        Generate Report
      </button>
      <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        Run Query
      </button>
    </div>
  );
}