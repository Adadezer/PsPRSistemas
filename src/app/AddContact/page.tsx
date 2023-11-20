"use client"

import React from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";

const AddContactSchema = yup.object().shape({
  name: yup.string().required("Campo nome é obrigatório"),
  nickname: yup.string(),
  cpf: yup
    .string()
    .nullable()
    .test(
      "len",
      "campo não obrigatório, mas se preenchido deve conter 11 caracteres",
      (val) => !val || val.length === 11
    ),
  phone: yup.string().required("Campo telefone é obrigatório").test(
    "len",
    "campo deve conter código do estado e telefone",
    (val) => !val || val.length === 11
  ),
  email: yup
    .string()
    .email("campo não obrigatório, mas se preenchido deve ter o formato 'exemplo@email.com'")
    .nullable()
    .test(
      "len",
      "campo não obrigatório, mas se preenchido deve conter no máximo 21 caracteres",
      (val) => !val || val.length <= 21
    )
});

const removeArrowImputNumber = `
  [appearance:textfield]
  [&::-webkit-outer-spin-button]:appearance-none
  [&::-webkit-inner-spin-button]:appearance-none
  [moz-appearance: textfield;]
`

function AddContact() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(AddContactSchema)
  });

  // const onSubmit = (data: any) => { alert(JSON.stringify(data)) };
  const onSubmit = (data: any) => { 
    toast.success("Contato adicionado com sucesso!", { position: "top-center", theme: "dark" })
  };

  return (
    <div className="container mx-auto my-7 lg:w-1/2">
      <Card className="items-center bg-secondary shadow-sm shadow-gray-800 py-14 mx-2 lg:mt-0">
        <Typography variant="h3" className="text-primary">
          Adicione um contato
        </Typography>

        <Typography className="mt-1 mx-2 lg:mx-0 font-normal text-center text-gray-400">
          Preencha os campos e depois clique em adicionar contato
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-64 sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-4">
            <div className="bg-transparent">
              <Input
                {...register("name")}
                size="lg"
                label="Nome"
                color="white"
                crossOrigin={undefined}
              />
              {errors.name && (<p className="text-red-300 pl-2 text-sm">{errors.name.message}</p>)}
            </div>
            <div>
              <Input
                {...register("nickname")}
                size="lg"
                label="Apelido"
                color="white"
                crossOrigin={undefined}
              />
              {errors.nickname && <p>{errors.nickname.message}</p>}
            </div>
            <div>
              <Input
                type="number"
                {...register("cpf")}
                label="CPF"
                size="lg"
                color="white"
                className={removeArrowImputNumber}
                crossOrigin={undefined}
              />
              {errors.cpf && <p>{errors.cpf.message}</p>}
            </div>
            <div>
              <Input
                {...register("phone")}
                size="lg"
                label="Telefone"
                color="white"
                crossOrigin={undefined}
                type="number"
                className={removeArrowImputNumber}
              />
              {errors.phone && (<p className="text-red-300 pl-2 text-sm">{errors.phone.message}</p>)}
            </div>
            <div>
              <Input
                {...register("email")}
                size="lg"
                label="Email"
                color="white"
                crossOrigin={undefined}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <Button className="mt-10" fullWidth color="green" type="submit">Adicionar contato</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddContact