import { prisma } from '@/lib/prisma';
import React from 'react'
import CardContactItem from '@/app/components/CardContactItem';

const getContacts =async () => {
  const contact = await prisma.contact.findMany({});

  return contact;
}

async function CardContact() {
  const data = await getContacts();
  return (
    <div className="container mx-auto flex flex-wrap justify-around">
      {data.map((contact) => (
        <CardContactItem contact={contact}/>
      ))}
    </div>
  );
}

export default CardContact