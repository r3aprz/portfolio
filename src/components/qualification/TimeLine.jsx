import React from 'react'
import TimelineItem from './TimelineItem';

const TimeLine = (props) => {

    const item = props.item;
    const idx = props.idx;
    const inView = props.inView;
    const data = props.data;

  return (
    <>
        <div className="qualification__data" key={idx}>
            <div>
            {item.left && (
                <div
                className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                style={{ animationDelay: `${idx * 0.6 + 0.7}s` }}
                >
                <TimelineItem title={item.left.title} subtitle={item.left.subtitle} calendar={item.left.calendar}></TimelineItem>
                </div>
            )}
            </div>
            <div>
            <span
                className={`qualification__rounder qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                style={{ animationDelay: `${idx * 0.6 + 0.5}s` }}
            ></span>
            <span
                className={`qualification__line qualification__animated${inView ? "" : " qualification__animated--reset"}${idx === data.length - 1 ? " qualification__line--last" : ""}`}
                style={{ animationDelay: `${idx * 0.6 + 0.9}s` }}
            ></span>
            </div>
            <div>
            {item.right && (
                <div
                className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                style={{ animationDelay: `${idx * 0.6 + 0.2}s` }}
                >
                <TimelineItem title={item.right.title} subtitle={item.right.subtitle} calendar={item.right.calendar}></TimelineItem>
                </div>
            )}
            </div>
        </div>
    </>
  )
}

export default TimeLine