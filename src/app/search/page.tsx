"use client"

import React, { useEffect, useState } from 'react';
import { Contact } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import CardContactItem from '../components/CardContactItem';
import axios from 'axios';

async function FoundContact() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const searchParams = useSearchParams();
  
 
  useEffect(() => {
    setContacts([
      {
        contactBookId: "200",
        userId: "100",
        id: "1",
        name: "Thales Emanoel Nobrega",
        nickname: "Thales",
        cpf: "709.850.432-70",
        phone: "(97) 3164-7881",
        email: "tha.nobrega@email.com",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ])
    console.log("conatcts_manual: ", contacts);
    const fetchData = async () => {
      const { data } = await axios.get(
        `/api/contacts/search?search=${searchParams.get("search")}`
      );

      console.log(data);
      setContacts(data);
    };
  
    fetchData();
  }, [searchParams]);

  useEffect(()=> {
    console.log("conatcts: ",contacts);
  },[contacts]);

  return (
    <div className="container mx-auto flex flex-wrap justify-evenly">
      {contacts.length > 0 ? (
        contacts?.map((contact) => (
          <CardContactItem contact={contact} key={contact.id} />
        ))
      ) : (
        <div>No contacts found</div>
      )}
    </div>
  );
}

export default FoundContact;
