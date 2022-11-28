import React, { Component } from 'react';
import { connect } from "react-redux";
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './DetailDoctor.scss';


const DetailDoctor = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cbbcwjg', 'template_l4kzb4m', form.current, '_Xx00E0O3kVL8jA6R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
        return (
            <section>
            <div className='doctor-form'>
                <h1>DOCTOR</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='txtb'>
                        <label>Name Paition</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className='txtb'>
                        <label>Receiver</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className='txtb'>
                        <label>Sick Condition</label>
                        <textarea name="message" />
                    </div>

                    <input className='btn' type="submit" value="Send Inf" />
                </form>

            </div>

        </section>
        )

           
}


export default DetailDoctor
