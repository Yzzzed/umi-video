import styles from './index.css';
import Header from './global/header'
import Footer from './global/footer'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default BasicLayout;
