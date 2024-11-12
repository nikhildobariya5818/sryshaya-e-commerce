const localStorage = require('localStorage');
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const transporter = require("../mail/nodemailer");
const forgot_pass_template = require("../mail/templates/forget-password");

const currentDate = new Date().toDateString();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getEmailName(email) {
  const regex = /^[a-zA-Z0-9._%+-]+/;
  const match = email.match(regex);
  if (match) {
    const parts = match[0].split('@')[0].split('.');
    const capitalizedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    const fullName = capitalizedParts.join(' ').replace(/\d+/g, ''); 
    return fullName;
  } else {
    return 'Invalid email format';
  }
}

async function generateOTP(length) {
  let otp = "";
  for (var i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

exports.ForgetPassword = async (req, res) => {
  try {
      const { email } = req.body;

      // Check if email exists
      const user = await User.findOne({ email: email });
      if (!user) {
          return res.status(400).json({ error: "User not found for email" });
      }

      // Generate OTP
      const otp = await generateOTP(6);

      // Storing some important variables in localStorage
      localStorage.setItem("otp", otp.toString());
      localStorage.setItem("email", email);
      localStorage.setItem("userId", user._id);

      const html_template = forgot_pass_template.replace('{{otp}}', otp).replace('{{currentDate}}', currentDate).replace('{{EmailName}}', getEmailName(email))
      const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "Reset Password OTP",
          html: html_template,
      };

      await transporter.sendMail(mailOptions);
      console.log("OTP email sent");
      return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
      return res.status(500).json({ error: "Internal server error" + error });
  }
};

exports.VerifyOTP = async (req, res) => {
    try {
        const { otp: requestOTP } = req.body;
        const storedOTP = localStorage.getItem('otp');

        // Verify OTP
        if (storedOTP !== requestOTP) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        // Remove OTP from localStorage
        localStorage.removeItem('otp');

        // Additional verification steps if needed

        return res.status(200).json({ message: 'OTP verification successful' });
    } catch (error) {
        console.error('Error during OTP verification:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.UpdatePassword = async (req, res) => {
  try {
      const newPassword = req.body.password;
      const userId = localStorage.getItem("userId");

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10); // Salt rounds: 10

      // Update password using user ID with the hashed password
      const updatedUser = await User.findByIdAndUpdate(userId, {
          password: hashedPassword,
      });

      if (!updatedUser) {
          return res.status(400).json({ error: "User not found please Retry for Generate otp" });
      }

      // Remove email and user ID from localStorage
      localStorage.removeItem("email");
      localStorage.removeItem("userId");

      return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
  }
};