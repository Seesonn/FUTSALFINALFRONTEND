import React from 'react';
import { Eye } from 'lucide-react';

const NewRequests = ({ requests, onReview, onViewAll, showAll }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">New Requests For Futsal-Court</h2>
        <button
          className="px-2 py-2 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition duration-150 ease-in-out  md:text-xs"
          onClick={onViewAll}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Futsal Name</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.futsalName} className="hover:bg-gray-200">
                <td className="px-2 py-2 whitespace-nowrap">{request.futsalName}</td>
                <td className="px-2 py-2 whitespace-nowrap">{request.location}</td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <button className="text-green-600 hover:text-green-800" onClick={() => onReview(request)}>
                    <Eye className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewRequests;

