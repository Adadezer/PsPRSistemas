"use client"

import React, { useEffect, useState } from 'react';
import { Contact } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import CardContactItem from '../components/CardContactItem';

function FoundContact() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const searchParams = useSearchParams();
  
 
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch(`/api/contacts/search?search=${searchParams.get("search")}`);

      const data = await response.json();

      setContacts(data);
    };
  
    fetchContacts();
  }, [contacts, searchParams]);

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
