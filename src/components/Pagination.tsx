import React from "react";
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { cn } from "@/lib/cn";

type PaginationProps = {
	page?: string;
	totalPages: number;
	hasNextPage: boolean;
};
 
export function Pagination(props: PaginationProps) {
  const { page = 1, totalPages, hasNextPage } = props;
  
  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);
  
  const getPagesToShow = () => {
		let startPage = currentPage - 2;
		let endPage = currentPage + 2;

		if (currentPage <= 3) {
			startPage = 1;
			endPage = totalPages;
		} else if (currentPage >= totalPages - 2) {
			startPage = totalPages - 4;
			endPage = totalPages;
		}

		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i,
		);
	};

  const pages = getPagesToShow();
 
  return (
    <div className="container mx-auto flex justify-center gap-4 mt-12 mb-7">
			<Link
				className={cn(
					'flex items-center gap-2 bg-primary rounded py-2 px-7',
					currentPage === 1 ? 'pointer-events-none bg-red-200' : '',
				)}
				href={`?page=${currentPage - 1}`}
			>
				<ArrowLongLeftIcon strokeWidth={2} className="h-6 w-6" />
			</Link>

			<nav
				aria-label="Pagination"
				className="flex items-center gap-2"
			>
				{pages.map((p) => (
					<Link
						key={p}
						className={cn(
							'relative inline-flex items-center bg-secondary rounded px-5 py-3 text-sm font-medium hover:bg-gray-700 mx-1',
							p === currentPage ? 'pointer-events-none bg-gray-800' : '',
						)}
						href={`?page=${p}`}
					>
						{p}
					</Link>
				))}
			</nav>

			<Link
				className={cn(
					'flex items-center gap-2 bg-primary rounded py-2 px-7',
					!hasNextPage ? 'pointer-events-none bg-red-200' : '',
				)}
				href={`?page=${currentPage + 1}`}
			>
				<ArrowLongRightIcon strokeWidth={2} className="h-6 w-6" />
			</Link>
		</div>
  );
}