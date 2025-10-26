"use client";

import React from "react";
import Image from "next/image";
import { auth, provider } from "../app/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // user.email is verified Google email
      console.log(user.email);

      // redirect to form page and pass email (optional: via query or state)
      router.push("/form?email=" + encodeURIComponent(user.email));
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#F9FAFB]">
      {/* --- Laptop / Desktop View --- */}
      <div className="hidden lg:flex flex-col items-center w-full mt-20">
        {/* First Image */}
        <div className="flex justify-center">
          <Image
            src="/mimg.png"
            alt="Image 1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "35%", height: "auto" }}
            className="select-none"
          />
        </div>

        {/* Second Image */}
        <div className="flex justify-center">
          <Image
            src="/tag.png"
            alt="Image 2"
            width={500}
            height={0}
            className="select-none"
          />
        </div>

        {/* Tamil Content */}
        <div className="w-3/4 mt-10 p-8 bg-[#0A192F] text-[#F9FAFB] rounded-xl shadow-lg">
          <p className="leading-8 text-xl">
            ஜே.சி.எம் மக்கள் மன்றம் என்பது மக்களுக்காக மக்களின் சக்தியால் இயங்கும் இயக்கமாகும். ஒவ்வொரு குடிமகனையும் அதிகாரமூட்டியும், வலுவான மற்றும் புத்திசாலியான புதுவையை உருவாக்குவதற்கும் அர்ப்பணிக்கப்பட்டது.
            <br /><br />
            திரு.  சார்ல்ஸ் மார்டின் அவர்களின் திறன்மிக்க தலைமையில் உருவான ஜே.சி.எம் மக்கள் மன்றம் ஒற்றுமை, சேவை, முன்னேற்றம் ஆகியவற்றை பிரதிபலிக்கிறது.
            <br /><br />
            நாங்கள் வெளிப்படைத்தன்மை, சமத்துவம், வளர்ச்சி ஆகியவற்றுக்காக செயல்படுகிறோம். குறிப்பாக மக்கள் நலன், பெண்களின் பொருளாதார முன்னேற்றம், கல்வி, வேலைவாய்ப்பு, மற்றும் இளைஞர் அதிகாரமளிப்பு ஆகிய துறைகளில் கவனம் செலுத்துகிறோம்.
            <br /><br />
            எங்கள் நோக்கம் புதுவையை “இந்தியாவின் முன்மாதிரி மாநிலமாக” ஆக்குவது — தூய்மையான, புத்திசாலியான, நீடித்த வளர்ச்சியுடைய பிராந்தியமாக மாற்றுவது.
            <br /><br />
            இளைஞர்களின் பங்கு, தொழில்நுட்பம், சமூக ஒற்றுமை ஆகியவற்றின் மூலம் ஒவ்வொரு குடிமகனும் மரியாதை, வாய்ப்பு, நம்பிக்கை உடன் வாழும் சமூகத்தை உருவாக்க முயல்கிறோம்.
            <br /><br />
            நீங்களும் இணைந்திடுங்கள்! புதுவையின் விடியலுக்கான பயணத்தில்! புதுவையின் முன்னேற்றமே இந்தியாவின் முன்னேற்றம்.
            <br /><br />
            <strong>“புதுவையின் விடியல்!!!"</strong>
          </p>
        </div>
      </div>

      {/* --- Mobile View --- */}
      <div className="flex flex-col lg:hidden items-center w-full mt-16 px-4">
        {/* First Image */}
        <div className="w-[70%]">
          <Image
            src="/mimg.png"
            alt="Image 1"
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="w-[70%] mt-6">
          <Image
            src="/tag.png"
            alt="Image 2"
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tamil Content */}
        <div className="w-full mt-6 p-4 bg-[#0A192F] text-[#F9FAFB] rounded-lg shadow-md">
          <p className="leading-7 text-base">
            ஜே.சி.எம் மக்கள் மன்றம் என்பது மக்களுக்காக மக்களின் சக்தியால் இயங்கும் இயக்கமாகும். ஒவ்வொரு குடிமகனையும் அதிகாரமூட்டியும், வலுவான மற்றும் புத்திசாலியான புதுவையை உருவாக்குவதற்கும் அர்ப்பணிக்கப்பட்டது.
            <br /><br />
            திரு.  சார்ல்ஸ் மார்டின் அவர்களின் திறன்மிக்க தலைமையில் உருவான ஜே.சி.எம் மக்கள் மன்றம் ஒற்றுமை, சேவை, முன்னேற்றம் ஆகியவற்றை பிரதிபலிக்கிறது.
            <br /><br />
            நாங்கள் வெளிப்படைத்தன்மை, சமத்துவம், வளர்ச்சி ஆகியவற்றுக்காக செயல்படுகிறோம். குறிப்பாக மக்கள் நலன், பெண்களின் பொருளாதார முன்னேற்றம், கல்வி, வேலைவாய்ப்பு, மற்றும் இளைஞர் அதிகாரமளிப்பு ஆகிய துறைகளில் கவனம் செலுத்துகிறோம்.
            <br /><br />
            எங்கள் நோக்கம் புதுவையை “இந்தியாவின் முன்மாதிரி மாநிலமாக” ஆக்குவது — தூய்மையான, புத்திசாலியான, நீடித்த வளர்ச்சியுடைய பிராந்தியமாக மாற்றுவது.
            <br /><br />
            இளைஞர்களின் பங்கு, தொழில்நுட்பம், சமூக ஒற்றுமை ஆகியவற்றின் மூலம் ஒவ்வொரு குடிமகனும் மரியாதை, வாய்ப்பு, நம்பிக்கை உடன் வாழும் சமூகத்தை உருவாக்க முயல்கிறோம்.
            <br /><br />
            நீங்களும் இணைந்திடுங்கள்! புதுவையின் விடியலுக்கான பயணத்தில்! புதுவையின் முன்னேற்றமே இந்தியாவின் முன்னேற்றம்.
            <br /><br />
            <strong>“புதுவையின் விடியல்!!!"</strong>
          </p>
        </div>
      </div>

      {/* --- Google Auth Section --- */}
      <section className="flex flex-col items-center justify-center bg-[#F9FAFB] py-20 w-full">
        <h3 className="text-2xl font-semibold text-[#0A192F] mb-6 text-center">
          உங்கள் பங்கேற்பை தொடங்குங்கள்
        </h3>

        <button
          onClick={handleLogin}
          className="flex items-center bg-[#FFD700] text-[#0A192F] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#E6C200] transition-all"
        >
          <img
            src="/google.png"
            alt="Google Logo"
            className="w-6 h-6 mr-3"
          />
          Google மூலம் உள்நுழைக
        </button>
      </section>
    </div>
  );
}

export default Home;
