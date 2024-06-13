import Typewriter from "./TypeWriter";

export default function NavBar() {
  return (
    <div className="navbar bg-gray-300 text-black ">
      <div className="flex-1">
      <Typewriter text="जय जिनेन्द्र" delay={200} infinite />
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">Admin</button>
      </div> 
    </div>
  );
}
