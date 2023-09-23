
"use client"
import { useState } from 'react';
import React from "react";
import Image from "next/image";
import bate_icon from  "../../../public/icon/uiw_date.svg";
import "./style.css"

export default function Calendar() {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();


    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);


    const days = Array.from({ length: daysInMonth(date.getFullYear(), date.getMonth()) }, (_, i) => i + 1);


    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };


    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };


    const handleDateSelection = (day) => {
        setSelectedDate(day);
    };


    const selectedDateStyle = {
        backgroundColor: 'black',
        borderRadius:'50px' ,
        color: 'white',
    };

    const unselectedDateStyle = {
        backgroundColor: 'transparent',
        color: 'black',
    };

    return (
        <div className="container calendar-container">
            <div className="row">
                <div className="col-md-6 col-12">
                    {" "}

                    <div className="text-center business-time">
                        <p className="mt-5 business-text">Business Hours</p>
                        <div className="business-chart">
                            <ul className="business-ul">
                                <li>
                                    <button className="date-btn">
                                        <Image src={bate_icon} className="date-img" />
                                    </button>
                                    <p className="day_1">Monday</p>
                                    <p className="time">10:00 AM - 10:00 PM</p>
                                </li>
                                <li>
                                    <button className="date-btn">
                                        <Image src={bate_icon} className="date-img" />
                                    </button>
                                    <p className="day_1">Monday</p>
                                    <p className="time">10:00 AM - 10:00 PM</p>
                                </li>
                                <li>
                                    <button className="date-btn">
                                        <Image src={bate_icon} className="date-img" />
                                    </button>
                                    <p className="day_1">Monday</p>
                                    <p className="time">10:00 AM - 10:00 PM</p>
                                </li>
                                <li>
                                    <button className="date-btn">
                                        <Image src={bate_icon} className="date-img" />
                                    </button>
                                    <p className="day_1">Monday</p>
                                    <p className="time">10:00 AM - 10:00 PM</p>
                                </li>
                                <li>
                                    <button className="date-btn">
                                        <Image src={bate_icon} className="date-img" />
                                    </button>
                                    <p className="day_1">Monday</p>
                                    <p className="time">10:00 AM - 10:00 PM</p>
                                </li>
                                <li>
                                    <button className="date-btn">
                                        <Image src={bate_icon} className="date-img" />
                                    </button>
                                    <p className="day_1">Monday</p>
                                    <p className="time">10:00 AM - 10:00 PM</p>
                                </li>
                                <li>
                                    <button className="date-btn">
                                        <Image src={bate_icon} className="date-img" />
                                    </button>
                                    <p className="day_1">Monday</p>
                                    <p className="time">10:00 AM - 10:00 PM</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12">

                    <p className="mt-5 appointment">Make an Appointment</p>

                    <div className="calendar-container align-items-center justify-content-center d-flex">
                        <div className="month">
                            <ul>
                                <li className="prev" onClick={handlePrevMonth}>&#10094;</li>
                                <li className="next" onClick={handleNextMonth}>&#10095;</li>
                                <li>
                                    <span>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</span>
                                </li>
                            </ul>
                            <ul className="weekdays">
                                <li>SUN</li>
                                <li>MON</li>
                                <li>TUE</li>
                                <li>WED</li>
                                <li>THU</li>
                                <li>FRI</li>
                                <li>SAT</li>
                            </ul>
                            <ul className="days">
                                {Array.from({ length: firstDayOfMonth.getDay() }).map((_, index) => (
                                    <li key={`empty-${index}`} />
                                ))}
                                {days.map((day, index) => (
                                    <li className='days-li'
                                        key={day}
                                        onClick={() => handleDateSelection(day)}
                                        style={selectedDate === day ? selectedDateStyle : unselectedDateStyle}
                                    >
                                        {day}
                                    </li>
                                ))}
                                {Array.from({ length: 7 - (days.length % 7) }).map((_, index) => (
                                    <li key={`empty-end-${index}`} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="hour-text">Hour</p>
                    <div className="mt-4 hour-center align-items-center justify-content-center d-flex">
                        <button className="hour-btn">
                            <p className="hour-time">10:00 AM - 10:15 AM</p>
                        </button>
                    </div>
                    <div className="mt-4 appointment-center align-items-center justify-content-center d-flex">
                        <button className="appointment-btn">
                            <p className="appointment-text">Make An Appointment</p>
                        </button>
                    </div>
                    <div className='empty-box-appintment align-items-center justify-content-center d-flex'>

                    </div>
                </div>
            </div>
        </div>
    );
}
