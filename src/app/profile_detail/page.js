"use client";
import styles from "../page.module.css";
import axios from "axios";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function page() {
  const [count, setCount] = React.useState(null);
  const searchParams = useSearchParams();
  const url =
    "https://express-t4.onrender.com/api/users/" + searchParams.get("id");
  React.useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setCount(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  }, []);
  return (
    <main className={styles.main}>
      {count && (
        <section>
          <div
            style={{
              margin: "2vh 0",
              border: "grey 2px solid",
              borderRadius: "1.5ch",
              padding: "2ch",
            }}
          >
            <img src={count.picture} width={200} height={200} />
            <table>
              <tbody>
                <tr>
                  <th>balance</th>
                  <td>{count.balance}</td>
                </tr>
                <tr>
                  <th>eyeColor</th>
                  <td>{count.eyeColor}</td>
                </tr>
                <tr>
                  <th>name</th>
                  <td>{count.name}</td>
                </tr>
                <tr>
                  <th>company</th>
                  <td>{count.company}</td>
                </tr>
                <tr>
                  <th>about</th>
                  <td>{count.about}</td>
                </tr>
                <tr>
                  <th>latitude</th>
                  <td>{count.latitude}</td>
                </tr>
                <tr>
                  <th>registered</th>
                  <td>{count.registered}</td>
                </tr>
                <tr>
                  <th>greeting</th>
                  <td>{count.greeting}</td>
                </tr>
                <tr>
                  <th>age</th>
                  <td>{count.age}</td>
                </tr>
                <tr>
                  <th>gender</th>
                  <td>{count.gender}</td>
                </tr>
                <tr>
                  <th>phone</th>
                  <td>{count.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}
