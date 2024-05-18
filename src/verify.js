import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth, signOut } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState("");

  async function onCaptchVerify() {
    // Debug: Make it async
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        // Redirect to the stored URL upon successful login
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function handleContinue() {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Save your number now!");
        window.location.href = `https://www.airtaska.com/settings/update-phoneNumber/${ph}`;
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        toast.error("Error logging out. Please try again.");
      });
  }

  return (
    <div className="mx-auto max-w-[1280px] px-3 sm:px-6 md:px-16 bg-gray-100 min-h-screen">
      <header className="flex flex-row items-center justify-between  bg-gray-100 py-2 duration-300 ease-in">
        <h1 className="text-4xl font-bold md:text-5xl ">
          <span>Airtaska</span>
        </h1>
      </header>
      <main className="mx-auto mt-24 w-full max-w-[400px]  md:mt-32">
        <div>
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {user ? (
            <div>
              <h2 className="text-center text-blue-950 font-medium text-2xl">
                Phone number verification successful!
              </h2>
              <button
                onClick={handleContinue} // Use stored redirect URL
                className="bg-green-800 w-full flex gap-1 items-center justify-center py-2.5 text-blue-950 rounded"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span className="text-white">Continue</span>
              </button>
            </div>
          ) : (
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
              {showOTP ? (
                <>
                  <div className="bg-white text-emerald-500 w-fit mx-auto py-2 rounded-full">
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label
                    htmlFor="otp"
                    className="font-bold text-xl text-blue-950 text-center"
                  >
                    Enter your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container "
                  ></OtpInput>
                  <button
                    onClick={onOTPVerify}
                    className="bg-green-800 w-full flex gap-1 items-center justify-center py-2.5 text-blue-950 rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span className="text-white">Verify OTP</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                    <BsTelephoneFill size={30} />
                  </div>
                  <label
                    htmlFor=""
                    className="font-bold text-xl text-gray-900 text-center"
                  >
                    Verify your phone number
                  </label>
                  <PhoneInput country={"au"} value={ph} onChange={setPh} />
                  <button
                    onClick={onSignup}
                    className="bg-green-600 w-full flex gap-1 items-center justify-center py-2.5 text-blue-950 rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span className="text-white">Send code via SMS</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default Verify;
