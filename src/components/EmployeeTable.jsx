import { Card, Typography } from "@material-tailwind/react";

 
export const EmployeeTable=({employees})=> {
  const TABLE_HEAD =  ['profile_photo', 'id', 'name', 'email', 'dob', 'city', 'state', 'phone', 'address'];;
const TABLE_ROWS = employees.map((employee) => (
    <tr key={employee.id}>
      {TABLE_HEAD.map((head) => (
        <td key={head} className="p-4 border-b border-blue-gray-100">
        {head === 'profile_photo' ? 
          <img className="rounded-xl w-20 h-24" src={employee[head]} alt={employee.name} /> : 
          employee[head]
        }
        </td>
      ))}
    </tr>
  ));
    console.log("HEADING",TABLE_HEAD)
    console.log("ROWS",TABLE_ROWS)
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))} */}
          {TABLE_ROWS}
        </tbody>
      </table>
    </Card>
  );
}