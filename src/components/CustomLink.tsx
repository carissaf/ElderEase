import React from "react";
import { Link } from "expo-router";

interface CustomLinkProps {
  title: string;
  href: string;
}

function CustomLink({ title, href }: CustomLinkProps) {
  return (
    <Link
      className="font-bold text-btn-active underline flex text-m"
      href={href}>
      {title}
    </Link>
  );
}

export default CustomLink;
