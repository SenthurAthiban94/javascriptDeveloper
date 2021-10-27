import 'tailwindcss/tailwind.css'
import './../styles/description.scss';
import Header from './../components/common/header';
import Footer from './../components/common/footer';

const TruecallerApp = ({ Component, pageProps }) => {
  return <div className="bg-bgPrimary">
      <Header logo={'/truecaller.svg'}>
        <Component {...pageProps} />
      </Header>
      <Footer/>
    </div>
}

export default TruecallerApp;