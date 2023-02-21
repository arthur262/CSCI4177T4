"use client";
import styles from "./page.module.css";
import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const username = useRef(null);
  const password = useRef(null);
  const router = useRouter();

  const login = function () {
    if (username.current != null) {
      axios
        .post("https://express-t4.onrender.com/api/login", {
          username: username.current.value,
          password: password.current.value,
        })
        .then(function (response) {
          if (response.status == 200) {
            router.push("/profile");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <main className={styles.main}>
      <div>
        <label className="username">username</label>
        <input type="text" ref={username} name="username"></input>
        <label className="password">password</label>
        <input type="text" ref={password} name="password"></input>
        <button onClick={login}>login</button>
      </div>
    </main>
  );
}
