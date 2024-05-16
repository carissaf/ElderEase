import React from "react";
import { Link } from "expo-router";

interface CustomLinkProps {
  title: string;
  href: string;
}

function CustomLink({ title, href }: CustomLinkProps) {
  return (
    <Link
      className="text-btn-active underline flex mt-2 text-m"
      href={href}>
      {title}
    </Link>
  );
}

export default CustomLink;
