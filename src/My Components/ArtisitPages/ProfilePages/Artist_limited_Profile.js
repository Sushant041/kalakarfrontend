import React from "react";
import Artist_navbar from "../Artist_navbar";
import "./Artist_Profile.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { artistProfilePoints } from "../../../services/apis";
import {
  makeAuthenticatedGETRequest,
  makeAuthenticatedPATCHRequest,
} from "../../../services/serverHelper";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

export default function Artist_limited_Profile() {
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const languages = ["Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Kannada", "Punjabi", "Malayalam", "Odia", "Assamese", "Bhojpuri", "Haryanvi", "Rajasthani", "Sindhi", "Konkani", "Manipuri", "Maithili", "Santali", "Kashmiri", "Nepali", "Dogri", "Kokborok", "Khasi", "Mizo (Lushai)", "Tulu", "Garhwali", "Kumaoni", "Bhili", "English", "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese", "Korean", "Russian"];

  const CategoryArt = ["Dance", "Music", "Song", "Theator", "Any Other"];

  const experience = ["0", "1-10", "10-25", "25-50", "50-100", "100-250", "250 above"];


  const Dance=["Bharatanatyam", "Bihu", "Chhau", "Dandiya Raas", "Dollu Kunitha", "Dumhal", "Garba", "Gaur Dance", "Giddha", "Gotipua", "Jhumar", "Kacchi Ghodi", "Kalbelia", "Karakattam", "Kathak", "Kathakali", "Kathakar", "Koli", "Kuchipudi", "Lavani", "Manipuri", "Mayurbhanj Chhau", "Mohiniyattam", "Odissi", "Raas Leela", "Sattriya", "Tamasha", "Tera Tali", "Thang-Ta", "Yakshagana"]

  const Song = ["Dhrupad", "Khayal", "Thumri", "Tappa", "Ghazal", "Qawwali", "Kriti", "Varnam", "Tillana", "Ragamalika", "Javali", "Swarajati", "Bhajans", "Kirtan", "Sufi Music", "Abhangas", "Shabad Kirtan (Sikh)"]

  const Theator=["Bhavai", "Bhand Pather", "Jatra", "Koodiyattam", "Mudiyettu", "Nautanki", "Pandavani", "Pothu Koothu", "Ramlila", "Ram Lila", "Ras Leela", "Sattriya", "Tamaasha", "Therukoothu", "Yakshagana"]

  const Music=["Bansuri", "Dilruba", "Dholak", "Ektara", "Esraj", "Flute (Bansuri)", "Ghatam", "Harmonium", "Jal Tarang", "Mridangam", "Nadaswaram", "Pakhawaj", "Ravanahatha", "Sarangi", "Sarod", "Santoor", "Shehnai", "Sitar", "Tabla", "Tanpura", "Tumbi", "Veena"]

  // avialable options
  const artCategoryoptions = CategoryArt.map((item) => ({ value: item, label: item }));
  const languageoptions=languages.map((item) => ({ value: item, label: item }));
  const artnatureoptions=[...Dance, ...Song, ...Theator, ...Music].map((item) => ({ value: item, label: item }));

  const [basicFormData, setBasicFormData] = useState({
    personalInfo: {
      age: "",
      gender: "Male",
      language: languages[0],
    },
    address: {
      state: "Andhra Pradesh",
      city: "",
      pincode: "",
    },
    artinfo: {
      artCategory: "",
      artName: "",
    },
    performanceInfo: {
      experience: "",
      totalPerfs:0
    },
  });

  const [go, setgo] = useState(false)

  //selected options
  const [Categoryartoptions, setCategoryartoptions] = useState(null);
  const [languagesoptions,setlanguagesoptions]=useState(null)
  const [natureOfArtoptions,setnatureOfArtoptions]=useState(null)

  const changeHandler = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("address.")) {
      // If the change is related to address, update the nested state
      setBasicFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("personalInfo.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        personalInfo: {
          ...prevData.personalInfo,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("artinfo.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        artinfo: {
          ...prevData.artinfo,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("performanceInfo.")) {
      setBasicFormData((prevData) => ({
        ...prevData,
        performanceInfo: {
          ...prevData.performanceInfo,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setBasicFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await makeAuthenticatedGETRequest(
        artistProfilePoints.FETCH_PROFILE_DATA_API,
        accessToken
      );
      console.log("ress", response);

      if (response.status === "success") {
        const { age, language, gender } = response.data.personalInfo;
        const { artCategory, artName } = response.data.artInfo;
        const { pincode, state, city } = response.data.address;
        const { experience,totalPerfs } = response.data.performanceInfo;

        setBasicFormData({
          personalInfo: {
            age: age,
            gender: gender,
            language: language,
          },
          address: {
            state: state,
            city: city,
            pincode: pincode,
          },
          artinfo: {
            artCategory: artCategory,
            artName: artName,
          },
          performanceInfo: {
            experience: experience,
            totalPerfs:totalPerfs
          },
        });
        // console.log(basicFormData);
        setgo(true);
        setCategoryartoptions(artCategory.split(" ").map((item) => ({ value: item, label: item })))
        setlanguagesoptions(language.split(" ").map((item) => ({ value: item, label: item })))
        setnatureOfArtoptions(artName.split(" ").map((item) => ({ value: item, label: item })))
        // console.log(Categoryartoptions)
      } else {
        toast.error("something went wrong , please refresh the page", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  useEffect(()=>{
    if (
      basicFormData.personalInfo.age !== "" &&
      basicFormData.personalInfo.gender !== "" &&
      basicFormData.personalInfo.language !== "" &&
      basicFormData.address.pincode !== "" &&
      basicFormData.address.state !== "" &&
      basicFormData.address.city !== "" &&
      basicFormData.artinfo.artCategory !== "" &&
      basicFormData.artinfo.artName !== "" &&
      basicFormData.performanceInfo.totalPerfs !== 0 &&
      basicFormData.performanceInfo.experience !== ""
    ) {
      // console.log(basicFormData);
      // console.log("00000");
      // navigate("/artist_profile");
    }
    // console.log(basicFormData);
    // console.log("11111")
  },[go])




  const basicSubmitHandler = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Loading...");

    let address = basicFormData.address;
    let personalInfo = basicFormData.personalInfo;
    let performanceInfo = basicFormData.performanceInfo;
    let artInfo = basicFormData.artinfo;
    artInfo.artCategory=Categoryartoptions.map(option => option.value).join(" ")
    personalInfo.language=languagesoptions.map(option => option.value).join(" ")
    artInfo.artName=natureOfArtoptions.map(option => option.value).join(" ")
    try {
      const response = await makeAuthenticatedPATCHRequest(
        artistProfilePoints.UPDATE_PROFILE_DATA_API,
        { address, personalInfo, artInfo, performanceInfo },
        accessToken
      );

      if (response.status === "success") {
        toast.success(" successFully updated", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/artist_profile")
      } else {
        toast.error(response.message, {
          position: "top-center",
        });
        toast.error("server error please try again", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };
  return (
    <>
      <Artist_navbar />
      <div
        style={{ fontFamily: "Poppins", width: "90%" }}
        className="BasicProfile_Infoform"
      >
        <form onSubmit={basicSubmitHandler}>
          <div className="BasicProfile_PersonalINfo">
            <div className="BasicProfile_inputfield" style={{ width: "30%" }}>
              <label htmlFor="age">
                Age <span className="red">*</span>
              </label>
              {/* <input
                type="number"
                name="personalInfo.age"
                onChange={changeHandler}
                value={basicFormData.personalInfo.age}
                style={{ width: "100%" }}
                required
              ></input> */}
              <select name="personalInfo.age"
                onChange={changeHandler}
                value={basicFormData.personalInfo.age}
                style={{ width: "100%" }}
                required >
                {Array.from({ length: 100 - 17 }, (_, index) => (
                  <option key={index} value={index + 18}>
                    {index + 18}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="BasicProfile_inputfield gender"
              style={{ width: "30%" }}
            >
              <label>
                Gender <span className="red">*</span>
              </label>
              <div className="Genderinfo1">
                <select
                  style={{
                    width: "100%",
                    fontFamily: "Poppins",
                    background: "transparent",
                    color: "black",
                    height: "60px",
                    border: "1px solid black",
                  }}
                  name="personalInfo.gender"
                  value={basicFormData.personalInfo.gender}
                  onChange={changeHandler}
                  required
                >
                  {/* <option selected hidden>
                    Gender
                  </option> */}
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Transgender</option>
                  <option value="Any other">Any other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="BasicProfile_inputfield" style={{ width: "30%" }}>
              <label htmlFor="age">
                Language  <span className="red">*</span>
              </label>
              {/* <select
                onChange={changeHandler}
                required
                style={{
                  fontFamily: "Poppins",
                  background: "transparent",
                  color: "black",
                  height: "60px",
                  width: "100%",
                  border: "1px solid black",
                }}
                name="personalInfo.language"
                id=""
                value={basicFormData.personalInfo.language}
              >
                <option value="" selected defaultChecked>
                  You can select languages
                </option>
                {languages.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select> */}
                <Select
                  defaultValue={languagesoptions}
                  value={languagesoptions}
                  isMulti
                  onChange={setlanguagesoptions}
                  options={languageoptions}
                />
            </div>
          </div>
          <div className="BasicProfile_Address">
            <div className="BasicProfile_Addressshort">
              <div className="BasicProfile_inputfield" style={{ width: "30%" }}>
                <label>
                  Pincode <span className="red">*</span>
                </label>
                <input
                  maxLength={6}
                  pattern="[0-9]{6}"
                  min="100000"
                  max="999999"
                    onChange={changeHandler}
                  value={basicFormData.address.pincode}
                  name="address.pincode"
                  type="number"
                  style={{ width: "100%" }}
                  required
                ></input>
              </div>
              <div className="BasicProfile_inputfield" style={{ width: "30%" }}>
                <label>State</label>
                <select
                    onChange={changeHandler}
                  name="address.state"
                  value={basicFormData.address.state}
                  style={{ width: "100%" }}
                  required
                >
                  {/* <option selected hidden>
                    Select State
                  </option> */}
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="BasicProfile_inputfield" style={{ width: "30%" }}>
                <label>City</label>
                <input
                    onChange={changeHandler}
                  name="address.city"
                  value={basicFormData.address.city}
                  type="text"
                  style={{ width: "100%" }}
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="BasicProfile_PersonalINfo">
            <div className="BasicProfile_OtherDetails">
              <div className="BasicProfile_inputfield">
                <label>Category of Art* </label>
                {/* <select
                  onChange={changeHandler}
                  name="artinfo.artCategory"
                  value={basicFormData.artinfo.artCategory}
                  required
                >
                  <option selected hidden>
                    Select Category of Art
                  </option>
                  {natureofArt.map((option) => (
                  <option value={option}>{option}</option>
                ))}
                </select> */}
                <Select
                  defaultValue={Categoryartoptions}
                  value={Categoryartoptions}
                  isMulti
                  onChange={setCategoryartoptions}
                  options={artCategoryoptions}
                />
              </div>
              <div className="BasicProfile_inputfield">
                <label>Name of Art* </label>
                {/* <select
                  onChange={changeHandler}
                  name="artinfo.artName"
                  value={basicFormData.artinfo.artName}
                  required
                >
                  <option selected hidden>
                    Select Name of Art
                  </option>
                  {nameofart.map((option) => (
                  <option value={option}>{option}</option>
                ))}
                </select> */}
                <Select
                  defaultValue={natureOfArtoptions}
                  value={natureOfArtoptions}
                  isMulti
                  onChange={setnatureOfArtoptions}
                  options={artnatureoptions}
                />
              </div>
              <div className="BasicProfile_inputfield">
                <label>Experience* </label>
                {/* <input
                    onChange={changeHandler}
                  name="performanceInfo.experience"
                  value={basicFormData.performanceInfo.experience}
                  type="text"
                  required
                ></input> */}
                <select required onChange={changeHandler} name="performanceInfo.experience" value={basicFormData.performanceInfo.experience} >
                  {[...Array(101).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="BasicProfile_inputfield">
                <label>Total Number of Performances* </label>
                {/* <input
                    onChange={changeHandler}
                  name="performanceInfo.totalPerfs"
                  value={basicFormData.performanceInfo.totalPerfs}
                  type="text"
                  required
                ></input> */}
                <select name="performanceInfo.totalPerfs" value={basicFormData.performanceInfo.totalPerfs} onChange={changeHandler} required>
                    {experience.map((option)=>(
                      <option value={option}>{option}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <button className="updateBtn">Submit</button>
        </form>
      </div>
    </>
  );
}
