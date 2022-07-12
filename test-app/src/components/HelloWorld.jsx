import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getUserById } from "../services/users.service";

const HelloWorld = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async() => {
      try{
        const r = await getUserById(1);
        setUser(r.data);
      } catch(e){
        console.log(e);
      }
    })();
  }, []);

  if (!user) {
    return <p>"loading..."</p>;
  }

  return (
    <details>
        <strong>{user.id}</strong>
    </details>
  );
};

export default HelloWorld;
