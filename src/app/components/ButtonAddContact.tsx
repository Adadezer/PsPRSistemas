'use client'

import { Button } from '@material-tailwind/react'
import React from 'react'

function ButtonAddContact() {
  return (
    <div className="continer mx-auto flex justify-center mt-5">
      <div className="flex flex-col items-center">
        <Button color="green" className="px-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
        <p>Adicionar contato</p>
      </div>
    </div>
  );
}

export default ButtonAddContact