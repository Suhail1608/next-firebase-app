import Image from "next/image";
import "./page.scss";
import introImg from '@/assets/images/intro.jpg'
import Button from "@/component/Common/Button/Button";

export default function Home() {
  return (
    <>
    
    <div className="intro-content">
      <div className="introSection">
        <div className="intro">
          <div className="left">
            <h2>Join Lorem and Create yourself 
            these experiences yourself.</h2>
            <p>
            Join one of our local chapters 
            and develop yourself through practical 
            experiences in the world's largest 
            youth-led organization.
            </p>
            <div className="buttonHolder"><Button label="Become a member" url="/membership"/></div>
          </div>
          <div className="right">
           <Image style={{width:"100%", height:"100%"}} src={introImg} alt="intro"></Image>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
