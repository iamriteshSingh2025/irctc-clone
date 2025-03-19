import React from "react";
import { Link } from "react-router";

const TicketBooking = () => {
  return (
    <div className="w-1/2  m-10 p-4">
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="bg-[#213d77] w-89 h-10 flex items-center justify-center text-white text-xl font-semibold">
          <ul>
          <li> <Link to={{
            pathname: " /pnrstatus",
          }}>
            PNR STATUS </Link>
            </li>

          </ul>
           
          
        </div>
        <div className="bg-[#213d77] w-88 h-10 flex items-center justify-center text-white text-xl font-semibold">
          <ul>
            <li>
              <Link to={{
                pathname: "charts/vacancy",
              }}>CHARTS / VACANCY</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-[#213d77] font-bold text-2xl my-4">
        BOOK TICKET
      </h2>

      {/* Booking Form */}
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="from" placeholder="From" className="p-2 border w-full" />
          <input type="date" name="date" className="p-2 border w-full" />
          <input type="text" name="to" placeholder="To" className="p-2 border w-full" />
          <select name="class" className="p-2 border w-full">
            <option>All Classes</option>
            <option>First AC</option>
            <option>Second AC</option>
            <option>Third AC</option>
            <option>Sleeper</option>
          </select>
        </div>

        <select name="quota" className="p-2 border w-1/2">
          <option>GENERAL</option>
          <option>LADIES</option>
          <option>LOWER BERTH / SR.CITIZEN</option>
          <option>PERSON WITH DISABILITY</option>
          <option>DUTY PASS</option>
          <option>TATKAL</option>
          <option>PREMIUM TATKAL</option>
        </select>

        {/* Checkboxes */}
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Person With Disability Concession</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Flexible With Date</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Train with Available Berth</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Railway Pass Concession</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
          <button className="bg-[#f57c00] text-white px-4 py-2 rounded">Easy Booking on AskDISHA</button>
        </div>
      </form> <br /><br />
      <div className="w- w-full h-25 border flex">
        <div className=" text-blue-700">Customers can use enhanced interface for their IRCTC related queries!!</div>
        <div className=" "> https://equery.irctc.co.in</div> <br /> <br />
        <div className=" text-center text-red-600">Customer Care Numbers : 14646/08044647999 /08035734999</div>
      </div>
    </div>
  );
};

export default TicketBooking;
