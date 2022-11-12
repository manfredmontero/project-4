import React, { Component, useState } from "react";
import MenuItem from "./menu-item";

export const MenuList = () => {
  const [platos] = useState([
    {
      id: "chifri",
      name: "chifrijo",
      description: "es un plato costarrricense",
      ingredients: "arroz, frijoles, chicharron",
      imageItem:
        "https://okdiario.com/img/2020/05/07/receta-de-costa-rica_-chifrijo-1.jpg",
    },
    {
      id: "arrozPollo",
      name: "Arroz con pollo",
      description: "es un plato costarrricense",
      ingredients: "arroz, frijoles, pollo, ensalada",
      imageItem:
        "https://cocinacomidasaludable.com/wp-content/uploads/2021/11/arroz-con-pollo.jpg",
    },
  ]);
  return (
    <div>
      <MenuItem platos={platos.filter((plato) => plato.id === "chifri")} />
      <MenuItem platos={platos.filter((plato) => plato.id === "arrozPollo")} />
    </div>
  );
};
export default MenuList;
