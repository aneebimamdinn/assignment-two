import React from "react";
import { ListItem, OrderedList } from "@chakra-ui/react";
import "./productList.css";

const ProductList = (props) => {
  return (
    <div className="prod-card-styling">
        <h3 className="prod-h3">Product List</h3>
        <OrderedList>
          {props.data.map((data) => {
            return (
              <ListItem>
                {data.name} {data.description}
              </ListItem>
            );
          })}
        </OrderedList>
    </div>
  );
};

export default ProductList;
