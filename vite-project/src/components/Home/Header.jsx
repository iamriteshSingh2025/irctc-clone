import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Left Logo */}
      <div className="flex items-center">
        <img src="t1" alt="Indian Railways Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="text-blue-700 hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "/login",
              }}
            >
              LOGIN
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "/Register",
              }}
            >
              REGISTER
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "/agent login",
              }}
            >
              AGENT LOGIN
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "contact us",
              }}
            >
              CONTACT US
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: " help & support",
              }}
            >
              HELP & SUPPORT
            </Link>
          </li>
          <li className="text-red-600 font-bold cursor-pointer">
            <Link
              to={{
                pathname: "daily deals",
              }}
            >
              DAILY DEALS
            </Link>
          </li>
          <li className="bg-gray-200 px-2 py-1 rounded cursor-pointer">
            <Link
              to={{
                pathname: "aleart",
              }}
            >
              ALERTS
            </Link>
          </li>
        </ul>

        <br />

        <ul className="flex space-x-3 text-sm font-medium">
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "irctc exclusive",
              }}
            >
              IRCTC EXCLUSIVE
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "Pnrenquiry",
              }}
            >
              PNR Enquary
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "irctc ewallet",
              }}
            >
              IRCTC eWALLET
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "buses",
              }}
            >
              BUSES
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "flights",
              }}
            >
              FLIGHTS
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "hotels",
              }}
            >
              {" "}
              HOTELS
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to={{
              pathname: "holidays",
              }}
              >
              HOLIDAYS
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "meals",
              }}
            >
              {" "}
              MEALS
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "Promotion",
              }}
            >
              PROMOTION
            </Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link
              to={{
                pathname: "more",
              }}
            >
              MORE
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right Logo */}
      <div className="flex items-center">
        <img src="irctc.png" alt="IRCTC Logo" className="h-10 w-auto" />
      </div>
    </header>
  );
};

export default Header;
