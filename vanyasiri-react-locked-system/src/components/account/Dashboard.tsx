"use client";

import { useState } from "react";
import { User, Package, MapPin, LogOut, ChevronRight, CheckCircle2 } from "lucide-react";

// Mock data
const MOCK_USER = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    memberSince: "January 2024"
};

const MOCK_ORDERS = [
    {
        id: "VS-10492",
        date: "March 5, 2024",
        status: "In Transit",
        total: "₹1,500.00",
        items: [
            { name: "Natural Navaratna Stone Set", qty: 1 }
        ],
        trackingSteps: [
            { status: "Order Placed", date: "Mar 5, 10:30 AM", completed: true },
            { status: "Processing", date: "Mar 5, 02:15 PM", completed: true },
            { status: "Shipped", date: "Mar 6, 09:00 AM", completed: true },
            { status: "Out for Delivery", date: "Expected Mar 8", completed: false },
            { status: "Delivered", date: "Pending", completed: false },
        ]
    },
    {
        id: "VS-09881",
        date: "February 12, 2024",
        status: "Delivered",
        total: "₹450.00",
        items: [
            { name: "Rala Dhoopa", qty: 2 }
        ],
        trackingSteps: [
            { status: "Order Placed", date: "Feb 12", completed: true },
            { status: "Processing", date: "Feb 12", completed: true },
            { status: "Shipped", date: "Feb 13", completed: true },
            { status: "Out for Delivery", date: "Feb 14", completed: true },
            { status: "Delivered", date: "Feb 14, 04:30 PM", completed: true },
        ]
    }
];

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
    const [activeTab, setActiveTab] = useState("orders");
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

    return (
        <div className="container mx-auto px-4 md:px-8 py-12 lg:py-20 min-h-[70vh]">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar Navigation */}
                <div className="w-full lg:w-1/4">
                    <div className="bg-white border border-gray-100 p-6 shadow-sm rounded-sm mb-6">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                            <div className="w-12 h-12 bg-[#546247] rounded-full flex items-center justify-center text-white text-xl font-serif">
                                {MOCK_USER.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-serif text-[#2A2E26] text-lg leading-tight">{MOCK_USER.name}</h3>
                                <p className="text-xs text-gray-500">Member since {MOCK_USER.memberSince}</p>
                            </div>
                        </div>

                        <nav className="space-y-1">
                            <button
                                onClick={() => { setActiveTab("orders"); setSelectedOrder(null); }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${activeTab === "orders" ? "bg-[#F5F7F2] text-[#546247] font-semibold border-l-2 border-[#546247]" : "text-gray-600 hover:bg-gray-50"}`}
                            >
                                <span className="flex items-center gap-3"><Package size={18} /> My Orders</span>
                                <ChevronRight size={16} className="text-gray-400" />
                            </button>
                            <button
                                onClick={() => { setActiveTab("profile"); setSelectedOrder(null); }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${activeTab === "profile" ? "bg-[#F5F7F2] text-[#546247] font-semibold border-l-2 border-[#546247]" : "text-gray-600 hover:bg-gray-50"}`}
                            >
                                <span className="flex items-center gap-3"><User size={18} /> Profile Details</span>
                                <ChevronRight size={16} className="text-gray-400" />
                            </button>
                            <button
                                onClick={() => { setActiveTab("addresses"); setSelectedOrder(null); }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${activeTab === "addresses" ? "bg-[#F5F7F2] text-[#546247] font-semibold border-l-2 border-[#546247]" : "text-gray-600 hover:bg-gray-50"}`}
                            >
                                <span className="flex items-center gap-3"><MapPin size={18} /> Saved Addresses</span>
                                <ChevronRight size={16} className="text-gray-400" />
                            </button>
                            <button
                                onClick={onLogout}
                                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 mt-4 transition-colors"
                            >
                                <LogOut size={18} /> Sign Out
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="w-full lg:w-3/4">

                    {/* Orders Tab */}
                    {activeTab === "orders" && !selectedOrder && (
                        <div className="bg-white border border-gray-100 p-6 md:p-8 shadow-sm rounded-sm">
                            <h2 className="text-2xl font-serif text-[#546247] uppercase tracking-wider mb-6">Order History</h2>

                            <div className="space-y-6">
                                {MOCK_ORDERS.map((order) => (
                                    <div key={order.id} className="border border-gray-200 rounded-sm overflow-hidden">
                                        {/* Order Header */}
                                        <div className="bg-gray-50 p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                            <div className="flex gap-8">
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Order Placed</p>
                                                    <p className="text-sm text-[#2A2E26]">{order.date}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Total</p>
                                                    <p className="text-sm text-[#2A2E26] font-semibold">{order.total}</p>
                                                </div>
                                            </div>
                                            <div className="text-left sm:text-right">
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Order #</p>
                                                <p className="text-sm text-[#546247] font-mono">{order.id}</p>
                                            </div>
                                        </div>

                                        {/* Order Body */}
                                        <div className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                            <div>
                                                <h4 className="font-semibold text-[#2A2E26] mb-2">{order.status === "Delivered" ? "Delivered" : "Arriving Soon"}</h4>
                                                <ul className="space-y-1">
                                                    {order.items.map((item, idx) => (
                                                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#B38F52]"></span>
                                                            {item.qty}x {item.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="w-full md:w-auto flex flex-col gap-3">
                                                <button
                                                    onClick={() => setSelectedOrder(order.id)}
                                                    className="w-full md:w-auto bg-[#546247] hover:bg-[#435038] text-white px-6 py-2.5 text-xs uppercase tracking-wider transition-colors shadow-sm">
                                                    Track Package
                                                </button>
                                                <button className="w-full md:w-auto border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 text-xs uppercase tracking-wider transition-colors">
                                                    View Invoice
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Order Tracking Detail View */}
                    {activeTab === "orders" && selectedOrder && (
                        <div className="bg-white border border-gray-100 p-6 md:p-8 shadow-sm rounded-sm">
                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="text-sm text-[#546247] hover:underline mb-6 flex items-center gap-1"
                            >
                                ← Back to Orders
                            </button>

                            {/* Find currently selected order */}
                            {MOCK_ORDERS.filter(o => o.id === selectedOrder).map(order => (
                                <div key={order.id}>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-serif text-[#2A2E26] tracking-wide mb-1">Order Details #{order.id}</h2>
                                        <p className="text-sm text-gray-500">Placed on {order.date}</p>
                                    </div>

                                    {/* Tracking Timeline */}
                                    <div className="bg-gray-50 p-6 md:p-10 rounded-sm border border-gray-200 mb-8">
                                        <h3 className="font-semibold text-[#546247] uppercase tracking-wider text-sm mb-8">Tracking Status</h3>

                                        <div className="relative">
                                            {/* Vertical Line connecting steps */}
                                            <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                                            <div className="space-y-8 relative">
                                                {order.trackingSteps.map((step, idx) => (
                                                    <div key={idx} className="flex items-start gap-6">
                                                        <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${step.completed ? 'bg-[#546247] text-white' : 'bg-gray-200 text-gray-400'}`}>
                                                            {step.completed ? <CheckCircle2 size={16} /> : <div className="w-2 h-2 rounded-full bg-gray-400"></div>}
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className={`font-medium ${step.completed ? 'text-[#2A2E26]' : 'text-gray-500'}`}>{step.status}</p>
                                                            <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div>
                                        <h3 className="font-semibold text-[#2A2E26] border-b border-gray-200 pb-3 mb-4">Items Summary</h3>
                                        <div className="space-y-4">
                                            {order.items.map((item, idx) => (
                                                <div key={idx} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-700">{item.qty}x {item.name}</span>
                                                    <span className="text-gray-500 text-xs">Pricing Details</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                                            <span className="font-semibold text-gray-700 uppercase tracking-wider text-sm">Order Total</span>
                                            <span className="text-xl font-semibold text-[#546247]">{order.total}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Profile Tab */}
                    {activeTab === "profile" && (
                        <div className="bg-white border border-gray-100 p-6 md:p-8 shadow-sm rounded-sm">
                            <h2 className="text-2xl font-serif text-[#546247] uppercase tracking-wider mb-6">Profile Details</h2>
                            <form className="max-w-xl space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Full Name</label>
                                    <input type="text" defaultValue={MOCK_USER.name} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#546247] bg-transparent transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Email Address</label>
                                    <input type="email" defaultValue={MOCK_USER.email} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#546247] bg-transparent transition-colors" disabled />
                                    <p className="text-xs text-gray-400 mt-1">Email address cannot be changed</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Phone Number</label>
                                    <input type="tel" defaultValue={MOCK_USER.phone} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#546247] bg-transparent transition-colors" />
                                </div>
                                <button type="button" className="mt-8 bg-[#546247] text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#435038] transition-colors shadow-sm">
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Addresses Tab */}
                    {activeTab === "addresses" && (
                        <div className="bg-white border border-gray-100 p-6 md:p-8 shadow-sm rounded-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-[#546247] uppercase tracking-wider">Saved Addresses</h2>
                                <button className="text-xs bg-gray-100 hover:bg-gray-200 text-[#2A2E26] px-4 py-2 font-semibold uppercase tracking-wider transition-colors">
                                    + Add New
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border border-[#546247] rounded-sm p-4 relative bg-green-50/30">
                                    <span className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider px-2 py-1 rounded">Default</span>
                                    <h4 className="font-semibold text-[#2A2E26] mb-2">{MOCK_USER.name}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Devarayanandurga, State Forest,<br />
                                        Urdigere Post, Tumkur Taluk & Dist<br />
                                        Karnataka, India 572104
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">Ph: {MOCK_USER.phone}</p>
                                    <div className="mt-4 flex gap-4 text-xs font-semibold uppercase tracking-wider">
                                        <button className="text-[#546247] hover:underline">Edit</button>
                                        <button className="text-red-500 hover:underline">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
