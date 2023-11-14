import { prisma } from '@/lib/prisma';
import React from 'react'
// import Image from 'next/image';
import CardContactItem from '@/components/CardContactItem';

const getContacts =async () => {
  const contact = await prisma.contact.findMany({});

  return contact;
}

async function CardContact() {
  const data = await getContacts();
  return (
    <div className="container mx-auto">
      {data.map((contact) => (
        <CardContactItem contact={contact}/>
      ))}
    </div>

    // <div className='container mx-auto'>
    //   {data.map((contact) =>(
    //     <div className='flex flex-col'>
    //       <div className='relative w-[350px] h-[280px]'>
    //         <Image
    //           src={contact.photo}
    //           className='rounded-lg'
    //           fill
    //           style={{objectFit: 'cover'}}
    //           alt="imagem do contato"
    //         />
    //       </div>
    //       <p>{contact.name}</p>
    //       <p>{contact.nickname}</p>
    //       <p>{contact.cpf}</p>
    //       <p>{contact.phone}</p>
    //       <p>{contact.email}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default CardContact