import "./portfolioUpdateForm.css";
import ApplicationButton from "../StatusOfApplication/ApplicationButton";

const EditFormData = [
  {
    title: "Full Name",
    placeholder: "Enter your full name here",
  },

  {
    title: "Category",
    placeholder: "Enter Category ",
  },
  {
    title: "Profession",
    placeholder: "Enter your profession here",
  },
  {
    title: "Contact Number",
    placeholder: "Enter contact Number",
    type: "number",
  },
  {
    title: "Email Id",
    placeholder: "Enter email Id",
    type: "email",
  },
  {
    title: "About",
    placeholder: "Tell the world about yourself",
  },
  {
    title: "Events Type",
    placeholder: "Enter multiple events you like to host",
  },
  {
    title: "Experience",
    placeholder: "Enter your experience",
    type: "number",
  },

  {
    title: "Talents",
    placeholder: "Enter multiple talents here",
  },
  {
    title: "Minimum Budget",
    placeholder: "Enter your minimum budget",
    type: "number",
  },

  {
    title: "Location",
    placeholder: "Enter your location",
  },
  {
    title: "Instagram",
    placeholder: "Instagram profile url",
  },
  {
    title: "Facebook",
    placeholder: "Facebook profile url",
  },
  {
    title: "Youtube",
    placeholder: "YouTube channel name",
  },
];
const ABOUT_TYPE = "About";

function PortfolioUpdateForm() {

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler} className="edit_portfolio_form_wrapper">
      {EditFormData.map((data, index) => (
        <label key={index} htmlFor={data.title} className="single_form_label">
          <p className="sinle_form_title">{data.title}</p>
          {data.title === ABOUT_TYPE ? (
            <textarea
              name={data.title}
              placeholder={data.placeholder}
              className="single_form_textarea"
              cols="20"
              rows="6"
            />
          ) : (
            <input
            required
              className="single_form_input"
              type={data?.type ? data.type : "text"}
              name={data.title}
              placeholder={data.placeholder}
            />
          )}
        </label>
      ))}

      <ApplicationButton
        type={"submit"}
        text={"Update"}
        className={"edit_portfolio_updateButton"}
      />
      <button type="button" className="edit_portfolio_cancelButton">
        Cancel
      </button>
    </form>
  );
}

export default PortfolioUpdateForm;
