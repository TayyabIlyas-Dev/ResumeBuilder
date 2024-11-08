import CardSection from "./Components/CardSection";
import HeroFour from "./Components/HeroFour";
import HeroOne from "./Components/HeroOne";
import HeroThree from "./Components/HeroThree";
import HeroTwo from "./Components/HeroTwo";


export default function Home() {
  return (
    <>
   <div className="bg-white">
   <div>
    <HeroOne
   
    para1="Effortlessly build Resume, docs, and product guides with our tools, plus get the flexibility of a Editable and shareable Links and much more."
    btn1text="-- SignUp for free --"
    btn2text="Build Resume"/>
    </div>

    <div>
      <CardSection/>
    </div>

    <div>
      <HeroTwo/>
    </div>
    <div>
    <HeroThree/>
    </div>
    
    <div>
    <HeroFour/>
    </div>

   </div>
    </>
  );
}
