import * as React from "react"
import {useEffect, useState} from "react"
import emailjs from 'emailjs-com';
//import InputField from "./inputField";
import {Card, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from '../styles/Home.module.css'
import InputField from "./inputField";

const ContactForm = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        role: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //serviceID, templateID, templateParams, publicKey
        emailjs.send('service_xsatwbk', 'template_7rwd7bo', values, 'B4vnL8h_17S_Ybtls')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    fullName: '',
                    email: '',
                    role: '',
                    message: ''
                });
                setStatus('SUCCESS');
            }, error => {
                console.log('FAILED...', error);
            });
    }

    useEffect(() => {
        if(status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    return (

        <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">

            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }} className={styles.aboutMe}>
                <CardContent>
                    <Typography gutterBottom>
                        Jetzt kostenloses
                        Online-Kennenlernen vereinbaren
                    </Typography>
                    <Typography gutterBottom variant="h4">
                        Familienfotografin Nina Nitzsche
                    </Typography>
                    <Typography gutterBottom >
                        Waldstraße 10
                        12487 Berlin
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
Sende mir gern eine Nachricht & ich melde mich schnellstmöglich zurück.
                    </Typography>
                    {status && renderAlert()}
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <InputField value={values.fullName} handleChange={handleChange}  label="Full Name" name="fullName" type="text"    rows={3}/>
                            </Grid>
                            <Grid item xs={12}>
                                <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" rows={2} />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField value={values.message} handleChange={handleChange} name="message" label="Message"  rows={4}    type="message"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit"  variant="outlined" fullWidth>Senden</Button>
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>your message submitted successfully</p>
    </div>
)

export default ContactForm