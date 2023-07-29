import { AlignJustify, Search, ShoppingCart, User2 } from "lucide-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-yellow-300 h-screen">
      <div className="flex justify-center relative">
        <div className="border-solid items-center justify-center relative flex border-t-[60px] border-l-8 border-l-transparent border-r-transparent border-r-8 w-4/5 h-0 border-slate-800">
          <div className="text-white font-mono flex flex-row absolute">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Best Sellers
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Gift Ideas
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              New Releases
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              today's Deals
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Customer Service
            </a>
          </div>
        </div>
      </div>
      <div className="font-sans flex items-center justify-center m-10 text-white font-bold text-3xl">
        Eflyer
      </div>
      <div className="flex justify-around">
        <AlignJustify color="#ffffff" />
        <select
          placeholder="All category"
          aria-label="All category"
          name="category"
          id="category"
          className="bg-slate-800 text-white font-mono"
        >
          <option value="option1">option1</option>
        </select>
        <div className="flex flex-row">
        <input type="text" name="search" id="search" placeholder="Search this blog" />
          <input type="button" name="dkashdj" id="jeb" />
          <label htmlFor="jeb" className="bg-red-400"><Search color="#ffffff" height={20} width={20} /></label>
        </div>
        <select
          placeholder="language"
          aria-label="select lnguage"
          name="language"
          id="language"
          className="bg-white text-black font-mono"
        >
          <option value="option1">English</option>
        </select>
        <div id="cart" className="flex text-white">
          <ShoppingCart color="#ffffff" />
          <label htmlFor="cart" className="pl-2">
            Cart
          </label>
        </div>
        <div id="user" className="flex text-white">
          <User2 />
          <label htmlFor="user">User</label>
        </div>
      </div>
    </div>
  );
}

export default App;
