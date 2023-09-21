"use client";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {};
type Inputs = {
  nameRequired: string;
  emailRequired: string;
  subjectRequired: string;
  message: string;
};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // window.location.href = `mailto:juleni.dev@gmail.com?subject=${formData.subjectRequired}&body=Hi, my name is ${formData.nameRequired}. ${formData.message} (${formData.emailRequired})`;
  };

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              {...register("nameRequired", { required: true })}
              className="contactInput"
              type="text"
            />
            {errors.nameRequired && <span>Name field is required</span>}
            <input
              placeholder="Email"
              {...register("emailRequired", { required: true })}
              className="contactInput"
              type="email"
            />
            {errors.emailRequired && <span>Email field is required</span>}
          </div>
          <input
            placeholder="Subject"
            {...register("subjectRequired", { required: true })}
            className="contactInput"
            type="text"
          />
          {errors.subjectRequired && <span>Subject field is required</span>}
          <textarea
            placeholder="Write your message here ..."
            {...register("message")}
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
