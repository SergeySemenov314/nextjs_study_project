import Link from "next/link";
import { useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "petya" },
        { id: 2, name: "vasya" },
    ]);

    return (
        <div>
            <div className="navbar">
                <Link href="/">
                    <a className="link">Главная </a>
                </Link>
                <Link href="/users">
                    <a className="link">Пользователи</a>
                </Link>
            </div>
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

            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 20px;
                    }
                    .link {
                        margin-right: 20px;
                    }
                `}
            </style>
        </div>
    );
};

export default Users;
