import React from "react";
import Student from "./components/Student";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import FiveStare from "./components/FiveStare";
import Product from "./components/Product";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  const prodact={
    image:"http://banana.png",
    title:"e-commers app",
    description:" this is arbaminche  banana",
    price:100,
    rating:<FiveStare/>,
    isOnSale:false,
    descountPercentage:20
}
  return (
    // flex gap-4 justify-center items-center pt-10
    <div className="">
      {/* <Student name="Sumeya" age={23} isStudent={true}/>
    <Student name="Hikma" age={26} isStudent={false}/>
    <Student name="Iman" age={22} isStudent={true}/>
    <Student name="Biniyam" age={23} isStudent={true}/>
    <Student/>
    <Profile firstName="sumeya" lastName="hassen" age={22}/>
    <UserProfile name="Sumeya"
                 avatar="Zubera"
                 bio={`i am software developer
                  embeded system integerater`}
                location="Addis Abeba"
                skills={["web development","mobile app dev","figema"]}
                contacts={{
                  email:"sumeyahassen@gmail.com",
                  phone:"0912380076"
                }}
                 />
                 <FiveStare/> */}
{/*
<Product
image={prodact.image}
title={prodact.title}
description={prodact.description}
price={prodact.price}
rating={prodact.rating}
isOnSale={prodact.isOnSale?"yes":"no"}
descountPercentage={prodact.descountPercentage}
/> */}
{/* <Counter/> */}
<Todo/>
    </div>
  );
}

export default App;
