export default function Predictions() {
    //placeholder content
    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Predictions</h3>
            <p className="text-gray-700">This page will allow you to ask <strong>"what if"</strong> style questions about your datasets. For example:</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>“What if sales decrease by 20% next year?”</li>
                <li>“If customer satisfaction decreases by 5%, how does number of customers change?”</li>
                <li>“Which factor impacts profit the most?”</li>
            </ul>
            <p className="text-gray-700 mt-4">In the future, this will be an interactive chat interface that generates scenario-based insights and predictions.</p>
        </div>
    );
}