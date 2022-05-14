import Head from 'next/head'
import Image from 'next/image'
import Dashboard from './dashboard'
import { searchBooks } from '../lib/googleBooksApi';
import Login from './login'


/*export const getStaticProps = async () => {
  const res = await searchBooks('jane austen', 0);
  return {
    props: {
        bookData: res
    },
  }
}*/

export default function Home() {
  return (
    <div>
      <Head>
        <title>Book App</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Login></Login>
    </div>
  )
}
