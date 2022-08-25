import React from "react";
import { ListItem, OrderedList } from "@chakra-ui/react";
import "./userList.css";

const UserList = (props) => {
  return (
    <div className="card-styling">
        <h3>UserList</h3>
        <OrderedList>
          {props.data.map((data) => {
            return (
              <ListItem key={data.id}>
                {data.name} {data.email}
              </ListItem>
            );
          })}
        </OrderedList>
    </div>
  );
};

export default UserList;
