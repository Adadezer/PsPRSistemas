'use client'

import Link from 'next/link'
import React from 'react'

import {
  IconButton,
} from "@material-tailwind/react";

import { PlusIcon } from "@heroicons/react/24/outline";

function ButtonAddContact() {
  return (
    <div className="continer mx-auto flex justify-center ml-3">
      <Link className="flex items-center" href={"/AddContact"}>
        <IconButton size="md" className="rounded-full bg-transparent border border-green-600">
          <PlusIcon className="h-6 w-6 text-green-600" />
        </IconButton>
      </Link>
    </div>
  );
}

export default ButtonAddContact