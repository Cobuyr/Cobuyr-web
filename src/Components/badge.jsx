/* eslint-disable react/prop-types */
import "../Styles/Home/Home.css";



const Badge = ({ iconUrl, text, trigger }) => {
    Badge.defaultProps = {
        // iconUrl: `qucadebu`,
        trigger: "hover",
        text: "Cobuyr",
      }
    
  return (
    <div className="badge">
    <lord-icon
 src={`https://cdn.lordicon.com/${iconUrl}.json`}
 trigger={`${trigger}`}
 target=".badge"
delay="5000"
stroke="bold"
>
</lord-icon>
     <p>{text}</p></div>
  );
};

const IconBadge = ({ iconUrl, target, trigger }) => {
  Badge.defaultProps = {
      // iconUrl: `qucadebu`,
      trigger: "hover",
      target: ".iconBadge",
    }
  
return (
  <div className="iconBadge">
  <lord-icon
src={`https://cdn.lordicon.com/${iconUrl}.json`}
trigger={`${trigger}`}
target={`${target}`}
delay="5000"
stroke="bold"
>
</lord-icon>
   </div>
);
};


// 👇️ named exports
export {Badge, IconBadge};

