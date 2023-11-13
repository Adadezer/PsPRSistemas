"use client"

import Image from 'next/image'
import { Button, Input } from '@material-tailwind/react'

export default function Home() {
  return (
    <>
      <h1 className='text-primary'>Meu titulo</h1>
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          color="white"
          label="Pesquise um contato"
          className="pr-20"
          containerProps={{ className: "min-w-[288px]"}}
          crossOrigin={undefined}
        />
        <Button
          size="sm"
          className="!absolute right-1 top-1 rounded bg-primary"
        >
          Search
        </Button>
      </div>
      <Button>Button</Button>
    </>

  )
}
