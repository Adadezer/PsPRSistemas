"use client";

import React, { useState } from "react";
import { Contact } from "@prisma/client";

import { DetailsContact } from "./DetailsContact";

import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  Typography,
} from "@material-tailwind/react";

import { Cog6ToothIcon, PencilIcon, TrashIcon, IdentificationIcon } from "@heroicons/react/24/outline";

interface CardContactItemProps {
  contact: Contact;
}

function CardContactItem({ contact }: CardContactItemProps) {

  const [openOptionsCard, setOpenOptionsCard] = useState(false);

  const toggleSpeedDial = () => {
    setOpenOptionsCard(!openOptionsCard);
  };

  return (
    <Card className="min-w-[24rem] bg-secondary shadow-sm shadow-gray-800 mt-5">
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
      <CardBody className="flex mb-6 p-0 text-gray-600">
        <div>
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
        </div>

        <div className="relative h-24 w-full">
          <div className="absolute bottom-0 right-0 mr-4">
            <SpeedDial placement="left" open={openOptionsCard}>
              <SpeedDialHandler>
                <IconButton
                  size="sm"
                  className="rounded-full bg-secondary border border-white"
                  onClick={toggleSpeedDial}
                >
                  <Cog6ToothIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </IconButton>
              </SpeedDialHandler>

              {openOptionsCard && (
                <SpeedDialContent className="flex-row">
                  <div className="text-sm font-normal text-white">Deletar</div>
                  <div className="p-2 bg-red-800 border border-none rounded-full text-white mr-1">
                    <TrashIcon className="h-4 w-4" />
                  </div>

                  <div className="text-sm font-normal text-white">Editar</div>
                  <div className="p-2 bg-amber-800 border border-none rounded-full text-black flex flex-col items-center mr-1">
                    <PencilIcon className="h-4 w-4" />
                  </div>

                  <DetailsContact contact={contact}/>
                </SpeedDialContent>
              )}
            </SpeedDial>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardContactItem;
