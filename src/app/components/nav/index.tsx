import React, { useState } from "react";
import LinkItem from "./Link";
import "./style.scss";
import { motion } from "framer-motion";
import CurveSvg from "./Curve";
import Close from "../../assets/navbar/close.svg";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
}

const navItems1: NavItem[] = [
  {
    title: "Minha conta",
    href: "/",
  },
  {
    title: "Meus dados",
    href: "#",
  },
  {
    title: "Meus pedidos",
    href: "#",
  },
  {
    title: "Carteira",
    href: "Avaliações",
  },
  {
    title: "Protocolos e atendimento",
    href: "#",
  },
  {
    title: "Favoritos",
    href: "#",
  },
  {
    title: "Sorteio",
    href: "#",
  },
];

const navItems2 = [
  {
    title: "Oferta do dia",
    href: "#",
  },
  {
    title: "Cupons",
    href: "#",
  },
];

const navItems3 = [
  {
    title: "Mais procurados",
    href: "#",
  },
  {
    title: "Acabaram de chegar",
    href: "#",
  },
  //---------------
  {
    title: "Baixe o App",
    href: "#",
  },
  {
    title: "Prime Ninja",
    href: "#",
  },
];

const menuSlide = {
  initial: {
    x: "calc(-100% + -100px)",
  },
  enter: {
    x: "0%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(-100% + -100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

interface NavProps {
  setIsActive: any;
}

const Nav: React.FC<NavProps> = ({ setIsActive }) => {
  return (
    <>
      <motion.div
        variants={menuSlide}
        animate="enter"
        initial="initial"
        exit="exit"
        className="menu flex"
      >
        <div className="body overflow-auto scrollable-list">
          <Image
            src={Close}
            alt="Botão de fechar"
            className="w-10 h-10 m-4 ml-auto mr-1 mt-1 cursor-pointer"
            onClick={() => setIsActive(false)}
          />
          <div className="nav font-bold">
            <p>Olá Gabriel!</p>
            <div>
              {navItems1.map((item, index) => {
                return <LinkItem key={index} data={{ ...item, index }} />;
              })}
            </div>
            <div className="list-border pt-3">
              {navItems2.map((item, index) => {
                return <LinkItem key={index} data={{ ...item, index }} />;
              })}
            </div>
            <div className="list-border pt-3">
              {navItems3.map((item, index) => {
                return <LinkItem key={index} data={{ ...item, index }} />;
              })}
            </div>
          </div>
        </div>
        <CurveSvg />
      </motion.div>
    </>
  );
};

export default Nav;
