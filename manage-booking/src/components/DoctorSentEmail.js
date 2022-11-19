import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const DoctorSentEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cbbcwjg', 'template_348v2zi', form.current, '_Xx00E0O3kVL8jA6R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section>
            <div className='container'>
                <h2 className='tittle-doctor'>Doctor US</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Note</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>

            </div>

        </section>
    )
}

export default DoctorSentEmail

