import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const store = useSelector((store) => store.basket);
  //toplam miktar hesaplar ve sepeti gösterir
  const total = store.basket.reduce((total, item) => total + item.amount, 0);
  return (
    <header className="navbar   position-static top-0 z-3 shadow-lg">
      <div className="container-fluid">
        <Link to={"/"} className="d-flex gap-3 align-items-center">
          <img
            className="logo border-2 rounded-5"
            width={100}
            height={100}
            src="/market Logo.png"
            alt="logo"
          />
          <span className="fs-5 text-white ">Technology Shopping</span>
        </Link>

        <div className="d-flex gap-3">
          <NavLink style={{ color: "white" }} to={"/"}>
            Anasayfa
          </NavLink>
          <NavLink to={"/sepet"}>
            <span className="text-white">Sepet</span>
            <span className="badge bg-danger mx-2">{total}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
