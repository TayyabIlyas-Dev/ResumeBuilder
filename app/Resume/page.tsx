"use client";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { MdDelete } from "react-icons/md";
import UserProfile from "../Components/topinfo";
import Objective from "../Components/ObjectiveSec";
import PersonalInfo from "../Components/PersnalInfo";
import Education from "../Components/Education";
import Skills from "../Components/skills";
import Experience from "../Components/Experience";
import Reference from "../Components/Refrence";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

// import { Sidebar } from "lucide-react";
// import InfoData from "../Components/InfoData";

const ResumeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    fatherName: "",
    age: 0,
    religion: "",
    maritalStatus: "",
    skills: [""],
    experiences: [{ years: 0, role: "", company: "" }],
    educationList: [""],
  });

  // Input handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle dynamic skills addition/removal
  const handleSkillsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = e.target.value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const removeSkill = (index: number) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  // Handle dynamic experiences addition/removal
  const handleExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: e.target.value,
    };
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { years: 0, role: "", company: "" },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = formData.experiences.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  // Handle dynamic education addition/removal
  const handleEducationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedEducation = [...formData.educationList];
    updatedEducation[index] = e.target.value;
    setFormData({ ...formData, educationList: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      educationList: [...formData.educationList, ""],
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = formData.educationList.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, educationList: updatedEducation });
  };

  // Function to download the resume as PDF
  const downloadPDF = () => {
    const resumeElement = document.querySelector(".resume-render");
    if (resumeElement) {
      html2canvas(resumeElement as HTMLElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "pt",
          format: "a4",
        });
        const imgWidth = 595;
        const pageHeight = 842;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save("resume.pdf");
      });
    }
  };

  return (
    <div className="bg-[#ebebf0] pt-20">

      <div className="flex ">
        {/*  Side Bar */}

        {/* <Sidebar /> */}
        <div className="resume-form-container">
          <div className="p-3 ">
            {/* Data Fill Info */}
            {/* <InfoData /> */}

            <div className='text-black '>

      {/* First title bar with download btn */}
    <div className='flex justify-between  bg-white px-8 py-5 rounded-3xl w-[96%] md:w-[43%]'>
    <h1 className='text-2xl text-start montserrat-bold font-extrabold m-2'>Resume Details</h1>   <button
                onClick={downloadPDF}
                className={` px-3 text-2xl
                     sm:${"hover:border-solid border-2 hover:bg-white hover:text-black bg-black text-white font-semibold flex justify-center items-center gap-2 border-black text-md  px-5   rounded-full"}`}
              >
                <span className='hidden md:block'>Download </span><span><BsFileEarmarkArrowDown/></span>
              </button>
    </div>

         {/* Edit Details Section */}

 
        
        <div className='bg-white rounded-3xl p-5 mt-4 flex flex-col justify-center items-start'>
        <h3 className='p-6 font-bold text-2xl'>Edit Personal Details</h3>
        <div className='font-semibold px-3'><label >Full name</label></div>
        <div className='bg-white w-72 flex justify-center m-3 rounded-md'>
    
        
        <input type="text" name="name" placeholder='Enter First & Last Name' value={formData.name} onChange={handleInputChange} className='text-start w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] '/>
      </div>
      <div className='font-semibold px-3'><label >Profession</label></div>
      <div className='w-72 flex justify-center m-3 rounded-md p-1'>
        
        <input type="text" name="profession" placeholder='Job Title' value={formData.profession} onChange={handleInputChange} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
      </div>

      {/* Personal info */}
      <div className='font-semibold px-3'><label >Father&apos;s Name:</label></div>
      <div className=' w-72 flex justify-center m-3 p-1 rounded-md'>
       
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
      </div>

      <div className='font-semibold px-3'><label >Age</label></div>
      <div className=' w-72 flex justify-center m-3 rounded-md'>
        
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
      </div>
     
      <div className='font-semibold px-3'><label >Religion</label></div>
      <div className=' w-72 flex justify-center m-3 rounded-md'>
       
        <input type="text" name="religion" placeholder='Islam' value={formData.religion} onChange={handleInputChange} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
      </div>
     
      <div className='font-semibold px-3'><label >Marital Status</label></div>
      <div className=' w-72 flex justify-center m-3 rounded-md p-1'>
       
        <input type="text" name="maritalStatus" placeholder='Single/Married' value={formData.maritalStatus} onChange={handleInputChange} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
      </div>

      
        </div>

        {/* Edit Education Section*/}
      
        <div className='bg-white rounded-3xl p-5 mt-4 flex flex-col justify-center items-start'>
          <h3 className='p-6 font-bold text-2xl'>Edit Education Details</h3>
         
      {formData.educationList.map((education, index) => (

        <>

                <div className='font-semibold px-3'><label >Education</label></div>

        <div key={index} className=' w-72 flex justify-center m-3 rounded-md p-1'>
         
          <input type="text" value={education} onChange={(e) => handleEducationChange(e, index)} className='text-start w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
          <button className='pl-2 text-xl text-[#ff3131]' onClick={() => removeEducation(index)}><MdDelete /></button>
        </div>
        </>
      ))}
      <button onClick={addEducation} className='border-solid border-2 hover:bg-black hover:text-white hover:font-semibold border-black text-sm p-1.5 px-3 rounded-md mx-4'>Add Education</button>

        </div>

        {/* Edit Skills Section */}

        <div className='bg-white rounded-3xl p-5 mt-4 flex flex-col justify-center items-start'>
          <h3 className='p-6 font-bold text-2xl'>Edit Skills </h3>
          {formData.skills.map((skill, index) => (
        <>
        
        <div className='font-semibold px-3'><label >Skills</label></div>
        <div key={index} className=' w-72 flex justify-center m-3 rounded-md'>
          
          <input type="text" placeholder='Your Skills' value={skill} onChange={(e) => handleSkillsChange(e, index)} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] '/>
          <button onClick={() => removeSkill(index)} className=' pl-2 text-xl text-[#ff3131]'><MdDelete /></button>
        </div>
        </>
      ))}
      <button onClick={addSkill} className='border-solid border-2 hover:bg-black hover:text-white hover:font-semibold border-black text-sm p-1.5 px-3 mx-3 rounded-md'>Add Skill</button>


        </div>


        {/* Edit Experience Section*/}

         
        <div className='bg-white rounded-3xl p-5 mt-4 flex flex-col justify-center items-start'>
          <h3 className='p-6 font-bold text-2xl'>Edit Experience </h3>
          {formData.experiences.map((experience, index) => (
       <>
               <div className='font-semibold px-3'><label >Experience</label></div>

        <div key={index} className='flex flex-wrap gap-1 justify-center border-solid border-2 rounded-md p-1 m-3'>
          
          <input type="text" placeholder="Years" value={experience.years} onChange={(e) => handleExperienceChange(e, index, 'years')}  className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
          <input type="text" placeholder="Role" value={experience.role} onChange={(e) => handleExperienceChange(e, index, 'role')} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
          <input type="text" placeholder="Company" value={experience.company} onChange={(e) => handleExperienceChange(e, index, 'company')} className='w-full px-5 py-3 rounded-xl  bg-[#f3f4f6] ' />
          <button onClick={() => removeExperience(index)} className='py-1 text-xl text-[#ff3131]'><MdDelete /></button>

          
        </div>
       </>
      ))}
      <button onClick={addExperience} className='border-solid border-2 hover:bg-black hover:text-white hover:font-semibold border-black text-sm p-1.5 px-3 rounded-md mx-3'>Add Experience</button>

         </div>

          {/* download button  */}

          <div className='flex justify-center items-center'>
            
      <button onClick={downloadPDF} className='mt-4 bg-black text-white py-2 px-4 rounded-md'>Download PDF</button>
          </div>
    </div>

            <hr className="mt-6" />

            {/* Render Resume Section */}
            <div className="resume-render border-solid border-8 divide-y-0 mt-14 sm:mx-32 md:mx-48 my-4 rounded-md text-black">
              <UserProfile
                name={formData.name}
                profession={formData.profession}
              />
              <hr />
              <Objective objective="Seeking to build a career with a progressive company where I can learn, grow, and contribute to productivity, while leveraging my skills for future career advancement." />
              <hr />
              <PersonalInfo
                fatherName={formData.fatherName}
                age={formData.age}
                religion={formData.religion}
                maritalStatus={formData.maritalStatus}
              />
              <hr />
              <Education educationList={formData.educationList} />
              <hr />
              <Skills skills={formData.skills} />
              <hr />
              <Experience experiences={formData.experiences} />
              <hr />
              <Reference referenceText="Will be furnished upon request." />
            </div>

            {/* Download PDF Button */}
            <div className="flex justify-center m-3">
              <button
                onClick={downloadPDF}
                className="border-solid border-2 hover:bg-black hover:text-white text-black  font-semibold border-black text-sm p-1.5 px-5 mx-3 rounded-md"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
