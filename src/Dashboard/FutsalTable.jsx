import React from 'react';
import { Edit, CircleSlash } from 'lucide-react';

const FutsalTable = ({ data, onDeactivate, onEdit, onViewAll, showAll }) => {
 
    // const tableBodyRef = useRef(null);
  
    // useEffect(() => {
    //   if (showAll && tableBodyRef.current) {
    //     tableBodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    //   }
    // }, [showAll]); if more futsal then scroll functionality after view
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl md:text-2xl  font-semibold text-gray-800">Futsal Venues</h2>
        <button
          className="px-2 py-2 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition duration-150 ease-in-out text-xs md:text-xs"
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
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner Name</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((futsal) => (
              <tr key={futsal.name} className="hover:bg-gray-200">
                <td className="px-2 py-2 whitespace-nowrap">{futsal.name}</td>
                <td className="px-2 py-2 whitespace-nowrap">{futsal.phone}</td>
                <td className="px-2 py-2 whitespace-nowrap">{futsal.owner}</td>
                <td className="px-2 py-2 whitespace-nowrap">{futsal.location}</td>
                <td className="px-2 py-2 whitespace-nowrap space-x-2">
                  <button className="text-gray-600 hover:text-gray-800" onClick={() => onEdit(futsal.name)}>
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => onDeactivate(futsal.name)}>
                    <CircleSlash className="h-5 w-5" />
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

export default FutsalTable;

