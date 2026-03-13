// WEDNESDAY, 11 MARCH 2026, 17:00 - 18:30

"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Iuser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export default function Home() {
  const [user, setUser] = useState<Iuser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [api, setapi] = useState<Iuser[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const postUser = async (params: Iuser) => {
    try {
      const response = await axios.post(
        "https://694ba34a26e870772068a7b1.mockapi.io/api/v1/users",
        {
          firstname: params.firstname,
          lastname: params.lastname,
          email: params.email,
          password: params.password,
        },
      );
      console.log(response);
      alert("post succes");
    } catch (err) {
      console.log(err);
      alert("post failed");
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postUser(user);
  };
  useEffect(() => {
    const get = async () => {
      try {
        const tampil = await fetch(
          "https://694ba34a26e870772068a7b1.mockapi.io/api/v1/users",
        );
        const res = await tampil.json();
        setapi(res);
      } catch (err) {
        console.log(err);
      }
    };
    get();
  });
  return (
    <div className="place-items-center m-6 p-4">
      <h1>daftar user</h1>
      <div>
        {api.map((member, index) => (
          <div key={index}>
            <p>
              {member.firstname}: {member.lastname}: {member.email}:{" "}
              {member.password}{" "}
            </p>
          </div>
        ))}
      </div>

<br/>
      <h1>Create User</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="firstname"
          placeholder="First Name"
          value={user.firstname}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          name="lastname"
          placeholder="Last Name"
          value={user.lastname}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
