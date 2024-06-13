import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Homepage() {
  return (
    <>
      <NavBar />
      <div className="p-4 sm:p-10 ">
        <Header />
        <div className="flex justify-center mt-5  w-full  ">
          <h1 className="bg-blue-400 p-4 text-white text-xl max-w-max rounded-xl">
            Family Details/ पारिवारिक जानकारी
          </h1>
        </div>
        <div className="flex justify-center mt-5  w-full  ">
          <Form />
        </div>
      </div>
    </>
  );
}

// <div className="border-2 border-black">
//       <div className="grid grid-cols-10 p-2 border-2 border-black grid-flow-row">
//         {/* <p>S.No</p> */}
//         <p className=" col-span-2 font-semibold ">Name</p>
//         <p className=" font-semibold col-span-2">Date of birth</p>
//         <p className=" font-semibold col-span-2">Relation</p>
//         <p className=" font-semibold">Blood Group</p>
//         <p className=" font-semibold col-span-2">Education</p>
//         <p className=" font-semibold">Married</p>
//       </div>
//       <div className="grid grid-cols-10 gap-2 p-2 border-2 border-black grid-flow-row">
//         {num.map(() => (
//           <>
//             <input
//               type="text"
//               placeholder="Name"
//               className="input input-bordered rounded-md col-span-2"
//             />
//             <input
//               type="date"
//               placeholder="Date of birth"
//               className="input input-bordered rounded-md col-span-2"
//             />
//             <input
//               type="text"
//               placeholder="Relation"
//               className="input input-bordered rounded-md col-span-2"
//             />
//             <input
//               type="text"
//               placeholder="Blood Group"
//               className="input input-bordered rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Education"
//               className="input input-bordered rounded-md col-span-2"
//             />
//             <input
//               type="text"
//               placeholder="Married"
//               className="input input-bordered rounded-md"
//             />
//           </>
//         ))}
//       </div>
//       </div>
