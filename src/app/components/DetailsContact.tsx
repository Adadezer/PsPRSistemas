import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
} from "@material-tailwind/react";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { Contact } from "@prisma/client";
import Image from "next/image";

interface CardContactItemProps {
  contact: Contact;
}
 
export function DetailsContact({contact}: CardContactItemProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const menuItems = [
    {
      field: "CPF",
      description: `${contact.cpf}`
    },
    {
      field: "TELEFONE",
      description: `${contact.phone}`,
    },
    {
      field: "EMAIL",
      description:
        `${contact.email}`,
    },
  ];

 
  return (
    <>
      <div className="flex items-center" onClick={handleOpen}>
        <div className="text-sm font-normal text-white pr-1">Detalhes</div>
        <div className="p-2 bg-blue-800 border border-none rounded-full text-white flex flex-col items-center">
          <IdentificationIcon className="h-4 w-4" />
        </div>
      </div>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="shadow-lg shadow-gray-800 rounded-2xl container mx-auto"
      >
        <Card className="w-full flex-row bg-secondary">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none "
          >
            <Image
              src={contact.photo ? contact.photo : "/user_unknown.jpg"}
              alt="card-image"
              className="h-full w-full object-cover"
              fill
            />
          </CardHeader>
          <CardBody className="w-full max-w-[14rem] lg:max-w-[23rem]">
            <Typography variant="h3" className="font-bold">
              {contact.name}
            </Typography>
            <div className="text-xl">{contact.nickname}</div>
            <div className="mb-4 rounded-none border-b border-white/10 pt-4 text-center"></div>

            <ul className="flex w-full flex-col mb-5 mt-0">
              {menuItems.map(({ field, description }) => (
                <>
                  <Typography variant="h6">{field}</Typography>
                  <Typography
                    variant="paragraph"
                    className="font-normal mb-5 max-w-[20rem]"
                  >
                    {description}
                  </Typography>
                </>
              ))}
            </ul>

            <Button className="bg-primary" onClick={handleOpen} fullWidth>
              Fechar
            </Button>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}