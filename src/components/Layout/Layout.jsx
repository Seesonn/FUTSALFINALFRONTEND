// import React, { useState } from 'react';
// import { Bell, Search, Menu } from 'lucide-react';
// import Sidebar from '../Dashboard/Slidebar';
// import StatsCard from '../Dashboard/StatsCard';
// import FutsalTable from '../Dashboard/FutsalTable';
// import NewRequests from '../Dashboard/NewRequest';
// import RequestReviewModal from '../Dashboard/RequestReivewModel';

// const statsData = [
//   { title: "Total Futsal", value: 50, type: "futsal" },
//   { title: "Total Booking", value: 150, type: "booking" },
//   { title: "Today's Booking", value: 30, type: "today" },
//   { title: "Active Futsal", value: 45, type: "active" },
// ];

// const allFutsalData = [
//   { name: "SD Futsal", phone: "9876543123", owner: "RAHUL", location: "BRT" },
//   { name: "Planet Futsal", phone: "9876547623", owner: "BIBEK", location: "ITH" },
//   { name: "Star Futsal", phone: "9876541234", owner: "ALEX", location: "KTM" },
//   { name: "Galaxy Futsal", phone: "9876549876", owner: "SARAH", location: "PKR" },
// ];

// const allNewRequests = [
//   { futsalName: "Star Futsal", location: "Ith" },
//   { futsalName: "Lord Futsal", location: "Brt" },
//   { futsalName: "Galaxy Futsal", location: "Ktm" },
//   { futsalName: "Neptune Futsal", location: "Pkr" },
// ];

// const Dashboard = () => {
//   const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [showAllFutsal, setShowAllFutsal] = useState(false);
//   const [showAllRequests, setShowAllRequests] = useState(false);

//   const handleReviewRequest = (request) => {
//     setSelectedRequest(request);
//     setIsReviewModalOpen(true);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleEdit = (name) => {
//     console.log("Edit", name);
//   };

//   const handleDeactivate = (name) => {
//     console.log("Deactivate", name);
//   };

//   const futsalData = showAllFutsal ? allFutsalData : allFutsalData.slice(0, 2);
//   const newRequests = showAllRequests ? allNewRequests : allNewRequests.slice(0, 2);

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//             <button
//               className="text-gray-500 hover:text-gray-600 lg:hidden"
//               onClick={toggleSidebar}
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//             <div className="relative w-64">
//               <input
//                 type="search"
//                 placeholder="Search..."
//                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//             <div className="flex items-center gap-4">
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <Bell className="h-5 w-5 text-gray-500" />
//               </button>
//               <div className="h-8 w-8 rounded-full bg-blue-500" />
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//           <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//             <div className="px-4 py-6 sm:px-0">
//               <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
//                 {statsData.map((stat) => (
//                   <StatsCard key={stat.type} {...stat} />
//                 ))}
//               </div>

//               <div className="grid gap-6 mb-8 md:grid-cols-2">
//                 <FutsalTable
//                   data={futsalData}
//                   onEdit={handleEdit}
//                   onDeactivate={handleDeactivate}
//                   onViewAll={() => setShowAllFutsal(!showAllFutsal)}
//                   showAll={showAllFutsal}
//                 />
//                 <NewRequests
//                   requests={newRequests}
//                   onReview={handleReviewRequest}
//                   onViewAll={() => setShowAllRequests(!showAllRequests)}
//                   showAll={showAllRequests}
//                 />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       <RequestReviewModal
//         isOpen={isReviewModalOpen}
//         onClose={() => setIsReviewModalOpen(false)}
//         onApprove={(data) => {
//           console.log("Approve", data);
//           setIsReviewModalOpen(false);
//         }}
//         onReject={() => {
//           console.log("Reject");
//           setIsReviewModalOpen(false);
//         }}
//       />
//     </div>
//   );
// };



























































// export default Dashboard;
// //Futsaltable.jsx
// import React from 'react';
// import { Edit2, XCircle } from 'lucide-react';

// const FutsalTable = ({ data, onDeactivate, onEdit, onViewAll, showAll }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="flex items-center justify-between p-4 border-b">
//         <h2 className="text-xl font-semibold text-gray-800">Futsal Venues</h2>
//         <button 
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
//           onClick={onViewAll}
//         >
//           {showAll ? "Show Less" : "View All"}
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Futsal Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Phone
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Owner Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Location
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {data.map((futsal) => (
//               <tr key={futsal.name} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.phone}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.owner}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.location}</td>
//                 <td className="px-6 py-4 whitespace-nowrap space-x-2">
//                   <button
//                     className="text-blue-600 hover:text-blue-800"
//                     onClick={() => onEdit(futsal.name)}
//                   >
//                     <Edit2 className="h-5 w-5" />
//                   </button>
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => onDeactivate(futsal.name)}
//                   >
//                     <XCircle className="h-5 w-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FutsalTable;

// //NewRequest.jsx
// import React from 'react';
// import { Eye } from 'lucide-react';

// const NewRequests = ({ requests, onReview, onViewAll, showAll }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="flex items-center justify-between p-4 border-b">
//         <h2 className="text-xl font-semibold text-gray-800">New Requests</h2>
//         <button 
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
//           onClick={onViewAll}
//         >
//           {showAll ? "Show Less" : "View All"}
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Futsal Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Location
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Options
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {requests.map((request) => (
//               <tr key={request.futsalName} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">{request.futsalName}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{request.location}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <button
//                     className="text-blue-600 hover:text-blue-800"
//                     onClick={() => onReview(request)}
//                   >
//                     <Eye className="h-5 w-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default NewRequests;

// //StatsCard.jsx
// import React from 'react';
// import { Building2, Calendar, Users, CheckCircle } from 'lucide-react';

// const icons = {
//   futsal: Building2,
//   booking: Calendar,
//   today: Users,
//   active: CheckCircle,
// };

// const StatsCard = ({ title, value, type }) => {
//   const Icon = icons[type];

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center justify-between transition-all duration-300 ease-in-out hover:shadow-lg">
//       <div>
//         <p className="text-sm font-medium text-gray-600">{title}</p>
//         <p className="text-2xl font-bold text-gray-900">{value}</p>
//       </div>
//       <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
//         <Icon className="h-6 w-6" />
//       </div>
//     </div>
//   );
// };

// export default StatsCard;

// //slidebar.jsx
// import React from 'react';
// import { LayoutDashboard, Settings, LogOut, X } from 'lucide-react';

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
//           onClick={onClose}
//         ></div>
//       )}
      
//       {/* Sidebar */}
//       <div className={`
//         fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 text-gray-100 
//         transition-transform duration-300 ease-in-out transform 
//         ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//         lg:translate-x-0 lg:static lg:z-auto
//       `}>
//         <div className="flex justify-between items-center p-4 border-b border-gray-800">
//           <h1 className="text-xl font-bold">Futsal Admin</h1>
//           <button onClick={onClose} className="lg:hidden">
//             <X className="h-6 w-6" />
//           </button>
//         </div>
        
//         <nav className="flex-1 p-4">
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
//                 <LayoutDashboard className="h-5 w-5" />
//                 <span>Dashboard</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out">
//                 <Settings className="h-5 w-5" />
//                 <span>Settings</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
        
//         <div className="p-4 border-t border-gray-800">
//           <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out w-full">
//             <LogOut className="h-5 w-5" />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;














// import React, { useState } from 'react'; 
// import { Bell, Search, Menu, LayoutDashboard, Settings, LogOut, X, Edit, 
//    Eye, Building,Bitcoin, Users, CheckCircle, CircleSlash} from 'lucide-react';
//    import { BsCurrencyBitcoin } from "react-icons/bs";
//    import { BsBootstrap } from "react-icons/bs";
//    import { GiGoalKeeper } from "react-icons/gi";
   
   

// // Sidebar Component
// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={onClose}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#04153F] text-gray-100 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}>
//         <div className="flex justify-between items-center p-4 border-b border-gray-800">
//           <h1 className="text-xl font-bold">Futsal Admin</h1>
//           <button onClick={onClose} className="lg:hidden">
//             <X className="h-6 w-6" />
//           </button>
//         </div>

//         <nav className="flex-1 p-4">
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-green-600 text-white text-sm md:text-base">
//                 <LayoutDashboard className="h-5 w-5" />
//                 <span>Dashboard</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-600 transition duration-150 ease-in-out text-sm md:text-base">
//                 <Settings className="h-5 w-5" />
//                 <span>Settings</span>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div className="p-4 border-t border-gray-800">
//           <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 transition duration-150 ease-in-out w-full text-sm md:text-base">
//             <LogOut className="h-5 w-5" />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// // StatsCard Component
// const StatsCard = ({ title, value, type }) => {
//   const icons = {
//     futsal: GiGoalKeeper,
//     booking: BsCurrencyBitcoin,
//     today: BsBootstrap,
//     active: CheckCircle,
//   };
//   const Icon = icons[type];

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center justify-between transition-all duration-300 ease-in-out hover:shadow-lg">
//       <div>
//         <p className="text-sm md:text-base font-medium text-gray-600">{title}</p>
//         <p className="text-xl md:text-2xl font-bold text-gray-900">{value}</p>
//       </div>
//       <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//         <Icon className="h-6 w-6" />
//       </div>
//     </div>
//   );
// };

// // FutsalTable Component
// const FutsalTable = ({ data, onDeactivate, onEdit, onViewAll, showAll }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="flex items-center justify-between p-4 border-b">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Futsal Venues</h2>
//         <button
//           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-150 ease-in-out text-sm md:text-base"
//           onClick={onViewAll}
//         >
//           {showAll ? "Show Less" : "View All"}
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className=" text-sm md:text-base">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Futsal Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {data.map((futsal) => (
//               <tr key={futsal.name} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.phone}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.owner}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{futsal.location}</td>
//                 <td className="px-6 py-4 whitespace-nowrap space-x-2">
//                   <button className="text-gray-600 hover:text-gray-800" onClick={() => onEdit(futsal.name)}>
//                     <Edit className="h-5 w-5 " />
//                   </button>
//                   <button className="text-red-600 hover:text-red-800" onClick={() => onDeactivate(futsal.name)}>
//                     <CircleSlash className="h-5 w-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // NewRequests Component
// const NewRequests = ({ requests, onReview, onViewAll, showAll }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="flex items-center justify-between p-4 border-b">
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">New Requests</h2>
//         <button
//           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-150 ease-in-out text-sm md:text-base"
//           onClick={onViewAll}
//         >
//           {showAll ? "Show Less" : "View All"}
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm md:text-base">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Futsal Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {requests.map((request) => (
//               <tr key={request.futsalName} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">{request.futsalName}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{request.location}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <button className="text-green-600 hover:text-blue-800" onClick={() => onReview(request)}>
//                     <Eye className="h-5 w-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // Dashboard Component
// const Dashboard = () => {
//   const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [showAllFutsal, setShowAllFutsal] = useState(false);
//   const [showAllRequests, setShowAllRequests] = useState(false);

//   const statsData = [
//     { title: "Total Futsal", value: 50, type: "futsal" },
//     { title: "Total Booking", value: 150, type: "booking" },
//     { title: "Today's Booking", value: 30, type: "today" },
//     { title: "Active Futsal", value: 45, type: "active" },
//   ];

//   const allFutsalData = [
//     { name: "SD Futsal", phone: "9876543123", owner: "RAHUL", location: "BRT" },
//     { name: "Planet Futsal", phone: "9876547623", owner: "BIBEK", location: "ITH" },
//     { name: "Star Futsal", phone: "9876541234", owner: "ALEX", location: "KTM" },
//     { name: "Galaxy Futsal", phone: "9876549876", owner: "SARAH", location: "PKR" },
  
//   ];

//   const allNewRequests = [
//     { futsalName: "Star Futsal", location: "Ith" ,contact:"982828282", ownername: "Sisan" },
//     { futsalName: "Lord Futsal", location: "Brt",contact:"9828277282" , ownername: "Ashim"},
//     { futsalName: "Galaxy Futsal", location: "Ktm",contact:"972824582", ownername: "Sagar" },
//     { futsalName: "Neptune Futsal", location: "Pkr",contact:"977828282", ownername: "Satash" },
//   ];

//   const handleReviewRequest = (request) => {
//     setSelectedRequest(request);
//     setIsReviewModalOpen(true);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleEdit = (name) => {
//     console.log("Edit", name);
//   };

//   const handleDeactivate = (name) => {
//     console.log("Deactivate", name);
//   };

//   const futsalData = showAllFutsal ? allFutsalData : allFutsalData.slice(0, 2);
//   const newRequests = showAllRequests ? allNewRequests : allNewRequests.slice(0, 2);

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//             <button className="text-gray-500 hover:text-gray-600 lg:hidden" onClick={toggleSidebar}>
//               <Menu className="h-6 w-6" />
//             </button>
//             <div className="relative w-64">
//               <input
//                 type="search"
//                 placeholder="Search..."
//                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//             <div className="flex items-center gap-4">
//               <button className="p-2 rounded-full hover:bg-gray-100">
//                 <Bell className="h-5 w-5 text-gray-500" />
//               </button>
//               <div className="h-8 w-8 rounded-full bg-blue-500" />
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//           <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//             <div className="px-4 py-6 sm:px-0">
//               <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
//                 {statsData.map((stat) => (
//                   <StatsCard key={stat.type} {...stat} />
//                 ))}
//               </div>

//               <div className="grid gap-6 mb-8 md:grid-cols-2">
//                 <FutsalTable
//                   data={futsalData}
//                   onEdit={handleEdit}
//                   onDeactivate={handleDeactivate}
//                   onViewAll={() => setShowAllFutsal(!showAllFutsal)}
//                   showAll={showAllFutsal}
//                 />
//                 <NewRequests
//                   requests={newRequests}
//                   onReview={handleReviewRequest}
//                   onViewAll={() => setShowAllRequests(!showAllRequests)}
//                   showAll={showAllRequests}
//                 />
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       <RequestReviewModal
//         isOpen={isReviewModalOpen}
//         onClose={() => setIsReviewModalOpen(false)}
//         onApprove={(data) => {
//           console.log("Approve", data);
//           setIsReviewModalOpen(false);
//         }}
//         onReject={() => {
//           console.log("Reject");
//           setIsReviewModalOpen(false);
//         }}
//         selectedRequest={selectedRequest}
//       />
//     </div>
//   );
// };

// // RequestReviewModal Component
// const RequestReviewModal = ({ isOpen, onClose, onApprove, onReject, selectedRequest }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-gray-800">Review Request</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <X className="h-6 w-6" />
//           </button>
//         </div>
//         {selectedRequest && (
//           <div className="mt-4 space-y-4">
//             <div>
//               <p className="text-sm font-medium text-gray-600">Futsal Name: <span className="font-semibold">{selectedRequest.futsalName}</span></p>
//               <p className="text-sm font-medium text-gray-600">Location: <span className="font-semibold">{selectedRequest.location}</span></p>
//               <p className="text-sm font-medium text-gray-600">Owner: <span className="font-semibold">{selectedRequest.ownername}</span></p>
//               <p className="text-sm font-medium text-gray-600">Contact: <span className="font-semibold">{selectedRequest.contact}</span></p>
//             </div>
//             <div className="flex justify-between gap-4 mt-6">
//               <button
//                 onClick={() => onApprove(selectedRequest)}
//                 className="bg-green-600 text-white p-2 rounded-md w-full hover:bg-green-700 transition duration-200"
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={onReject}
//                 className="bg-red-600 text-white p-2 rounded-md w-full hover:bg-red-700 transition duration-200"
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


