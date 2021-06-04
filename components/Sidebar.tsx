import {AiFillGithub, AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie, GiWingedSword} from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img
        src="./images/grid9.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Daichi </span>
        Watanabe
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Web Developer
      </p>
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" 
         href=""
         download="name">
        <GiTie className="w-6 h-6"/>
        Download Resume
      </a>
      {/* social -icon */}
      <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div 
        className="my-5 py-4 bg-gray-200"
        style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center">
          <GoLocation />
          <span class>Japan, Tokyo</span>
        </div>
        <p className="my-2">abc@gmail.com</p>
        <p className="my-2">000-0000-0000</p>
      </div>
      <button 
      className="bg-gradient-to-r from-green-500 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus: outline-none"
      
      onClick={()=>window.open('mailto:w.daichi2835@gmail.com')}
      >Email Me</button>
      <button className="bg-gradient-to-r from-green-500 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">Toggle Theme</button>
      
    </div>
  )
}

export default Sidebar
