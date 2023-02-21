"use client";
import styles from "../page.module.css";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { useRef } from "react";

export default function page() {
  const [count, setCount] = React.useState(null);
  const name = useRef(null);

  const name_list = function () {
    axios
      .get("https://express-t4.onrender.com/api/users")
      .then(function (response) {
        setCount(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  };
  React.useEffect(() => {
    name_list();
  }, []);
  const search = function () {
    var searchvalue = name.current.value;
    if (searchvalue == "") {
      name_list();
    } else {
      var count_copy = [];
      count.map((item) => {
        if (item.name.includes(searchvalue)) {
          count_copy.push(item);
        }
      });
      setCount(count_copy);
    }
  };

  return (
    <main className={styles.main}>
      <input type="text" name="name" ref={name}></input>
      <button onClick={search}>search</button>
      {count && (
        <section>
          {count.map((item) => {
            return (
              <Link href={"profile_detail?id=" + item._id} key={item._id}>
                <div
                  style={{
                    margin: "2vh 0",
                    border: "grey 2px solid",
                    borderRadius: "1.5ch",
                    padding: "2ch",
                  }}
                >
                  <img src={item.picture} width={200} height={200} />
                  <table>
                    <tbody>
                      <tr>
                        <th>balance</th>
                        <td>{item.balance}</td>
                      </tr>
                      <tr>
                        <th>eyeColor</th>
                        <td>{item.eyeColor}</td>
                      </tr>
                      <tr>
                        <th>name</th>
                        <td>{item.name}</td>
                      </tr>
                      <tr>
                        <th>company</th>
                        <td>{item.company}</td>
                      </tr>
                      <tr>
                        <th>about</th>
                        <td>{item.about}</td>
                      </tr>
                      <tr>
                        <th>latitude</th>
                        <td>{item.latitude}</td>
                      </tr>
                      <tr>
                        <th>registered</th>
                        <td>{item.registered}</td>
                      </tr>
                      <tr>
                        <th>greeting</th>
                        <td>{item.greeting}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
}
