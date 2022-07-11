import React from "react";
import User from "./User";

function UserList() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];
  /**
   * 1. 배열 생성시에는 key props 적기.
   * 콜백함수 두번쩨 params 사용하거나, json 객체의 id값을 사용해도 된다.
   * Warning: Each child in a list should have a unique "key" prop.
   *
   * 2. map 메소드 return
   * Array.prototype.map() expects a return value from arrow function
   */
  return (
    <div>
      <div className="">
        {users.map((user, index) => (
          <User user={user} key={index}></User>
        ))}
      </div>
      <div className="">
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </div>
    </div>
  );
}

export default UserList;
