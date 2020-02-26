import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

import PropTypes from "prop-types";

export default function InterviewerList(props) {
  const interviewersInList = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={id => props.setInterviewer(id)}
        id={interviewer.id}
      />
    );
  });
  // InterviewerList.propTypes = {
  //   value: PropTypes.number,
  //   onChange: PropTypes.func.isRequired
  // };
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersInList}</ul>
    </section>
  );
}
