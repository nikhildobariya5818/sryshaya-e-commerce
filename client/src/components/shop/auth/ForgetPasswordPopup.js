import React, { useState } from "react";

const ForgetPasswordPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
  const [error, setError] = useState("");

  const handleSendEmail = () => {
    // Implement logic to send reset password email
    // You can call API or perform any necessary actions here
    // Transition to Step 2: OTP verification
    setStep(2);
  };

  const handleVerifyOTP = () => {
    // Implement logic to verify OTP
    // Transition to Step 3: Set new password
    setStep(3);
  };

  const handleResetPassword = () => {
    // Implement logic to reset password
    // You can call API or perform any necessary actions here
    // Show success message or handle errors
    setError(""); // Clear any previous errors
    // Close the popup
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        {/* Render different steps based on the current step state */}
        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendEmail}>Send Email</button>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
          </>
        )}
        {step === 3 && (
          <>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Reset Password</button>
          </>
        )}
        {/* Display error message if any */}
        {error && <p className="error-message">{error}</p>}
        {/* Close button */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ForgetPasswordPopup;
