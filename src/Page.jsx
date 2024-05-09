
import "./App.css";

import { EmployeeComponent } from "./components/EmployeeComponent";

const Page = () => {
  return (
    <div className=" flex flex-col h-screen sm:p-10 p-5 pt-0" 
         style={{backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.5" d="M0,64L14.1,85.3C28.2,107,56,149,85,144C112.9,139,141,85,169,64C197.6,43,226,53,254,53.3C282.4,53,311,43,339,32C367.1,21,395,11,424,26.7C451.8,43,480,85,508,101.3C536.5,117,565,107,593,96C621.2,85,649,75,678,106.7C705.9,139,734,213,762,250.7C790.6,288,819,288,847,277.3C875.3,267,904,245,932,197.3C960,149,988,75,1016,48C1044.7,21,1073,43,1101,74.7C1129.4,107,1158,149,1186,149.3C1214.1,149,1242,107,1271,80C1298.8,53,1327,43,1355,37.3C1383.5,32,1412,32,1426,32L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>")`,
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'bottom',
                 backgroundSize: 'cover'}}>
      <h1 className="m-5 mb-0 font-bold text-6xl text-blue-500 font-lobster text-center
      sm:text-left">Welcome User !</h1>
    
      <EmployeeComponent/>
    </div>
  );
};

export default Page;
