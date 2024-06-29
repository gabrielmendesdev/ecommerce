import React from "react";
import Link from "next/link";
import "./style.scss";
import { motion } from "framer-motion";

const slide = {
  initial: {
    x: "-80px",
  },
  enter: (i: number) => ({
    x: "0px",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.06 * i,
    },
  }),
  exit: (i: number) => ({
    x: "-80px",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * i,
    },
  }),
};

interface LinkItemProps {
  data: {
    index: number;
    title: string;
    href: string;
  };
}

const LinkItem: React.FC<LinkItemProps> = ({ data }: any) => {
  return (
    <>
      <motion.div
        custom={data.index}
        variants={slide}
        animate="enter"
        exit="exit"
        initial="initial"
        className="m-3"
      >
        <Link href={data.href}>{data.title}</Link>
      </motion.div>
    </>
  );
};

export default LinkItem;
