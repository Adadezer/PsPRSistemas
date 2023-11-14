"use client"

import React from 'react'
import { Contact } from '@prisma/client';

import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";

interface CardContactItemProps{
  contact: Contact;
}

function CardContactItem({contact}: CardContactItemProps) {
  return (
    <Card className="min-w-[27rem] bg-secondary shadow-sm shadow-gray-800 mt-5">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-7 ml-3"
      >
        <Avatar
          size="lg"
          variant="circular"
          src={
            contact.photo
              ? contact.photo
              : "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
          }
          alt="imagem contato"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="white">
              {contact.name}
            </Typography>
          </div>
          <Typography color="white">{contact.nickname}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <div className="flex flex-col ml-3">
          <div className="flex gap-2">
            <h5>Telefone:</h5>
            <p>{contact.phone}</p>
          </div>

          <div className="flex gap-2">
            <h5>Email:</h5>
            <p>{contact.email}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardContactItem