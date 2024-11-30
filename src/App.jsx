import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App({ toggleLanguage, language }) {
  return (
    <>
      <div className="fixed -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#1e3a8a_40%,#0369a1_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar toggleLanguage={toggleLanguage} language={language} />
        <Outlet />
      </main>
    </>
  );
}

export default App;
