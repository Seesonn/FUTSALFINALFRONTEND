import React from 'react';
import { X } from 'lucide-react';

const RequestReviewModal = ({ isOpen, onClose, onApprove, onReject, selectedRequest }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Review Request</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        {selectedRequest && (
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Futsal Name: <span className="font-semibold">{selectedRequest.futsalName}</span></p>
              <p className="text-sm font-medium text-gray-600">Location: <span className="font-semibold">{selectedRequest.location}</span></p>
              <p className="text-sm font-medium text-gray-600">Owner: <span className="font-semibold">{selectedRequest.ownername}</span></p>
              <p className="text-sm font-medium text-gray-600">Contact: <span className="font-semibold">{selectedRequest.contact}</span></p>
            </div>
            <div className="flex justify-between gap-4 mt-6">
              <button
                onClick={() => onApprove(selectedRequest)}
                className="bg-green-600 text-white p-2 rounded-md w-full hover:bg-green-700 transition duration-200"
              >
                Approve
              </button>
              <button
                onClick={onReject}
                className="bg-red-600 text-white p-2 rounded-md w-full hover:bg-red-700 transition duration-200"
              >
                Reject
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestReviewModal;

