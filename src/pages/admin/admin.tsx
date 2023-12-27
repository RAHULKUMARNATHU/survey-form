import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

type TData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  nationality: string;
  gender: string;
};
const columns: Array<{ title: string; key: keyof TData }> = [
  { title: "Name", key: "name" },
  { title: "Email", key: "email" },
  { title: "Phone Number", key: "phone" },
  { title: "Address", key: "address" },
  { title: "Address", key: "address" },
  { title: "Message", key: "message" },
  { title: "Nationality", key: "nationality" },
  { title: "Gender", key: "gender" },
];

const data = [
  {
    name: "John Doe",
    email: "johnDoe@abc.com",
    phone: "08012345678",
    address: "No 1, John Doe Street, Lagos",
    message: "Hello World",
    nationality: "Indian",
    gender: "Male",
  },
];

const Admin = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  // const fetchSurveys = async () => {
  //   try {
  //     // a(token)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    if (!state.isAuthorized) {
      navigate("/login");
    }
  }, []);

  console.info("token", { state });
  return (
    <>
      <nav className="bg-white py-2 md:py-4 sticky top-0">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-indigo-600">
              Surveys
            </Link>
          </div>
        </div>
      </nav>
      <section className="p-5 bg-blueGray-50">
        <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    {columns.map(({ title, key }) => (
                      <th
                        key={key}
                        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {columns.map(({ key }) => (
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {item[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
