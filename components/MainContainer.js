import Head from "next/head";
import A from "./A";

export default function MainContainer({ children, keywords }) {
    return (
        <>
            <Head>
                <meta keywords={`words ${keywords}`}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Главная" />
                <A href="/users" text="Пользователи" />
            </div>
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
            
            <div>{children}</div>
        </>
    );
}
