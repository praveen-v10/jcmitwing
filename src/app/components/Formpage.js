"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FormContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    gender: "",
    constituency: "",
    voterId: "",
  });
  const [status, setStatus] = useState({ success: null, message: "" });

  useEffect(() => {
    if (emailParam) setEmail(emailParam);
  }, [emailParam]);

  // Clear the success card after 5 seconds
  useEffect(() => {
    let timer;
    if (status.success) {
      timer = setTimeout(() => {
        setStatus({ success: null, message: "" });
        setFormData({
          fullName: "",
          whatsapp: "",
          gender: "",
          constituency: "",
          voterId: "",
        });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [status.success]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit WhatsApp to 10 digits and only numbers
    if (name === "whatsapp") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setStatus({ success: false, message: "Full Name is required" });
      return;
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length !== 10) {
      setStatus({ success: false, message: "WhatsApp number must be 10 digits" });
      return;
    }
    if (!formData.gender) {
      setStatus({ success: false, message: "Gender is required" });
      return;
    }
    if (!formData.constituency) {
      setStatus({ success: false, message: "Constituency is required" });
      return;
    }
    if (!formData.voterId.trim()) {
      setStatus({ success: false, message: "Voter ID is required" });
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, message: "You have been successfully registered!" });
      } else {
        setStatus({ success: false, message: data.message });
      }
    } catch (err) {
      setStatus({ success: false, message: "Something went wrong." });
    }
  };

  // --- Success Card ---
  if (status.success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] py-16 px-4 transition-all duration-500">
        <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 max-w-xl w-full text-center animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-yellow-600 tracking-wide animate-pulse">
            வணக்கம், {formData.fullName}!
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700">
            🙏 புதுவையின் விடியல்! <br /> உங்கள் பயணம் இங்கே தொடங்குகிறது!
          </p>
          <div className="w-full flex justify-center mt-4">
            <Image
              src="/mimg.png"
              alt="Welcome Image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "60%", height: "auto" }}
              className="select-none rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }

  // --- Form Card ---
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] py-12 px-4">
      {/* Desktop / Laptop */}
      <div className="hidden lg:flex justify-center w-full">
        <form onSubmit={handleSubmit} className="bg-white mt-[100px] text-gray-800 p-12 rounded-3xl shadow-2xl w-2/5 flex flex-col gap-6 border border-gray-200">
          <h2 className="text-3xl font-extrabold text-yellow-500 text-center mb-6 tracking-wider">
            Registration Form / பதிவு படிவம்
          </h2>

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name / முழு பெயர்"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />
          <input
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp Number / வாட்ஸ்அப் எண்"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />
          <input
            type="email"
            value={email}
            readOnly
            className="p-4 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none shadow-sm"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          >
            <option value="">Gender / பாலினம்</option>
            <option value="male">Male / ஆண்</option>
            <option value="female">Female / பெண்</option>
            <option value="other">Other / மற்றவை</option>
          </select>

          <select
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          >
            <option value="">Constituency / தொகுதி</option>
            <option value="mannadipet">Mannadipet / மாண்ணாடிப்பேட்டை</option>
            <option value="thirubhuvanai">Thirubhuvanai (SC) / திருபுவனை (SC)</option>
            <option value="ossudu">Ossudu (SC) / ஒசுது (SC)</option>
            <option value="mangalam">Mangalam / மங்கலம்</option>
            <option value="villianur">Villianur / வில்லியானூர்</option>
            <option value="ozhukarai">Ozhukarai / ஓழுகரை</option>
            <option value="kadirgamam">Kadirgamam / கடிர்காமம்</option>
            <option value="indira_nagar">Indira Nagar / இந்திரா நகர்</option>
            <option value="thattanchavady">Thattanchavady / தட்டாஞ்சாவடி</option>
            <option value="kamaraj_nagar">Kamaraj Nagar / காமராஜ் நகர்</option>
            <option value="lawspet">Lawspet / லாஸ் பேட்</option>
            <option value="kalapet">Kalapet / காலாபேட்</option>
            <option value="muthialpet">Muthialpet / முதியார்பேட்டை</option>
            <option value="raj_bhavan">Raj Bhavan / ராஜ் பவன்</option>
            <option value="oupalam">Oupalam / ஓபலாம்</option>
            <option value="orleampeth">Orleampeth / ஓர்லியாம்பேத்</option>
            <option value="nellithope">Nellithope / நெல்லித்தோப்பு</option>
            <option value="mudaliarpet">Mudaliarpet / முதலியார்பேட்டை</option>
            <option value="ariankuppam">Ariankuppam / அரியன்குப்பம்</option>
            <option value="manavely">Manavely / மாணவேலி</option>
            <option value="embalam">Embalam (SC) / எம்பலம் (SC)</option>
            <option value="nettapakkam">Nettapakkam (SC) / நெட்டப்பாக்கம் (SC)</option>
            <option value="bahour">Bahour / பஹூர்</option>
          </select>

          <input
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            placeholder="Voter ID Number / வாக்காளர் அட்டை எண்"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />

          <button
            type="submit"
            className="bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Submit / சமர்ப்பிக்க
          </button>
          {status.success === false && <p className="text-red-500 text-center mt-2">{status.message}</p>}
        </form>
      </div>

      {/* Mobile / Tablet */}
      <div className="flex lg:hidden justify-center w-full">
        <form onSubmit={handleSubmit} className="bg-white mt-[100px] text-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4 border border-gray-200">
          <h2 className="text-2xl font-extrabold text-yellow-500 text-center mb-4 tracking-wider">
            Registration Form / பதிவு படிவம்
          </h2>

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name / முழு பெயர்"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />
          <input
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp Number / வாட்ஸ்அப் எண்"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />
          <input
            type="email"
            value={email}
            readOnly
            className="p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none shadow-sm"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          >
            <option value="">Gender / பாலினம்</option>
            <option value="male">Male / ஆண்</option>
            <option value="female">Female / பெண்</option>
            <option value="other">Other / மற்றவை</option>
          </select>

          <select
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          >
            <option value="">Constituency / தொகுதி</option>
            <option value="mannadipet">Mannadipet / மாண்ணாடிப்பேட்டை</option>
            <option value="thirubhuvanai">Thirubhuvanai (SC) / திருபுவனை (SC)</option>
            <option value="ossudu">Ossudu (SC) / ஒசுது (SC)</option>
            <option value="mangalam">Mangalam / மங்கலம்</option>
            <option value="villianur">Villianur / வில்லியானூர்</option>
            <option value="ozhukarai">Ozhukarai / ஓழுகரை</option>
            <option value="kadirgamam">Kadirgamam / கடிர்காமம்</option>
            <option value="indira_nagar">Indira Nagar / இந்திரா நகர்</option>
            <option value="thattanchavady">Thattanchavady / தட்டாஞ்சாவடி</option>
            <option value="kamaraj_nagar">Kamaraj Nagar / காமராஜ் நகர்</option>
            <option value="lawspet">Lawspet / லாஸ் பேட்</option>
            <option value="kalapet">Kalapet / காலாபேட்</option>
            <option value="muthialpet">Muthialpet / முதியார்பேட்டை</option>
            <option value="raj_bhavan">Raj Bhavan / ராஜ் பவன்</option>
            <option value="oupalam">Oupalam / ஓபலாம்</option>
            <option value="orleampeth">Orleampeth / ஓர்லியாம்பேத்</option>
            <option value="nellithope">Nellithope / நெல்லித்தோப்பு</option>
            <option value="mudaliarpet">Mudaliarpet / முதலியார்பேட்டை</option>
            <option value="ariankuppam">Ariankuppam / அரியன்குப்பம்</option>
            <option value="manavely">Manavely / மாணவேலி</option>
            <option value="embalam">Embalam (SC) / எம்பலம் (SC)</option>
            <option value="nettapakkam">Nettapakkam (SC) / நெட்டப்பாக்கம் (SC)</option>
            <option value="bahour">Bahour / பஹூர்</option>
          </select>

          <input
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            placeholder="Voter ID Number / வாக்காளர் அட்டை எண்"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />

          <button
            type="submit"
            className="bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Submit / சமர்ப்பிக்க
          </button>
          {status.success === false && <p className="text-red-500 text-center mt-2">{status.message}</p>}
        </form>
      </div>
    </div>
  );
}
