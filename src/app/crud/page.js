"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    DOB: '',
    homeNumber: '',
    mobileNumber: '',
    emergencyContact: '',
    emergencyContactNumber: '',
    premierDraw: 0,
    juniorParent: false,
    firstChild: '',
    secondChild: '',
    thirdChild: '',
    fourthChild: '',
    player: false,
    ladies: false,
    committee: false,
    lifeMember: false,
    trustee: false,
    elves: false,
    coach: false,
    patron: false,
    dinnerInvite: false,
  });

  const [editingPerson, setEditingPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch all persons when the component mounts
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/api/persons`)
      .then(response => setPersons(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (event) => {
  const { name, value, type, checked } = event.target;
  const newValue = type === 'checkbox' ? checked : value;

  setNewPerson({
    ...newPerson,
    [name]: newValue,
  });
};

  const handleAddPerson = () => {
    // Add a new person
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/persons`, newPerson)
      .then(response => {
        setPersons([...persons, response.data]);
        setNewPerson({
          firstName: '',
          lastName: '',
          email: '',
          DOB: '',
          homeNumber: '',
          mobileNumber: '',
          emergencyContact: '',
          emergencyContactNumber: '',
          premierDraw: 0,
          juniorParent: false,
          firstChild: '',
          secondChild: '',
          thirdChild: '',
          fourthChild: '',
          player: false,
          ladies: false,
          committee: false,
          lifeMember: false,
          trustee: false,
          elves: false,
          coach: false,
          patron: false,
          dinnerInvite: false,
        });
      })
      .catch(error => console.error(error));
  };

  const handleEditPerson = (id) => {
    const personToEdit = persons.find(person => person._id === id);
    setEditingPerson(personToEdit);
  
    // Parse boolean values from strings
    const editedPerson = {
      ...personToEdit,
      juniorParent: personToEdit.juniorParent === "true",
      player: personToEdit.player === "true",
      ladies: personToEdit.ladies === "true",
      committee: personToEdit.committee === "true",
      lifeMember: personToEdit.lifeMember === "true",
      trustee: personToEdit.trustee === "true",
      elves: personToEdit.elves === "true",
      coach: personToEdit.coach === "true",
      patron: personToEdit.patron === "true",
      dinnerInvite: personToEdit.dinnerInvite === "true",
    };
  
    setNewPerson(editedPerson);
  };
  
  
  

  const handleSavePerson = () => {
    // Update an existing person
    axios.put(`${process.env.NEXT_PUBLIC_BACKEND}/api/persons/${editingPerson._id}`, newPerson)
      .then(response => {
        const updatedPersons = persons.map(person => (person._id === editingPerson._id ? response.data : person));
        setPersons(updatedPersons);
        setEditingPerson(null);

        // Reset form fields
        setNewPerson({
          firstName: '',
          lastName: '',
          email: '',
          DOB: '',
          homeNumber: '',
          mobileNumber: '',
          emergencyContact: '',
          emergencyContactNumber: '',
          premierDraw: 0,
          juniorParent: false,
          firstChild: '',
          secondChild: '',
          thirdChild: '',
          fourthChild: '',
          player: false,
          ladies: false,
          committee: false,
          lifeMember: false,
          trustee: false,
          elves: false,
          coach: false,
          patron: false,
          dinnerInvite: false,
        });
      })
      .catch(error => console.error(error));
  };

  const handleDeletePerson = (id) => {
    // Delete a person
    axios.delete(`${process.env.NEXT_PUBLIC_BACKEND}/api/persons/${id}`)
      .then(() => setPersons(persons.filter(person => person._id !== id)))
      .catch(error => console.error(error));
  };

  const filteredPersons = persons.filter(person => {
    const fullName = `${person.firstName} ${person.lastName}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1 className="mb-4 text-2xl text-darkBlue font-bold">Brewood Database</h1>
      <input type="text" className="mb-4 border border-solid border-blue border-2 py-2 px-4 rounded-2xl" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      {searchQuery && (
        <ul>
          {filteredPersons.map(person => (
            <li key={person._id} className='flex gap-4 items-center'>
              {person.firstName} {person.lastName}
              <button className="button-base hover:button-hover my-10" onClick={() => handleEditPerson(person._id)}>Edit</button>
              <button className="button-delete hover:button-hover my-10" onClick={() => handleDeletePerson(person._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <h2 className="mb-4 text-xl text-blue font-bold">{editingPerson ? `Edit: ${editingPerson.firstName} ${editingPerson.lastName}` : 'Add Person'}</h2>
      <div className="flex gap-8 flex-wrap">
            <div className="flex flex-col gap-1">
            <label htmlFor="firstName">First Name</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1" type="text" name="firstName" placeholder="First Name" value={newPerson.firstName} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="lastName">Last Name</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="lastName" placeholder="Last Name" value={newPerson.lastName} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="email" placeholder="Email" value={newPerson.email} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="DOB">Date of Birth</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="DOB" placeholder="Date of Birth" value={newPerson.DOB} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="homeNumber">Home Number</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="homeNumber" placeholder="Home Number" value={newPerson.homeNumber} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="mobileNumber" placeholder="Mobile Number" value={newPerson.mobileNumber} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="emergencyContact">Emergency Contact</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="emergencyContact" placeholder="Emergency Contact" value={newPerson.emergencyContact} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="emergencyContactNumber" placeholder="Emergency Contact Number" value={newPerson.emergencyContactNumber} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="premierDraw">Premier Draw</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="number" name="premierDraw" placeholder="Premier Draw" value={newPerson.premierDraw} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="juniorParent">Junior Parent</label>
            <input type="checkbox" name="juniorParent" checked={newPerson.juniorParent} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="firstChild">First Child</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="firstChild" placeholder="First Child" value={newPerson.firstChild} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="secondChild">Second Child</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="secondChild" placeholder="Second Child" value={newPerson.secondChild} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="thirdChild">Third Child</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="thirdChild" placeholder="Third Child" value={newPerson.thirdChild} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="fourthChild">Fourth Child</label>
            <input className="border border-2 border-darkBlue rounded-xl px-4 py-1"  type="text" name="fourthChild" placeholder="Fourth Child" value={newPerson.fourthChild} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="player">Player</label>
            <input type="checkbox" name="player" checked={newPerson.player} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="ladies">Ladies</label>
            <input type="checkbox" name="ladies" checked={newPerson.ladies} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="committee">Committee</label>
            <input type="checkbox" name="committee" checked={newPerson.committee} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="lifeMember">Life Member</label>
            <input type="checkbox" name="lifeMember" checked={newPerson.lifeMember} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="trustee">Trustee</label>
            <input type="checkbox" name="trustee" checked={newPerson.trustee} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="elves">Elves</label>
            <input type="checkbox" name="elves" checked={newPerson.elves} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="coach">Coach</label>
            <input type="checkbox" name="coach" checked={newPerson.coach} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="patron">Patron</label>
            <input type="checkbox" name="patron" checked={newPerson.patron} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="dinnerInvite">Dinner Invite</label>
            <input type="checkbox" name="dinnerInvite" checked={newPerson.dinnerInvite} onChange={handleInputChange}/>
            </div>

        </div>
      {editingPerson && <button className="button-base hover:button-hover my-10" onClick={handleSavePerson}>Save Person</button>}
      {!editingPerson && <button className="button-base hover:button-hover my-10" onClick={handleAddPerson}>Add Person</button>}
    </div>
  );
};

export default App;
