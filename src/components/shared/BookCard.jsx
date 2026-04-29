import { Button, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className=" border border-gray-300 mt-7 p-5 rounded-lg">
      <div className="relative w-full aspect-square">
        {/* <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
          className="rounded-xl object-cover"
        /> */}
        {/* <Image src={book.imageUrl} alt={book.title} width={200} height={200} /> */}
        <Image
          src={book.image_url}
          alt={book.title}
          width={200}
          height={300}
          className="w-full h-[250px] md:h-full object-cover rounded-lg"
        />
        <Chip className="absolute top-2 left-2">{book.category}</Chip>
      </div>
      <h2 className="font-bold text-2xl text-[#081f30] my-5">{book.title}</h2>
      <div className="flex justify-between items-center border p-2 bg-[#f59e0b] rounded-lg">
        <p className="font-bold text-[#081f30] ">
          Available:
          <span className="text-[20px]">{book.available_quantity}</span>
        </p>

        <Link href={`/all-books/${book.id}`}>
          <Button className="bg-[#081f30] animate-bounce [animation-iteration-count:1] [animation-duration:1s]">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
