import logo from "../assets/logo.jpg";
import logo2 from "../assets/logo2.jpg";
export default function Header() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="flex items-center sm:gap-2 justify-between w-full">
        <img src={logo} className="h-12 sm:h-20 -mt-5" />
        <div className="text-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold">
            श्वेतांबर जैन महासंघ न्यास कार्यालय
          </h1>
          <p className="text-sm sm:text-md md:text-lg">
            302 स्टारलिट टावर यशवंत निवास रोड इंदौर 07312530045
          </p>
        </div>
        <img src={logo2} className="h-12 sm:h-20 -mt-5 rounded-full" />
      </div>
    </div>
  );
}
