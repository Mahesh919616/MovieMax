import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png"
import Button from '../components/Button'

const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / Movie Max`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center">
            <p className="text-5xl pt-4 text-gray-700 font-bold dark:text-white">Oops!</p>
            <div className="max-w-lg">
                <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
            </div>
            <p className="text-3xl pb-4 text-gray-700 font-bold dark:text-white">Page Not Found</p>
        </div>
        <div className="flex justify-center my-4">
            <Link to="/">
                <Button>Back To Home</Button>
            </Link>          
        </div>
      </section>
    </main>
  )
}

export default PageNotFound;