import React from 'react'

const TimelineItem = (props) => {

    const title = props.title;
    const subtitle = props.subtitle;
    const calendar = props.calendar;

  return (
    <>
        <h3 className="qualification__title">{title}</h3>
        <span className="qualification__subtitle">{subtitle}</span>
        <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i> {calendar}
        </div>
    </>
  )
}

export default TimelineItem