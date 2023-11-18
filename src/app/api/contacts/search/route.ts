import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const generateSearchQuery = (text: string)=> {
  let searchQuery: any = {
    OR: [
      {
        name: {
          contains: text
        }
      },
      {
        nickname: {
          contains: text
        }
      },
      {
        phone: {
          contains: text
        }
      },
      {
        email: {
          contains: text
        }
      },
    ],
    AND: [],
  };

  return searchQuery
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const text = searchParams.get("search");

  if (!text) {
    return new NextResponse(
      JSON.stringify({
        message: 'Missing text parameter',
      }),
      { status: 400 }
    );
  }

  const contacts = await prisma.contact.findMany({
    where: generateSearchQuery(text),
  });

  return new NextResponse(JSON.stringify(contacts), {status: 200 });
}