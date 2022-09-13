import Link from "next/link";

const Index = () => {
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
            <h1>Главная страница</h1>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding:20px;
                    }
                    .link {
                        margin-right:20px;
                    }
                `}
                
            </style>
        </div>
    );
};

export default Index;
