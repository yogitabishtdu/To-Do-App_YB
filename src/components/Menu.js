import React from "react";

function Menu({ menu }) {
  return (
    <div>
      {menu.map((m) => {
        return (
          <div id={m.id}>
            <img src={m.img} alt={m.title} />
            <h2>{m.title}</h2>
            <p>Category: {m.category}</p>
            <h3>{m.price} $</h3>
            <p>{m.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
