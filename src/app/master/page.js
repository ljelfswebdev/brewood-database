"use client"

import { useState, useEffect } from 'react';
import jsonData from '../../../data/data.json';

const Master = () => {

const [isLoading, setIsLoading] = useState(true);
const [transformedData, setTransformedData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [mailingList, setMailingList] = useState([]);

const extractEmails = () => {
    const emails = transformedData.map(item => item.email);
    setMailingList(emails);
  };

useEffect(() => {
    // Simulate an asynchronous data fetch
    const fetchData = async () => {
      try {
        // Your actual data fetching logic here
        const mappedData = jsonData.map(item => ({
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          dob: item.DOB,
          homeNumber: item.homeNumber,
          mobileNumber: item.mobileNumber,
          emergencyContact: item.emergencyContact,
          emergencyContactNumber: item.emergencyContactNumber,
          premierDraw: item.premierDraw,
          juniorParent: item.juniorParent,
          firstChild: item.firstChild,
          secondChild: item.secondChild,
          thirdChild: item.thirdChild,
          fourthChild: item.fourthChild,
          player: item.player,
          ladies: item.ladies,
          committee: item.committee,
          lifeMember: item.lifeMember,
          trustee: item.trustee,
          elves: item.elves,
          coach: item.coach,
          patron: item.patron,
          dinnerInvite: item.dinnerInvite
        }));

        const sortedData = mappedData.sort((a, b) => {
          if (a.lastName === b.lastName) {
            return a.firstName.localeCompare(b.firstName);
          }
          return a.lastName.localeCompare(b.lastName);
        });

        setTransformedData(sortedData);
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
      emergencyContact: item.emergencyContact,
      emergencyContactNumber: item.emergencyContactNumber,
      premierDraw: item.premierDraw,
      juniorParent: item.juniorParent,
      firstChild: item.firstChild,
      secondChild: item.secondChild,
      thirdChild: item.thirdChild,
      fourthChild: item.fourthChild,
      player: item.player,
      ladies: item.ladies,
      committee: item.committee,
      lifeMember: item.lifeMember,
      trustee: item.trustee,
      elves: item.elves,
      coach: item.coach,
      patron: item.patron,
      dinnerInvite: item.dinnerInvite
    }));
    setTransformedData(mappedFilteredData);
  };

  const handleReset = () => {
    setSearchTerm('');
    setTransformedData(jsonData.map(item => ({
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      dob: item.DOB,
      homeNumber: item.homeNumber,
      mobileNumber: item.mobileNumber,
      emergencyContact: item.emergencyContact,
      emergencyContactNumber: item.emergencyContactNumber,
      premierDraw: item.premierDraw,
      juniorParent: item.juniorParent,
      firstChild: item.firstChild,
      secondChild: item.secondChild,
      thirdChild: item.thirdChild,
      fourthChild: item.fourthChild,
      player: item.player,
      ladies: item.ladies,
      committee: item.committee,
      lifeMember: item.lifeMember,
      trustee: item.trustee,
      elves: item.elves,
      coach: item.coach,
      patron: item.patron,
      dinnerInvite: item.dinnerInvite
    })));
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
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Emergency Contact
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Emergency Contact Number
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Premier Draw
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Junior Parent
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                First Child
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Second Child
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Third Child
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Fourth Child
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Player
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Ladies
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Committee
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Life Member
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Trustee
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Elves
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Coach
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Patron
            </li>
            <li className="font-bold h-8 flex items-center text-blue border-b-2 border-solid border-blue">
                Dinner Invite
            </li>

        </ul>
        <ul className="flex overflow-scroll">
          {transformedData.map((item, index) => (
           <li key={`${item.firstName}${item.lastName}`} className={`border-r-2 border-solid border-blue px-2 ${index % 2 === 0 ? 'bg-blueOpacity' : ''}`}>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.firstName}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.lastName}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.email}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.dob}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.homeNumber}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.mobileNumber}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.emergencyContact}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.emergencyContactNumber}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.premierDraw}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.juniorParent}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.firstChild}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.secondChild}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.thirdChild}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.fourthChild}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.player}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.ladies}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.committee}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.lifeMember}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.trustee}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.elves}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.coach}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.patron}</span>
                <span className="h-8 flex items-center border-b-2 border-solid border-blue">{item.dinnerInvite}</span>

            </li>

          ))}
        </ul>
        </div>
      )}

    <button onClick={extractEmails} className="button-base hover:button-hover my-10">
          Generate Mailing List
        </button>

        {mailingList.length > 0 && (
        <div className="mb-8">
          <h2>Mailing List:</h2>
          <ul>
            {mailingList.map((email, index) => (
              <li key={index}>{email},</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Master;
