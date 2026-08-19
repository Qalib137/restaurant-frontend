import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons.js";


function Footer() {


const handleFooterClick = () => {
        setOpen(false);

        setTimeout(() => {
            window.scrollTo({
                top: 900,
                behavior: "smooth",
            });
        }, 100);
    };

    return (
        <div className="flex flex-col">

            <section className="flex flex-col bg-[#273037] py-3.5 gap-6">
                <div className="flex text-white font-bold gap-2 items-center justify-center text-xl ">
                    <Icons.FaPizzaSlice className="text-xl" />
                    <Link to="/" onClick={handleFooterClick}>RestoApp</Link>
                </div>
                </section>



            <section className="bg-[#1C2226] text-center text-white py-3.5">
                <p>© 2026 My Restaurant. All rights reserved.</p>
            </section>

        </div>
    )
}



export default Footer