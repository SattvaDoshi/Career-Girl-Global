import mongoose from "mongoose";
import moment from 'moment-timezone'

const dateIndia = moment.tz(Date.now(), "Asia/Kolkata")

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
  },
  company: {
    type: String,
    required: [true, "Please provide a Company name."],
  },
  mode:{
    type:String,
    required:[true,"Please Enter the type of Internship"]
  },
  fixedSalary: {
    type: String,
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: String,
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  salaryTo: {
    type: String,
    maxLength: [9, "Salary cannot exceed 9 digits"],
  },
  duration:{
    type:String,
    required:[true,"Please Enter the duration of Internship"]
  },
  link:{
    type:String,
    required:[true, "Enter the link of the Website"]
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: dateIndia,
  },
});

export const Internship = mongoose.model("Internship", internshipSchema);
