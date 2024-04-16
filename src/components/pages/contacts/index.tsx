import {FaTelegram} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contacts() {
    return (
        <footer id="contacts" className="bg-yellow-100 rounded-lg shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/"
                                                                                                    className="hover:underline"></a>Salamat Sagyndykov</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/kralyoursoul/" className="hover:underline me-4 md:me-6 px-5"><FaInstagram size={48}/> </a>
                    </li>
                    <li>
                        <a href="https://t.me/silhouetttte" className="hover:underline me-4 md:me-6 px-5"><FaTelegram size={48}/> </a>
                    </li>
                    <li>
                        <a href="https://github.com/kralsolomon" className="hover:underline me-4 md:me-6 px-5"><FaGithub size={48}/></a>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

export default Contacts;


