import React, { useContext } from "react";
const Categories = [
  { name: "react", slug: "react" },
  { name: "react", slug: "react" },
  { name: "react", slug: "react" },
];
import Link from "next/Link";
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              gracms
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {Categories.map((Categories) => (
            <Link key={Categories.slug} href={`/categories/${Categories.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {Categories.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
