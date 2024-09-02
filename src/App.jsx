import Main from "./components/Main";
import Nav from "./components/Nav";
import Recipes from "./components/Recipes";

export default function App() {
  return (
    <div className="text-gray-600 bg-gray-100 font-roboto h-screen">
      <Nav/>  
      <Main/>
      <Recipes/>
    </div>
  );
}
