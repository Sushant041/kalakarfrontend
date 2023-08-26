import "./artistApplication.css";
import bgFilter from "./assets/bgFilter.svg";
import background from "./assets/background.svg";

const filterData = [
  {
    title: "Posted at",
  },
  {
    title: "Events",
  },
  {
    title: "Status ",
  },
  {
    title: "Sort by",
  },
];

const artistForm = [
  {
    date: "12/03/23",
    event: "Kathak Dancer For Festival",
    application: "3 ",
    status: "Open",
    deadline: "30/03/23",
  },
  {
    date: "12/03/23",
    event: "Kathak Dancer For Festival",
    application: "2 ",
    status: "Closed",
    deadline: "30/03/23",
  },
  {
    date: "12/03/23",
    event: "Kathak Dancer For Festival",
    application: "1 ",
    status: "Open",
    deadline: "30/03/23",
  },
  {
    date: "12/03/23",
    event: "Kathak Dancer For Festival",
    application: "4 ",
    status: "Closed",
    deadline: "30/03/23",
  },
  {
    date: "12/03/23",
    event: "Mime Actor",
    application: "4 ",
    status: "Closed",
    deadline: "30/03/23",
  },
  {
    date: "12/03/23",
    event: "Kathak Dancer For Festival",
    application: "4 ",
    status: "Open",
    deadline: "30/03/23",
  },
];

const eventAppli = [
    {
        date:"12/03/23",
        event:"Kathak Dancer For Festival",
        application:"4",
        status:"Open",
        deadline:"30/03/23"
    },
    {
        date:"12/03/23",
        event:"Kathak Dancer For Festival",
        application:"4",
        status:"Open",
        deadline:"30/03/23"
    },
    {
        date:"12/03/23",
        event:"Kathak Dancer For Festival",
        application:"4",
        status:"Open",
        deadline:"30/03/23"
    },
    {
        date:"12/03/23",
        event:"Kathak Dancer For Festival",
        application:"4",
        status:"Closed",
        deadline:"30/03/23"
    },
    {
        date:"12/03/23",
        event:"Kathak Dancer For Festival",
        application:"4",
        status:"Closed",
        deadline:"30/03/23"
    },
    {
        date:"12/03/23",
        event:"Kathak Dancer For Festival",
        application:"4",
        status:"Closed",
        deadline:"30/03/23"
    },
]


function ArtistApplication() {
  return (
    <div className="patron_artist_appli_wrapper">
      <section className="artist_image_section">
        <img src={background} alt="background" className="artist_bgImg" />
        <img src={bgFilter} alt="" className="artist_bgFilter" />
        <p className="artist_application_text">Applications</p>
      </section>

      <section className="artist_filter_section">
        {filterData.map((data, index) => (
          <div key={index} className="single_artist_filter">
            <p className="single_artist_title">{data.title}</p>
            <select name="" id="" className="single_artist_select">
              <option
                selected
                disabled
                value=""
                className="single_artist_options"
              >
                Select
              </option>
            </select>
          </div>
        ))}
      </section>

      {/* table section  for large width */}
      <section className="artist_application_form_container">
        <div className="artist_form_head">
          <p className="artist_head_date">Date</p>
          <p className="artist_head_Event">Event</p>
          <p className="artist_head_appli">Applications</p>
          <p className="artist_head_status">Application Status</p>
          <p className="artist_head_deadline">Deadline</p>
        </div>

        <div className="artist_form_body">
          {artistForm.map((data, index) => (
            <div key={index} className="single_artist_body_row">
              <p className="body_date artist_body ">{data.date}</p>
              <p className="body_event artist_body">{data.event}</p>
              <p className="body_appli artist_body">{data.application} <span className="view_appli_text artist_body">(View Applications)</span> </p>
              <p className={`body_status artist_body ${data.status=== 'Closed'?('statusClose'):('statusOpen')} `}>{data.status}</p>
              <p className="body_deadline artist_body">{data.deadline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* table section for small width */}
      <section className="artist_event_appli_container">
              {
                eventAppli.map((data , index)=>(
                    <div key={index} className="single_artist_event">
                     <div className="single_element">
                        <p className="single_ele_title">Date</p>
                        <p >{data.date}</p>
                     </div>
                     <div  className="single_element">
                        <p className="single_ele_title">Event</p>
                        <p>{data.event}</p>
                     </div>
                     <div className="single_element">
                        <p className="single_ele_title">Applications</p>
                        <p>{data.application} <span className="view_appli_text">(View Applications)</span></p>
                     </div>
                     <div className="single_element" > 
                        <p className="single_ele_title">Application Status</p>
                        <p className={`${data.status === 'Closed'?('statusClose'):('statusOpen')}`}>{data.status}</p>
                     </div>
                     <div className="single_element">
                        <p className="single_ele_title">Deadline</p>
                        <p>{data.deadline}</p>
                     </div>
                    </div>
                ))
              }
      </section>
    </div>
  );
}

export default ArtistApplication;
