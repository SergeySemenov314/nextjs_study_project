import Link from "next/link";
import { useEffect, useState } from "react";
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
    return (
        <MainContainer>
            <div>
                <h1>Страница пользователей</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a className="link">{user.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    let responce = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await responce.json();

    return {
        props: { users }, // will be passed to the page component as props
    };
}
