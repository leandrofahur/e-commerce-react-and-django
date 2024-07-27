// custom components:
import Header from "@/components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <h1 className="flex justify-center text-3xl font-bold">Welcome</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
