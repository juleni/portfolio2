import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
type Props = {};

function Contact({}: Props) {
  return (
    <div
      className="h-screen relative flex flex-col md:flex-row text-center
                 justify-evenly mx-auto items-center max-w-7xl px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p className="text-2xl">juleni.dev@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5">
          <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p className="text-2xl">Rimavska Bana, Slovakia</p>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea
            placeholder="Write your message here ..."
            rows={5}
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a]/70 py-6 px-10 rounded-md text-[#242424] 
                       font-bold text-xl"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
