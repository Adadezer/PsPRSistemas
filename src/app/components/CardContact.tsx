import { prisma } from '@/lib/prisma';
import React from 'react'
import CardContactItem from '@/app/components/CardContactItem';
import { PageProps } from '../page';
import { revalidatePath } from 'next/cache';
import { Pagination } from '@/components/Pagination';

const PAGE_SIZE = 9;

const fetchFeed = async ({take = PAGE_SIZE, skip = 0}) => {

  const results = await prisma.contact.findMany({
    take,
    skip,
    orderBy: {
      name: 'asc'
    }
  });

  const total = await prisma.contact.count();

  revalidatePath('/');

  return {
    data: results,
    metadata: {
      hasNextPage: skip + take < total,
      totalPages: Math.ceil(total / take),
    }
  }
}

async function CardContact(props: PageProps) {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const take = PAGE_SIZE;
	const skip = (pageNumber - 1) * take;

	const { data, metadata } = await fetchFeed({ take, skip });

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-evenly">
        {data.map((contact) => (
          <CardContactItem contact={contact} key={contact.id}/>
          ))}
      </div>

      <Pagination {...props.searchParams} {...metadata}/>
    </>
  );
}

export default CardContact