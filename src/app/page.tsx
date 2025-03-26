"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState<object[]>([]);
  const [focusedUser, setFocusedUser] = useState<object | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await users.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 h-screen w-full py-8 px-4">
      <div className="max-w-[920px] mx-auto flex items-start gap-4 justify-center">
        {/* User List */}
        <ul className="">
          {users.map((user) => (
            <li
              className="not-last:mb-4 cursor-pointer bg-white hover:bg-gray-200 p-2 rounded-md border-2 border-gray-200"
              onClick={() => {
                {
                  /* Set the user to the user that is clicked */
                }
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
        {/* User Focus*/}
        <div className="bg-white p-4 rounded-md border-2 border-gray-200">
          <div className="flex flex-col items-start gap-4 justify-center">
            {focusedUser && users.map((user) => user === focusedUser) && (
              <>
                <h1 className="text-2xl font-bold">{focusedUser.name}</h1>
                <p className="text-sm text-gray-500">
                  <a href={`mailto:${focusedUser.email}`}>
                    {focusedUser.email}
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  <a href={`tel:${focusedUser.phone}`}>{focusedUser.phone}</a>
                </p>
                <p className="text-sm text-gray-500">
                  {focusedUser.address.street +
                    " " +
                    focusedUser.address.suite +
                    " " +
                    focusedUser.address.city +
                    " " +
                    focusedUser.address.zipcode}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
