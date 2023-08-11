import Image from "next/image";
import {
  FaTruck,
  FaShippingFast,
  FaBan,
  FaRegCalendarCheck,
  FaCar,
  FaUserTie,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6 w-full h-full p-4">
      <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow">
        <FaTruck className="text-4xl mb-2" />
        <span className="text-xl text-center">Onboard Routes</span>
      </div>
      <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow relative">
        <FaShippingFast className="text-4xl mb-2" />
        <span className="text-xl text-center">In-transit Routes</span>
        <div className="bg-red-500 text-white w-6 h-6 rounded-full absolute top-2 right-2 flex items-center justify-center">
          4
        </div>
      </div>
      <div className="flex flex-col space-y-4 h-full">
        <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow h-full">
          <FaBan className="text-4xl mb-2" />
          <span className="text-xl text-center">
            Cancelled Client Deliveries
          </span>
        </div>
        <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow h-full">
          <FaBan className="text-4xl mb-2" />
          <span className="text-xl text-center">Cancelled Routes</span>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow relative">
        <FaRegCalendarCheck className="text-4xl mb-2" />
        <span className="text-xl text-center">Scheduled Routes</span>
        <div className="bg-red-500 text-white w-6 h-6 rounded-full absolute top-2 right-2 flex items-center justify-center">
          4
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow">
        <FaTruck className="text-4xl mb-2" />
        <span className="text-xl text-center">Completed Routes</span>
      </div>
      <div className="flex flex-col space-y-4 h-full">
        <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow h-full">
          <FaCar className="text-4xl mb-2" />
          <span className="text-xl text-center">Vehicles Management</span>
        </div>
        <div className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow h-full">
          <FaUserTie className="text-4xl mb-2" />
          <span className="text-xl text-center">Drivers Management</span>
        </div>
      </div>
    </div>
  );
}
