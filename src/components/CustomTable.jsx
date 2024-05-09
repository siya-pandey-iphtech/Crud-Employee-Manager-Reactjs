import { Card, Typography } from "@material-tailwind/react";

export const CustomTable = ({ TABLE_HEAD, TABLE_ROWS }) => {
  return (
    <Card className=" w-full  shadow-2xl  border-8  overflow-auto border-blue-400 ">
      <table className=" table-auto text-left rounded-2xl">
        <thead className="sticky top-0">
          <tr className="">
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className=" border-b border-gray-100 bg-blue-400 text-white   p-2 text-left z-10"
              >
                <Typography
                  
                  className="font-bold  text-lg  leading-none  "
                >
                  {head}
                </Typography>
              </th>
            ))}
            <th className="  border-b border-gray-100 bg-blue-400 text-white p-4 text-center">
              <Typography
                
                className="font-bold  text-lg  leading-none  "
              >
                Action
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody className=" h-36 overflow-scroll">{TABLE_ROWS}</tbody>
      </table>
    </Card>
  );
};

export default CustomTable;
