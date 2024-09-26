import { Internship } from "../models/internshipModel.js";
import AppError from "../utils/errorUtils.js";

const postIntenship = async(req,res)=>{
    const {
        title,
        company,
        mode,
        fixedSalary,
        salaryFrom,
        salaryTo,
        duration,
        link
      } = req.body;
    
      if (!title  || !company || !mode || !link || !duration) {
        return next(new AppError("Please provide full job details.", 400));
      }
    
      if ((!salaryFrom || !salaryTo) && !fixedSalary) {
        return next(
          new AppError("Please either provide fixed salary or ranged salary.",400)
        );
      }
    
      if (salaryFrom && salaryTo && fixedSalary) {
        return next(
          new AppError("Cannot Enter Fixed and Ranged Salary together.", 400)
        );
      }
      const internship = await Internship.create({
        title,
        company,
        mode,
        fixedSalary,
        salaryFrom,
        salaryTo,
        link,
        duration
      });
      res.status(200).json({
        success: true,
        message: "Job Posted Successfully!",
        internship
      });
}
const EditIntenship = async(req,res)=>{
    const { id } = req.params;
    let internship = await Internship.findById(id);
    if (!internship) {
      return next(new AppError("OOPS! internship not found.", 404));
    }
    internship = await Internship.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Internship Updated!",
    });
}
const DeleteIntenship = async(req,res)=>{
    const { id } = req.params;
    const internship = await Internship.findById(id);
    if (!internship) {
      return next(new AppError("OOPS! Job not found.", 404));
    }
    await internship.deleteOne();
    res.status(200).json({
      success: true,
      message: "Internship Deleted!",
    });
}
const getAllIntenship = async(req,res)=>{
    const internships = await Internship.find({ expired: false });
    res.status(200).json({
      success: true,
      internships,
    });
}

export{
    postIntenship,
    EditIntenship,
    DeleteIntenship,
    getAllIntenship
}