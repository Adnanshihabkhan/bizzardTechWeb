import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggeredChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggeredChildren: 0.05,
      staggeredDirection: -1,
    },
  },
};

const Links = () => {
  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];

  return (
    <div className="links">
      {" "}
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}{" "}
    </div>
  );
};

export default Links;
