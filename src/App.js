import React, { Component } from "react";
import "./App.css";
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman";

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: "Landensaki",
      menuMakanan: [
        { nama: "Ayam Tulang Lunak", harga: 28000, stock: 8 },
        { nama: "Ayam Rica - Rica", harga: 25000, stock: 11 },
      ],
    };
  }

  handleGantiNama = (nama) => {
    this.setState({ namaResto: nama });
  };

  render() {
    return (
      <div className="App">
        <h1>Cafe and Resto {this.state.namaResto}</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.handleGantiNama("HobbiTxy")}
        >
          Ganti Nama Resto
        </button>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={25000} stockMenu={10} />
        <MenuMakanan namaMenu={"Ayam Goreng"} hargaMenu={20000} stockMenu={0} />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[0].nama}
          hargaMenu={this.state.menuMakanan[0].harga}
          stockMenu={this.state.menuMakanan[0].stock}
        />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[1].nama}
          hargaMenu={this.state.menuMakanan[1].harga}
          stockMenu={this.state.menuMakanan[1].stock}
        />
        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={15000} />
        <MenuMinuman namaMenu={"Juice Apple"} hargaMenu={12000} />
      </div>
    );
  }
}

export default App;
