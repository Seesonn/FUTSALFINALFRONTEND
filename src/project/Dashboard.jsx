
import React, { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import Sidebar from '../Dashboard/Sidebar';
import StatsCard from '../Dashboard/StatsCard';
import FutsalTable from '../Dashboard/FutsalTable';
import NewRequests from '../Dashboard/NewRequests';
import RequestReviewModal from '../Dashboard/RequestReivewModal';

const Dashboard = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAllFutsal, setShowAllFutsal] = useState(false);
  const [showAllRequests, setShowAllRequests] = useState(false);

  const statsData = [
    { title: "Total Futsal", value: 50, type: "futsal" },
    { title: "Total Booking", value: 150, type: "booking" },
    { title: "Today's Booking", value: 30, type: "today" },
    { title: "Active Futsal", value: 45, type: "active" },
  ];

  const allFutsalData = [
    { name: "SD Futsal", phone: "9876543123", owner: "RAHUL", location: "BRT" },
    { name: "Planet Futsal", phone: "9876547623", owner: "BIBEK", location: "ITH" },
    { name: "Star Futsal", phone: "9876541234", owner: "ALEX", location: "KTM" },
    { name: "Galaxy Futsal", phone: "9876549876", owner: "SARAH", location: "PKR" },
    { name: "Planet Futsal", phone: "9876547623", owner: "BIBEK", location: "ITH" },
    { name: "Star Futsal", phone: "9876541234", owner: "ALEX", location: "KTM" },
   
    
    
  ];

  const allNewRequests = [
    { futsalName: "Star Futsal", location: "Ith", contact: "982828282", ownername: "Sisan" },
    { futsalName: "Lord Futsal", location: "Brt", contact: "9828277282", ownername: "Ashim" },
    { futsalName: "Galaxy Futsal", location: "Ktm", contact: "972824582", ownername: "Sagar" },
    { futsalName: "Neptune Futsal", location: "Pkr", contact: "977828282", ownername: "Satash" },
    { futsalName: "Lord Futsal", location: "Brt", contact: "9828277282", ownername: "Ashim" },
    { futsalName: "Galaxy Futsal", location: "Ktm", contact: "972824582", ownername: "Sagar" },
   
  ];

  const handleReviewRequest = (request) => {
    setSelectedRequest(request);
    setIsReviewModalOpen(true);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEdit = (name) => {
    console.log("Edit", name);
  };

  const handleDeactivate = (name) => {
    console.log("Deactivate", name);
  };

  const futsalData = showAllFutsal ? allFutsalData : allFutsalData.slice(0, 2);
  const newRequests = showAllRequests ? allNewRequests : allNewRequests.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button className="text-gray-500 hover:text-gray-600 lg:hidden" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </button>
            <div className="relative w-64">
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-500" />
              </button>
              <div className="h-8 w-8 rounded-full bg-green-500" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4 ">
                {statsData.map((stat) => (
                  <StatsCard key={stat.type} {...stat} />
                ))}
              </div>
              

              <div className="grid gap-6 mb-8 md:grid-cols-2">
                <FutsalTable
                  data={futsalData}
                  onEdit={handleEdit}
                  onDeactivate={handleDeactivate}
                  onViewAll={() => setShowAllFutsal(!showAllFutsal)}
                  showAll={showAllFutsal}
                />
                <NewRequests
                  requests={newRequests}
                  onReview={handleReviewRequest}
                  onViewAll={() => setShowAllRequests(!showAllRequests)}
                  showAll={showAllRequests}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <RequestReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onApprove={(data) => {
          console.log("Approve", data);
          setIsReviewModalOpen(false);
        }}
        onReject={() => {
          console.log("Reject");
          setIsReviewModalOpen(false);
        }}
        selectedRequest={selectedRequest}
      />
    </div>
  );
};

export default Dashboard;
