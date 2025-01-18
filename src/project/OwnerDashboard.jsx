

import { useState } from 'react'
import { Menu, Search, Bell, LayoutDashboard, Settings, LogOut, ChevronDown, X, Plus } from 'lucide-react'
import { GiSoccerField, GiSoccerBall, GiWhistle, GiTrophyCup } from 'react-icons/gi'
import { FaCircle } from 'react-icons/fa'
import AddfutsalDetails from '../ownerDashboard/AddFutsalDetails'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const stats = [
    { title: "Total court", value: "1", icon: GiSoccerField },
    { title: "Total slots Booked", value: "1", icon: GiSoccerBall },
    { title: "Today's slots Booked", value: "1", icon: GiWhistle },
    { title: "Available slots", value: "1", icon: GiTrophyCup },
    { title: "Active Status", value: "Online", icon: FaCircle, color: "text-green-500" },
  ]

  const bookings = [
    { id: 1, name: "Sujan Bhattarai", phone: "9876543123", date: "21sep", time: "1-2 pm", status: "Booked" },
    { id: 2, name: "Sisan Bhattarai", phone: "9876547623", date: "21sep", time: "2-3 pm", status: "Cancelled" }
  ]

  const handleAddFutsal = (data) => {
    console.log('New Futsal Data:', data)
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[#0A1A3B] text-white transition-transform duration-200 ease-in-out z-30 lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold">OwnerDashboard</h1>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-600 transition-colors">
              <Settings className="h-5 w-5" />
              <span>Deactivate</span>
            </a>
            <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 w-full mt-8 transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-500 hover:text-gray-700">
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="h-5 w-5 text-gray-500 -ml-10" />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="flex-grow p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                  {stat.icon && <stat.icon className={`h-8 w-8 ${stat.color || 'text-green-500'}`} />}
                </div>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Booking Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Booking Details</h2>
              <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SN</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-200 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          booking.status === 'Booked' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add Button */}
        <div className="fixed bottom-6 right-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>ADD FUTSAL DETAILS</span>
          </button>
        </div>
      </div>

      {/* Add Futsal Modal */}
      <AddfutsalDetails isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddFutsal} />
    </div>
  )
}

