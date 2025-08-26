import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  phone: string;
  country: string;
  companyName: string;
  companyType: string;
  message: string;
  privacy: boolean;
};

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "Brazil",
  "South Africa",
  "Italy",
  "Mexico",
  "Netherlands",
  "Norway",
  "Russia",
  "Singapore",
  "Spain",
  "Sweden",
  "Switzerland",
  "New Zealand",
  "Philippines",
  "Pakistan",
  "Saudi Arabia",
  "Nigeria",
  "Kenya",
  "Argentina",
  "Poland",
  "Thailand",
  "Turkey",
  "Vietnam",
  "Ukraine",
  "Portugal",
  "Malaysia",
  "Denmark",
  "Ireland",
  "Belgium",
  "South Korea",
  "Indonesia",
  "Colombia",
];

const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="px-4 py-16 min-h-screen flex flex-col relative">
      {submitted && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-100 border border-blue-300 text-blue-800 px-6 py-3 rounded shadow-md z-50 text-center">
          Message sent successfully! 😊
        </div>
      )}

      <div className="text-center max-w-2xl mx-auto mb-12 px-2">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-800">
          Contact Ajoloop
        </h1>
        <p className="text-lg text-gray-700">
          We welcome your inquiries and feedback. Please do not hesitate to
          reach out to us for any assistance or information you may require. Our
          team is committed to providing you with prompt and professional
          support to ensure your satisfaction.
        </p>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-4">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800">Our Office</h2>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-700 mt-1" />
              <p>123 Ebi Pa Ejo Lane, Lagos Nigeria.</p>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-700 mt-1" />
              <p>+2345 333 444 55</p>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-700 mt-1" />
              <p>support@ajoloop.com</p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
                title="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
                title="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">Contact Us</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">First Name</label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="First name"
                  className="border border-blue-300 p-2 rounded w-full"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold">Last Name</label>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  type="text"
                  placeholder="Last name"
                  className="border border-blue-300 p-2 rounded w-full"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Business Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your e-mail"
                className="border border-blue-300 p-2 rounded w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Job Title</label>
              <input
                {...register("jobTitle")}
                type="text"
                placeholder="Job title"
                className="border border-blue-300 p-2 rounded w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Phone Number</label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                })}
                type="text"
                placeholder="Phone number"
                className="border border-blue-300 p-2 rounded w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Country/Region</label>
              <select
                {...register("country", { required: "Country is required" })}
                className="border border-blue-300 p-2 rounded w-full"
                defaultValue=""
              >
                <option value="">Select Country/Region</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Company Name</label>
              <input
                {...register("companyName", {
                  required: "Company name is required",
                })}
                type="text"
                placeholder="Company name"
                className="border border-blue-300 p-2 rounded w-full"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Company Type</label>
              <select
                {...register("companyType", {
                  required: "Company type is required",
                })}
                className="border border-blue-300 p-2 rounded w-full"
                defaultValue=""
              >
                <option value="">Select Company Type</option>
                <option value="Startup">Startup</option>
                <option value="Enterprise">Enterprise</option>
                <option value="Non-Profit">Non-Profit</option>
              </select>
              {errors.companyType && (
                <p className="text-red-500 text-sm">
                  {errors.companyType.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                {...register("message")}
                placeholder="Enter your message..."
                className="border border-blue-300 p-2 rounded w-full h-32"
              />
            </div>

            <div>
              <label className="text-sm">
                <input
                  type="checkbox"
                  {...register("privacy", {
                    required: "You must agree to the privacy policy",
                  })}
                  className="mr-2"
                />
                I have read and agree to the terms of the{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy policy
                </a>
              </label>
              {errors.privacy && (
                <p className="text-red-500 text-sm">{errors.privacy.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
