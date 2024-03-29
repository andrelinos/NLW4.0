import { GetServerSideProps } from 'next';
import { useContext, useState } from "react";
import { Seo } from "../components/Seo";
import { AuthContext } from '../contexts/AuthContext';
import styles from "../styles/components/Login.module.css";

let loginTimeout: NodeJS.Timeout;

export default function Home(props) {
  const [userName,setUserName] = useState('');
  const { singIn } = useContext(AuthContext);

  const handleSingIn = async ()=>{
    clearTimeout(loginTimeout);
    singIn(userName);
  }

  function handleUserDefault(usr:string){
    const parent = document.querySelector(`div.${styles.container}`);
    parent.querySelector('input').value=usr;
    setUserName(usr);
    loginTimeout = setTimeout(()=>{
      parent.querySelector('button').click();
    },3 * 1000);
  }
  return (
  <>
    <Seo title="Move it | Login" />
    <div className={styles.container}>
      <section>
        <header>
          <img src="/logo-full-white.svg" alt="Move.it" />
        </header>
        <strong>Bem Vindo</strong>
        <small>Se você não tiver conta no github, use o usuário padrão (<kbd title="clique para copiar" onClick={()=>handleUserDefault('move.it')}>move.it</kbd>) para conhecer a aplicação</small>
        <p>
          <img src="/icons/github.svg" alt="Github"/>
          Faça login com seu Github para começar
        </p>
        <div>
          <input type="text" placeholder="Digite seu username" onChange={(e)=> setUserName(e.target.value.trim())} />
          <button type="button" disabled={!userName} onClick={(handleSingIn)} >
          <img src="/icons/arrow-right.svg" alt="Entrar" />
          </button>
        </div>
      </section>
    </div>   
  </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const  {user} = ctx.req.cookies;
  if(user !== undefined){
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }
  return {
    props: {}
  }
}