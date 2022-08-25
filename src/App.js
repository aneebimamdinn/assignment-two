import "./App.css";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";

import Hoc from "./components/Hoc";

const App = () => {
  const userData = [
    {
      id: 1,
      name: "John Adam",
      email: "john123@gmail.com",
    },
    {
      id: 2,
      name: "Jacinda Shmus",
      email: "jac@gmail.com",
    },
    {
      id: 3,
      name: "Linda Li",
      email: "linda1@gmail.com",
    },
    {
      id: 4,
      name: "Adam smith",
      email: "adam@gmail.com",
    },
  ];
  const productData = [
    {
      id: 1,
      name: "Aneeb",
      desc: "Test description",
    },
    {
      id: 2,
      name: "Aneeb 2 ",
      desc: "Test description 2",
    },
    {
      id: 3,
      name: "Aneeb 3",
      desc: "Test description 3",
    },
    {
      id: 4,
      name: "Aneeb 4",
      desc: "Test description 4",
    },
  ];
  const Users = Hoc(UserList, userData);
  const Products = Hoc(ProductList, productData);


  return (
    <div>
      <Users />
      <Products />
    </div>
  );
};

export default App;
