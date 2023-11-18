import { useNavigate } from "react-router-dom";
import AuthTemplate from "../../Common/AuthTemplate";
import "./signup.css";
import {  useState } from "react";
import { makeUnauthenticatedPOSTRequest } from "../../../services/serverHelper";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
  import { endpoints } from "../../../services/apis";

const joiningData = [
  {
    title: "Patron",
  },
  {
    title: "Artist",
  },
  {
    title: "Partners",
  },
  {
    title: "Art-Lovers",
  },
];

function Signup() {
  const navigate = useNavigate();

  const [checkbox , setCheckbox]  = useState(true);

  const [formData, setFormData] = useState({
    role: "Patron",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    contactNumber:{
        countryCode:"",
        number:""
   },  });
console.log(formData.contactNumber.number.length);
  function changeHandler(event) {
        const { name, value } = event.target;
    if (name.startsWith("contactNumber.")) {
      setFormData((prev) => ({
        ...prev,
        contactNumber: {
          ...prev.contactNumber,
          [name.split(".")[1]]: value,
        },
      }));
    }  else{
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if(!checkbox){
      return toast.error('Agree to the Terms and conditions');
    }

    if (formData.password !== formData.passwordConfirm) {
      return toast.error("password do not match" , {
        position:"top-center"
      });
    }

      if (formData.contactNumber.number.length !== 10) {
        return toast.error("please provide a valid phone number" , {
          position:"top-center"
        });
      }

    const toastId = toast.loading("Loading...");
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        endpoints.REGISTER_API,
        formData
      );

      if (response.status === "error") {
        if (response.message?.includes("Please provide a valid email")) {
          toast.error("Email is not valid " , {
            position:"top-center"
          });
        } else if (
          response.message?.includes("Provided email address is already in use")
        ) {
          toast.error("Email is already registered" , {
            position:"top-center"
          });
        } else if (
          response.message?.includes(
            'Duplicate field value: "undefined", Please use another value!'
          )
        ) {
          toast.error("Email is already registered" , {
            position:"top-center"
          });
        } else if (
          response.message?.includes("Please provide a valid phoneNumber")
        ) {
          toast.error("Please provide a valid phoneNumber" , {
            position:"top-center"
          });
        }
        else{
          toast.error(response.message , {
            position:"top-center"
          });
        }
      } else if (response.status === "success") {
        toast.success("Successfully register" , {
          position:"top-center"
        });
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(toastId);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <AuthTemplate justifyFlag={true} signupFlag={true}>
      <div className="signupWrapper">
        <h1 className="signupHeading">
          Joining as{" "}
          <select
            required
            onChange={changeHandler}
            value={formData.role}
            name="role"
            id=""
            className="custom-select"
          >
            {joiningData.map((data, index) => (
              <option
                onChange={changeHandler}
                name="role"
                key={index}
                className="signupSelectOption"
                value={`${data.title}`}
              >
                {data.title}
              </option>
            ))}
          </select>
        </h1>
        <p className="signupPara">Create Your Account</p>
      </div>

      <form onSubmit={submitHandler} className="signupForm">
        <div className="fullNameWrapper">
          <label htmlFor="firstName" className="signupFormLabel">
            <p className="signupFormPara">First Name</p>
            <input
              required
              onChange={changeHandler}
              type="text"
              name="firstName"
              value={formData.firstName}
              className="signupFormInput"
              placeholder="Enter your first Name"
              pattern="^[A-Za-z]+$"
            />
          </label>
          <label htmlFor="fullname" className="signupFormLabel">
            <p className="signupFormPara">Last Name</p>
            <input
              required
              onChange={changeHandler}
              type="text"
              name="lastName"
              value={formData.lastName}
              className="signupFormInput"
              placeholder="Enter your last Name"
              pattern="^[A-Za-z]+$"
            />
          </label>
        </div>
         <label htmlFor="">
                      Contact Number <span className="red">*</span>
                    </label> 
                     
                    <div className="contactNumberWrapper">
                    
                      {/* <select
                        onChange={changeHandler}
                        name="contactNumber.countryCode"
                        value={formData?.contactNumber?.countryCode}
                        style={{
                          width: "15%",
                          marginRight: "4px",
                          paddingRight: "2px",
                        }}
                      > */}
                      <select
    onChange={changeHandler}
    name="contactNumber.countryCode"
    value={formData?.contactNumber?.countryCode}
  >

                        <option value="+91">+91</option>
  <option value="+355">+355</option>
  <option value="+213">+213</option>
  <option value="+376">+376</option>
  <option value="+244">+244</option>
  <option value="+1268">+1268</option>
  <option value="+54">+54</option>
  <option value="+374">+374</option>
  <option value="+61">+61</option>
  <option value="+43">+43</option>
  <option value="+994">+994</option>
  <option value="+1242">+1242</option>
  <option value="+973">+973</option>
  <option value="+880">+880</option>
  <option value="+1246">+1246</option>
  <option value="+375">+375</option>
  <option value="+32">+32</option>
  <option value="+501">+501</option>
  <option value="+229">+229</option>
  <option value="+975">+975</option>
  <option value="+591">+591</option>
  <option value="+387">+387</option>
  <option value="+267">+267</option>
  <option value="+55">+55</option>
  <option value="+673">+673</option>
  <option value="+359">+359</option>
  <option value="+226">+226</option>
  <option value="+257">+257</option>
  <option value="+855">+855</option>
  <option value="+237">+237</option>
  <option value="+1">+1</option>
  <option value="+238">+238</option>
  <option value="+236">+236</option>
  <option value="+235">+235</option>
  <option value="+56">+56</option>
  <option value="+86">+86</option>
  <option value="+57">+57</option>
  <option value="+269">+269</option>
  <option value="+242">+242</option>
  <option value="+506">+506</option>
  <option value="+385">+385</option>
  <option value="+53">+53</option>
  <option value="+357">+357</option>
  <option value="+420">+420</option>
  <option value="+45">+45</option>
  <option value="+253">+253</option>
  <option value="+1767">+1767</option>
  <option value="+1809">+1809</option>
  <option value="+670">+670</option>
  <option value="+593">+593</option>
  <option value="+20">+20</option>
  <option value="+503">+503</option>
  <option value="+240">+240</option>
  <option value="+291">+291</option>
  <option value="+372">+372</option>
  <option value="+251">+251</option>
  <option value="+679">+679</option>
  <option value="+358">+358</option>
  <option value="+33">+33</option>
  <option value="+241">+241</option>
  <option value="+220">+220</option>
  <option value="+995">+995</option>
  <option value="+49">+49</option>
  <option value="+233">+233</option>
  <option value="+30">+30</option>
  <option value="+1473">+1473</option>
  <option value="+502">+502</option>
  <option value="+224">+224</option>
  <option value="+245">+245</option>
  <option value="+592">+592</option>
  <option value="+509">+509</option>
  <option value="+504">+504</option>
  <option value="+36">+36</option>
  <option value="+354">+354</option>
  <option value="+91">+91</option>
  <option value="+62">+62</option>
  <option value="+98">+98</option>
  <option value="+964">+964</option>
  <option value="+353">+353</option>
  <option value="+972">+972</option>
  <option value="+39">+39</option>
  <option value="+225">+225</option>
  <option value="+1876">+1876</option>
  <option value="+81">+81</option>
  <option value="+962">+962</option>
  <option value="+7">+7</option>
  <option value="+254">+254</option>
  <option value="+686">+686</option>
  <option value="+383">+383</option>
  <option value="+965">+965</option>
  <option value="+996">+996</option>
  <option value="+856">+856</option>
  <option value="+371">+371</option>
  <option value="+961">+961</option>
  <option value="+266">+266</option>
  <option value="+231">+231</option>
  <option value="+218">+218</option>
  <option value="+423">+423</option>
  <option value="+370">+370</option>
  <option value="+352">+352</option>
  <option value="+389">+389</option>
  <option value="+261">+261</option>
  <option value="+265">+265</option>
  <option value="+60">+60</option>
  <option value="+960">+960</option>
  <option value="+223">+223</option>
  <option value="+356">+356</option>
  <option value="+692">+692</option>
  <option value="+222">+222</option>
  <option value="+230">+230</option>
  <option value="+52">+52</option>
  <option value="+691">+691</option>
  <option value="+373">+373</option>
  <option value="+377">+377</option>
  <option value="+976">+976</option>
  <option value="+382">+382</option>
  <option value="+212">+212</option>
  <option value="+258">+258</option>
  <option value="+95">+95</option>
  <option value="+264">+264</option>
  <option value="+674">+674</option>
  <option value="+977">+977</option>
  <option value="+31">+31</option>
  <option value="+64">+64</option>
  <option value="+505">+505</option>
  <option value="+227">+227</option>
  <option value="+234">+234</option>
  <option value="+850">+850</option>
  <option value="+47">+47</option>
  <option value="+968">+968</option>
  <option value="+92">+92</option>
  <option value="+680">+680</option>
  <option value="+507">+507</option>
  <option value="+675">+675</option>
  <option value="+595">+595</option>
  <option value="+51">+51</option>
  <option value="+63">+63</option>
  <option value="+48">+48</option>
  <option value="+351">+351</option>
  <option value="+974">+974</option>
  <option value="+40">+40</option>
  <option value="+7">+7</option>
  <option value="+250">+250</option>
  <option value="+1869">+1869</option>
  <option value="+1758">+1758</option>
  <option value="+1784">+1784</option>
  <option value="+685">+685</option>
  <option value="+378">+378</option>
  <option value="+239">+239</option>
  <option value="+966">+966</option>
  <option value="+221">+221</option>
  <option value="+381">+381</option>
  <option value="+248">+248</option>
  <option value="+232">+232</option>
  <option value="+65">+65</option>
  <option value="+421">+421</option>
  <option value="+386">+386</option>
  <option value="+677">+677</option>
  <option value="+252">+252</option>
  <option value="+27">+27</option>
  <option value="+82">+82</option>
  <option value="+211">+211</option>
  <option value="+34">+34</option>
  <option value="+94">+94</option>
  <option value="+249">+249</option>
  <option value="+597">+597</option>
  <option value="+268">+268</option>
  <option value="+46">+46</option>
  <option value="+41">+41</option>
  <option value="+963">+963</option>
  <option value="+886">+886</option>
  <option value="+992">+992</option>
  <option value="+255">+255</option>
  <option value="+66">+66</option>
  <option value="+228">+228</option>
  <option value="+676">+676</option>
  <option value="+1868">+1868</option>
  <option value="+216">+216</option>
  <option value="+90">+90</option>
  <option value="+993">+993</option>
  <option value="+688">+688</option>
  <option value="+256">+256</option>
  <option value="+380">+380</option>
  <option value="+971">+971</option>
  <option value="+44">+44</option>
  <option value="+1">+1</option>
  <option value="+598">+598</option>
  <option value="+998">+998</option>
  <option value="+678">+678</option>
  <option value="+379">+379</option>
  <option value="+58">+58</option>
  <option value="+84">+84</option>
  <option value="+967">+967</option>
  <option value="+260">+260</option>
  <option value="+263">+263</option>
                      </select>
                      {/* <input
                        name="contactNumber.number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        onChange={changeHandler}
                        value={formData?.contactNumber?.number}
                        placeholder="1234567890"
                        style={{ width: "83%" }}
                        required
                      /> */}
                       <input
    name="contactNumber.number"
    maxLength={10}
    pattern="[0-9]{10}"
    onChange={changeHandler}
    value={formData?.contactNumber?.number}
    placeholder="1234567890"
    required
  />
                    </div>

        <label htmlFor="email" className="signupFormLabel">
          <p className="signupFormPara">Email</p>
          <input
            required
            onChange={changeHandler}
            value={formData.email}
            type="email"
            name="email"
            className="signupFormInput "
            placeholder="Enter your email address"
          />
        </label>
        <label htmlFor="password" className="signupFormLabel">
          <p className="signupFormPara">Password(minimum 8 characters) </p>
          <input
            required
            onChange={changeHandler}
            value={formData.password}
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            className="signupFormInput  "
            minLength={8}
            placeholder="Enter your password"
          />
          <span
        onClick={togglePasswordVisibility}
        className={`fa fa-fw field-icon toggle-password ${
          passwordVisible ? 'fa-eye-slash' : 'fa-eye'
        }`}
      ></span>
        </label>
        <label htmlFor="confirmPassword" className="signupFormLabel">
          <p className="signupFormPara">Confirm Password</p>
          <input
            required
            value={formData.passwordConfirm}
            onChange={changeHandler}
            type={passwordVisible ? 'text' : 'password'}
            name="passwordConfirm"
            className="signupFormInput "
            placeholder="confirm password"
          />
          {/* <span
        onClick={togglePasswordVisibility}
        className={`fa fa-fw field-icon toggle-password ${
          passwordVisible ? 'fa-eye-slash' : 'fa-eye'
        }`}
      ></span> */}
        </label>

       
        <div className="termAndCondition" style={{display: "flex",flexDirection: "row",justifyContent: "flex-start",marginLeft:"19px"}}>
        <input type="checkbox" checked={checkbox===true} onChange={()=>setCheckbox((prev)=>!prev)} />
        <p onClick={()=>navigate("/termAndCondition")} style={{marginTop:"2px" , color:"red" , cursor:"pointer"}}>I Agree to the Terms And Condition</p>
        </div> 

        <button type="submit" className="registerButton">
          Register
        </button>


       {/* <div className="termAndCondition">
        <input type="checkbox" checked={checkbox===true} onChange={()=>setCheckbox((prev)=>!prev)} />
        <p onClick={()=>navigate("/termAndCondition")} style={{marginTop:"10px" , color:"red" , cursor:"pointer"}}>I Agree to theTerms And Condition</p>
        </div>        */}
        <p className=" navigateLoginPara">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/Login")} className="">
            Login
          </span>
        </p>
      </form>
    </AuthTemplate>
  );
}

export default Signup;
