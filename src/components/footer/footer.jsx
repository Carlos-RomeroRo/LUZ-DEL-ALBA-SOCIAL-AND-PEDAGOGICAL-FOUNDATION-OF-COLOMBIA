import ContactButton from "./ContactButton";
import ContactButtonCR from "./contactGmailCR";
import logo from "../../assets/photos/Icono.png";
export default function footer() {
    return (
            <footer className="px-4 divide-y bg-[#212529] text-white">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0" bis_skin_checked="1">
                <div className="lg:w-1/3" bis_skin_checked="1">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
                        >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full  overflow-hidden">
                            <img
                            src={logo}
                            alt="Logo Luz del Alba"
                            className="h-10 w-10 object-contain"
                            />
                        </div>
                        <span className="text-2xl font-semibold tracking-wide text-white">
                            LUZ DEL ALBA
                        </span>
                    </a>

                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 justify-items-end text-center">
                    <div className="space-y-3" bis_skin_checked="1">
                        <h3 className="tracking-wide uppercase text-white">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Home</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Services</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">How can I help?</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Who are we?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3" bis_skin_checked="1">
                        <h3 className="uppercase text-white"> Social media <br />developer</h3>
                        <ul className="flex space-x-4 items-center">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/carlos-romero-626b08287"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                    className="flex items-center p-1 hover:text-blue-400 transition-colors"
                                    >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-.95 1.82-2.2 3.75-2.2 4 0 4.7 2.63 4.7 6v9.8h-4V15c0-2.16-.04-4.93-3-4.93-3.02 0-3.48 2.36-3.48 4.77v9.16h-4V8z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <ContactButtonCR></ContactButtonCR>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="https://github.com/Carlos-RomeroRo"
                                    target="_blank"
                                    title="GitHub"
                                    className="flex items-center p-1 hover:text-gray-400 transition-colors"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-current"
                                    >
                                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-1.9c-3.2.7-3.88-1.54-3.88-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.19a10.82 10.82 0 0 1 5.74 0c2.19-1.5 3.15-1.19 3.15-1.19.62 1.59.23 2.77.11 3.06.73.82 1.18 1.86 1.18 3.12 0 4.43-2.68 5.41-5.24 5.7.41.35.78 1.04.78 2.1v3.11c0 .3.21.65.78.54A10.999 10.999 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3" bis_skin_checked="1">
                        <div className="uppercase text-white" bis_skin_checked="1">Social media</div>
                        <div className="flex justify-start space-x-3" bis_skin_checked="1">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/people/Fundaci%C3%B3n-Social-y-Pedag%C3%B3gica-de-Colombia-Luz-del-Alba/100092285348685/" title="Facebook" className="flex items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                            </a>
                            <ContactButton></ContactButton>

                            <a rel="noopener noreferrer" href="https://www.instagram.com/luzdelalba_2023/" title="Instagram" className="flex items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-white">
            Designed and developed by <p className="text-yellow-500">Carlos Alberto Romero Rocha</p> {new Date().getFullYear()} All rights reserved ©.
            </div>
        </footer>
    );
}