import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./Navbar.module.css"
import images from "../../assets";
import { Model, TokenList } from "../index";
const Navbar = () => {
  const menuItems = [
    {
      name: "swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setopenTokenBox] = useState(false);
  return (
    <div className={Style.Navbar}>
      <div className={Style.Navbar_box}>
        <div className={Style.Navbar_box_left}>
          {/* LOGO IMAGE */}
          <div className={Style.Navbar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
          {/* MENU ITEMS */}
          <div className={Style.Navbar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.Navbar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* MIDDLE SECTION */}
        <div className={Style.Navbar_box_middle}>
          <div className={Style.Navbar_box_middle_search}>
            <div className={Style.Navbar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            {/* INPUT SECTION */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className={Style.Navbar_box_right}>
          <div className={Style.Navbar_box_right_box}>
            <div className={Style.Navbar_box_right_box_img}>
              <Image src={images.ether} alt="Network" height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>
          <button onClick={() => setOpenModel(true)}>Address</button>

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>
      {/*TOKEN LIST COMPONENT  */}

      {openTokenBox && (
        <TokenList tokenData="Hey" setopenTokenBox={setopenTokenBox}/>
      )}
    </div>
  );
};

export default Navbar;
