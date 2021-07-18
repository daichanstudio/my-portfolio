import {AiFillGithub, AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    // setTheme(theme === "light" ? "dark" : "light");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="350px"
        width="350px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-5xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Daichi </span>
        Watanabe
      </h3>

      <button

      className="flex justify-around w-8/12 w-9/12 px-5 py-2 mx-auto my-4 my-5 text-lg text-white bg-blue-500 rounded-full cursor-pointer focus:outline-none hover:scale-105"
      >
        {/* //TODO remove bg black */}
        <a href="https://github.com/daichanstudio">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        GitHub
      </button>
  
     

      {/* social -icon */}
      {/* <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full ">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div> */}

      {/* address */}
      <div 
        className="py-4 my-1 dark:bg-black-500"
        style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center">
        <GoLocation className="mr-2" />
          <span><b>Japan, Tokyo</b></span>
        </div>

      </div>

   
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black bg-blue-500 rounded-full cursor-pointer focus:outline-none hover:scale-105"
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
      
    </div>
  );
};

export default Sidebar