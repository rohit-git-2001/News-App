import News from "./Components/News";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopBottom";

export default function App() {
  return (
    <>
      {/* <h1 className="bg-blue-600 text-yellow-400 m-1 rounded-sm p-1">Hari</h1> */}
      <News />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
