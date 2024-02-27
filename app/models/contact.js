import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Please enter your name."],
    trim: true,
    minLength: [2, "Please make sure your name is longer than 2 characters"],
    maxLength: [50, "Please make sure your name is less than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Please enter your email."],
    match: [
      /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i,
      "Please make sure your email address is valid",
    ],
  },

  message: {
    type: String,
    required: [true, "Please enter a message."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
