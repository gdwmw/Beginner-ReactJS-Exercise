import React from "react";

//FUNCTION BASE
const menuMakanan = (props) => {
  if (props.stockMenu !== 0) {
    return (
      <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
        <p>Nama Menu : {props.namaMenu}</p>
        <p>Harga : Rp. {props.hargaMenu}</p>
        <p>Stock : {props.stockMenu}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default menuMakanan;
