const userModel = require("../models/users");
const bcrypt = require("bcryptjs");
const transporter = require("../mail/nodemailer");
const user_welcome_template = require("../mail/templates/user-welcome");

class User {
  async getAllUser(req, res) {
    try {
      let Users = await userModel
        .find({ userRole: 0 })
        .populate("allProduct.id", "pName pImages pPrice")
        .populate("user", "name email")
        .sort({ _id: -1 });
      if (Users) {
        return res.json({ Users });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getSingleUser(req, res) {
    let { uId } = req.body;
    if (!uId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let User = await userModel
          .findById(uId)
          .select("name email phoneNumber userImage updatedAt createdAt");
        if (User) {
          return res.json({ User });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postAddUser(req, res) {
    let { allProduct, user, amount, transactionId, address, phone } = req.body;
    if (
      !allProduct ||
      !user ||
      !amount ||
      !transactionId ||
      !address ||
      !phone
    ) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        let newUser = new userModel({
          allProduct,
          user,
          amount,
          transactionId,
          address,
          phone,
        });
        let save = await newUser.save();
        if (save) {
          return res.json({ success: "User created successfully" });
        }
      } catch (err) {
        return res.json({ error: err });
      }
    }
  }

  async postEditUser(req, res) {
    let { uId, name, phoneNumber } = req.body;
    if (!uId || !name || !phoneNumber) {
      return res.status(400).json({ message: "All filled must be required" });
    } else {
      try {
        let currentUser = userModel.findByIdAndUpdate(uId, {
          name: name,
          phoneNumber: phoneNumber,
          updatedAt: Date.now(),
        });
        currentUser.exec();
        return res.status(201).json({ success: "User updated successfully" });
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  }

  async verifyUser(req, res) {
    let { email } = req.query;
    email = decodeURIComponent(email);
    if (!email) {
      return res.status(400).json({ error: "All filled must be required" });
    } else {
      try {
        let user = await userModel
          .findOne({ email })
        if (!user) {
          return res.status(400).json({ error: "User not found" });
        }
        if (user.verified == "true") {
          return res.status(400).json({ error: "Already verified" });
        }
        user.verified = true;
        await user.save();
        const app_url = process.env.APP_URL;
        const html_template = user_welcome_template(user.name, email, app_url);
        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "Welcome to our platform",
          html: html_template
        }
        await transporter.sendMail(mailOptions);
        return res.json({ success: "User verified successfully. You will receive confirmation mail shortly" });
      } catch (err) {
        return res.status(500).json({ error: "Internal server error" + err });
      }
    }
  }

  async getDeleteUser(req, res) {
    let { _id } = req.body;
    if (!_id) {
      return res.json({ message: "ID must be provided" });
    } else {
      try {
        let currentUser = await userModel.findByIdAndDelete(_id);
        if (!currentUser)
          return res.status(400).json({ error: "User not found" });
        return res.json({ success: "User deleted successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Internal server error " + error });
      }
    }
  }

  async changePassword(req, res) {
    let { uId, oldPassword, newPassword } = req.body;
    if (!uId || !oldPassword || !newPassword) {
      return res.status(400).json({ message: "All filled must be required" });
    } else {
      const data = await userModel.findOne({ _id: uId });
      if (!data) {
        return res.status(400).json({
          error: "Invalid user",
        });
      } else {
        try {
          const oldPassCheck = await bcrypt.compare(oldPassword, data.password);
          if (oldPassCheck) {
            newPassword = bcrypt.hashSync(newPassword, 10);
            let passChange = userModel.findByIdAndUpdate(uId, {
              password: newPassword,
            });
            passChange.exec();
            return res.json({ success: "Password updated successfully" });
          } else {
            return res.status(400).json({
              error: "Your old password is wrong!!",
            });
          }
        } catch (error) {
          return res.status(500).json({ error: "Internal server error" });
        }
      }
    }
  }
}

const ordersController = new User();
module.exports = ordersController;
