"use client";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Form, SubmitHandler, useForm } from "react-hook-form";
type Props = {};
type Inputs = {
  nameRequired: string;
  emailRequired: string;
  subjectRequired: string;
  message: string;
};

function Contact({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>();

  function checkDisabled() {
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      subject.trim().length === 0
    )
      setDisabledButton(true);
    else setDisabledButton(false);
  }

  useEffect(() => {
    checkDisabled();
  }, [name, email, subject]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // window.location.href = `mailto:juleni.dev@gmail.com?subject=${formData.subjectRequired}&body=Hi, my name is ${formData.nameRequired}. ${formData.message} (${formData.emailRequired})`;
  };

  return (
    <div
      className="h-screen relative flex flex-col md:flex-row text-center
                 justify-evenly mx-auto items-center md:max-w-7xl"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5 mt-10">
        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p className="text-2xl">juleni.dev@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5">
          <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p className="text-2xl">Rimavska Bana, Slovakia</p>
        </div>

        <Form
          action="https://getform.io/f/9198c406-348b-4031-b019-5507b90b9272"
          control={control}
          //onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
          onSuccess={() => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          }}
        >
          {isSubmitSuccessful && (
            <div className="text-green-500 m-3">Message has been sent</div>
          )}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              id="inputName"
              placeholder="Name"
              {...register("nameRequired", { required: true })}
              className="contactInput"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            {errors.nameRequired && (
              <div className="contactErrMessage">Name is required</div>
            )}
            <input
              placeholder="Email"
              {...register("emailRequired", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
              className="contactInput"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.emailRequired &&
              errors.emailRequired.type === "required" && (
                <div className="contactErrMessage">Email is required</div>
              )}
            {errors.emailRequired &&
              errors.emailRequired.type === "pattern" && (
                <div className="contactErrMessage">Email is not valid</div>
              )}
          </div>

          <input
            placeholder="Subject"
            {...register("subjectRequired", { required: true })}
            className="contactInput"
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          {errors.subjectRequired && (
            <span className="contactErrMessage">Subject is required</span>
          )}
          <textarea
            placeholder="Write your message here ..."
            {...register("message")}
            rows={5}
            className="contactInput"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className={`bg-[#f7ab0a]/70 py-6 px-10 rounded-md text-[#242424] font-bold 
                       text-xl ${
                         (isSubmitting || disabledButton) &&
                         " bg-[#a9a394]/70 text-gray-600"
                       }`}
            disabled={disabledButton}
          >
            Send
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
