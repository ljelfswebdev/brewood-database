"use client"

import { useState, useEffect } from 'react';
import jsonData from '../../../data/data.json';

const Committee = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => {
//     const envUsername = process.env.NEXT_PUBLIC_USERNAME;
//     const envPassword = process.env.NEXT_PUBLIC_PASSWORD;

//     const username = prompt("Enter your username:");
//     const password = prompt("Enter your password:");

//     if (username === envUsername && password === envPassword) {
//       alert("Login successful!");
//       setIsLoggedIn(true);
//     } else {
//       alert("Invalid username or password. Please try again.");
//     }
//   };

//   if (!isLoggedIn) {Yes",
//     return (
//       <div className="overlay">
//         <p>Please log in to access the content.</p>
//         <button onClick={login} className="button-base hover:button-hover">Login</button>
//       </div>
//     );
//   }


const [isLoading, setIsLoading] = useState(true);
const [transformedData, setTransformedData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
    // Simulate an asynchronous data fetch
    const fetchData = async () => {
      try {
        // Your actual data fetching logic here
        const filteredCommitteeData = jsonData.filter(item => item.committee && item.committee.toLowerCase() === 'yes');

        const mappedData = filteredCommitteeData.map(item => ({
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          dob: item.DOB,
          homeNumber: item.homeNumber,
          mobileNumber: item.mobileNumber,
        }));

        setTransformedData(mappedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredData = jsonData.filter(item =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const mappedFilteredData = filteredData.map(item => ({
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      dob: item.DOB,
      homeNumber: item.homeNumber,
      mobileNumber: item.mobileNumber,
    }));
    setTransformedData(mappedFilteredData);
  };

  const handleReset = () => {
    setSearchTerm('');
    // Reset to the initially filtered committee data
    const filteredCommitteeData = jsonData.filter(item => item.committee && item.committee.toLowerCase() === 'yes');
    const mappedData = filteredCommitteeData.map(item => ({
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      dob: item.DOB,
      homeNumber: item.homeNumber,
      mobileNumber: item.mobileNumber,
    }));
    setTransformedData(mappedData);
  };
  return (
    <div>
      <div className="flex gap-4 mb-8">
        
        <input
          type="text"
          placeholder="Search by First Name or Last Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-solid border-2 border-blue px-4 rounded-2xl"
        />
        <button onClick={handleSearch} className="button-base hover:button-hover">Search</button>
        <button onClick={handleReset} className="button-reset hover:button-hover">Reset</button>
        </div>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
        <div className="flex">
        <ul className="flex flex-col min-w-60 border-r-2 border-solid border-blue pr-4 bg-white">
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                First Name
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Last Name
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Email
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Date of Birth
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Home Number
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Mobile Number
            </li>

        </ul>
        <ul className="flex overflow-scroll">
          {transformedData.map((item) => (
            <li key={`${item.firstName}${item.lastName}`} className="border-r-2 border-solid border-blue px-2">
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.firstName}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.lastName}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.email}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.dob}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.homeNumber}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.mobileNumber}</span>
            </li>

          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default Committee;