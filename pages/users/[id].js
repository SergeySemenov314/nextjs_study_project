import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
    const { query } = useRouter();

    return (
        <MainContainer>
            <div className={styles.user}>
                <h1>Пользователь с id {query.id}</h1>
                <div>Имя пользователя {user.name}</div>
            </div>
        </MainContainer>
    );
}

export async function getServerSideProps({ params }) {
    let responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    let user = await responce.json();

    return {
        props: { user }, // will be passed to the page component as props
    };
}
