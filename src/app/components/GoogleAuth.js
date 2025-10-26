import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleAuth from "../components/GoogleAuth";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0A192F] text-white">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="bg-white text-[#0A192F] px-6 md:px-12 py-16 flex-1">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] border-b-4 border-[#FFD700] inline-block pb-3 mb-6 font-tamil">
            எங்களைப் பற்றி
          </h2>
          <p className="leading-8 text-lg font-tamil text-[#1E293B] text-justify">
            ஜே.சி.எம் மக்கள் மன்றம் என்பது மக்களின் சக்தியால் முன்னேறும் இயக்கமாகும்.
            ஒவ்வொரு குடிமகனையும் அதிகாரமூட்டியும், வலுவான மற்றும் புத்திசாலியான புதுவையை உருவாக்குவதற்கும் அர்ப்பணிக்கப்பட்டது.
            <br /><br />
            திரு. ஜோஸ் சார்ல்ஸ் மார்டின் அவர்களின் பார்வைமிக்க தலைமையில் உருவான ஜே.சி.எம் மக்கள் மன்றம்
            ஒற்றுமை, சேவை, முன்னேற்றம் ஆகியவற்றை பிரதிபலிக்கிறது.
            <br /><br />
            நாங்கள் வெளிப்படைத்தன்மை, சமத்துவம், வளர்ச்சி ஆகியவற்றுக்காக செயல்படுகிறோம் —
            குறிப்பாக மக்கள் நலன், கல்வி, வேலைவாய்ப்பு மற்றும் இளைஞர் அதிகாரமளிப்பு துறைகளில் கவனம் செலுத்துகிறோம்.
            <br /><br />
            எங்கள் நோக்கம் புதுவையை “இந்தியாவின் சிங்கப்பூர்” ஆக்குவது —
            தூய்மையான, புத்திசாலியான, நீடித்த வளர்ச்சியுடைய பிராந்தியமாக மாற்றுவது.
            <br /><br />
            இளைஞர்களின் பங்கு, தொழில்நுட்பம், சமூக ஒற்றுமை ஆகியவற்றின் மூலம் ஒவ்வொரு குடிமகனும்
            மரியாதை, வாய்ப்பு, நம்பிக்கை உடன் வாழும் சமூகத்தை உருவாக்க முயல்கிறோம்.
            <br /><br />
            நீங்களும் இணைந்திடுங்கள்! புதுவையின் புதிய விடியலுக்காக ஒன்றிணைவோம் — 
            <span className="text-[#FFD700] font-semibold"> “புதுவையின் விடியல்!” 🌅</span>
          </p>
        </div>
      </section>

      {/* Google Authentication Section */}
      <section className="bg-[#0A192F] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-tamil">
            Google மூலம் உள்நுழைக
          </h2>
          <p className="text-gray-300 mb-8 font-tamil">
            உங்கள் அடையாளத்தை சரிபார்த்த பின், நீங்கள் அடுத்த பக்கத்திற்கு மாற்றப்படுவீர்கள்.
          </p>

          {/* ✅ Updated GoogleAuth button (no localStorage) */}
          <GoogleAuth />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
