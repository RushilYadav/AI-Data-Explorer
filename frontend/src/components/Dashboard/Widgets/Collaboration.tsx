export default function Collaboration() {
    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
            <p className="text-gray-700">This page will enable real-time collaboration within shared dashboards.</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Chat with team members in the dashboard.</li>
                <li>Leave comments and annotations on charts or insights for others to see.</li>
                <li>See who else is in the same shared dashboard.</li>
                <li>Track recent activity and changes.</li>
            </ul>
            <p className="text-gray-700 mt-4">In the future, this will support live chat and shared editing.</p>
        </div>
    );
}