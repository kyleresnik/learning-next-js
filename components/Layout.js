import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>BitsPrice</title>
      <link rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;