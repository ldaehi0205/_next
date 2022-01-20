import '../styles/globals.css';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';
// import '../styles/slick-theme.css';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
