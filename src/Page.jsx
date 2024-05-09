import "./App.css";

import { EmployeeComponent } from "./components/EmployeeComponent";

const Page = () => {
  return (
    <div className=" flex flex-col h-screen sm:p-10 p-5 pt-0" 
         style={{backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%230099ff' fill-opacity='0.2' d='M0,96L14.1,80C28.2,64,56,32,85,37.3C112.9,43,141,85,169,101.3C197.6,117,226,107,254,112C282.4,117,311,139,339,133.3C367.1,128,395,96,424,74.7C451.8,53,480,43,508,37.3C536.5,32,565,32,593,64C621.2,96,649,160,678,165.3C705.9,171,734,117,762,85.3C790.6,53,819,43,847,80C875.3,117,904,203,932,202.7C960,203,988,117,1016,101.3C1044.7,85,1073,139,1101,170.7C1129.4,203,1158,213,1186,208C1214.1,203,1242,181,1271,154.7C1298.8,128,1327,96,1355,101.3C1383.5,107,1412,149,1426,170.7L1440,192L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z'></path></svg>")`,
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'top',
                 backgroundSize: 'cover'}}>
      <h1 className="m-5 mb-0 font-bold text-6xl text-blue-500 font-lobster text-center
      sm:text-left">Welcome User !</h1>
    
      <EmployeeComponent/>
    </div>
  );
};

export default Page;