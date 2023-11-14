'use client'

import React from 'react'
import { Button, Input } from '@material-tailwind/react'

function SearchBar() {
  return (
    <>
      <div className="container mx-auto relative flex justify-center w-1/2 gap-2 mt-5">
        <Input
          type="search"
          color="white"
          label="Pesquise um contato"
          variant='outlined'
          className="pb-7"
          containerProps={{ className: "min-w-[288px]" }}
          crossOrigin={undefined}
        />
        <Button className="flex items-center bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </>
  );
}

export default SearchBar