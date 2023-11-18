'use client'

import React from 'react'
import { Input } from '@material-tailwind/react'
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

  const { handleSubmit, register, formState: {errors} } = useForm<ContactSearchForm>({
    resolver: yupResolver(SearchContactSchema)
  });

  const onSubmit = (data: ContactSearchForm) => {
    router.push(`/search?search=${data.search}`);
  }

  return (
    <div className="container mx-auto relative w-1/2 mt-5">
      <div className="flex gap-2 items-center justify-center">
        <Input
          size="lg"
          color="white"
          label="Digite um contato"
          containerProps={{ className: "min-w-[289px]" }}
          crossOrigin={undefined}
          {...register("search")}
        />
        <div onClick={() => handleSubmit(onSubmit)()} className="bg-primary py-2.5 px-5 rounded-md cursor-pointer">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
      </div>
      {errors.search && (<p className="text-red-300 text-sm">{errors.search.message}</p>)}
    </div>
  );
}

export default SearchBar;
