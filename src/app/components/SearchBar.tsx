'use client'

import React from 'react'
import { Input } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchContactSchema = yup.object().shape({
  search: yup.string().required("Campo obrigatório"),
})

function SearchBar() {
  const router = useRouter();

  interface ContactSearchForm {
    search: string;
  }

  const { handleSubmit, register, formState: { errors } } = useForm<ContactSearchForm>({
    resolver: yupResolver(SearchContactSchema),
  });

  const onSubmit = (data: ContactSearchForm) => {
    router.push(`/search?search=${data.search}`);
  };

  return (
    <div className="container mx-auto w-3/4 lg:w-1/2 mt-5">
       <div className="relative gap-2">
        <Input size="lg"
          color="white"
          label="Digite um contato"
          containerProps={{ className: "min-w-0" }}
          crossOrigin={undefined}
          {...register("search")}
        />
        <MagnifyingGlassIcon
          onClick={() => handleSubmit(onSubmit)()}
          className="h-6 w-6 cursor-pointer !absolute right-2 top-2 text-gray-500"
        />
       </div>
      {errors.search && (<p className="text-red-300 text-sm">{errors.search.message}</p>)}
    </div>
  );
}

export default SearchBar;
