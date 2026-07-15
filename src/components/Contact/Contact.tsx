import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import css from "./Contact.module.css";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Daten отправлены:", formData);
        alert("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
        setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    };

    return (
        <section id="contacts" className={css.contactSection}>
            <div className={css.container}>
                <h2 className={css.title}>SCHREIBE UNS EINE E-MAIL</h2>
                <p className={css.subtitle}>
                    Wir melden uns in der Regel noch am gleichen Tag, spätestens aber innerhalb von 24 Stunden.
                </p>

                <form onSubmit={handleSubmit} className={css.form}>
                    <div className={css.row}>
                        <div className={css.formGroup}>
                            <label htmlFor="name" className={css.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={css.input}
                            />
                        </div>

                        <div className={css.formGroup}>
                            <label htmlFor="company" className={css.label}>Unternehmen (Optional)</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className={css.input}
                            />
                        </div>
                    </div>

                    <div className={css.row}>
                        <div className={css.formGroup}>
                            <label htmlFor="email" className={css.label}>E-Mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={css.input}
                            />
                        </div>

                        <div className={css.formGroup}>
                            <label htmlFor="phone" className={css.label}>Telefonnummer</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={css.input}
                            />
                        </div>
                    </div>

                    <div className={css.formGroupFull}>
                        <label htmlFor="message" className={css.label}>Nachricht</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className={css.textarea}
                        ></textarea>
                    </div>

                    <button type="submit" className={css.submitBtn}>
                        Absenden
                    </button>
                </form>

                {/* Блок прямых контактов с новыми иконками */}
                <div className={css.directContact}>
                    <h3 className={css.directTitle}>ODER KONTAKTIERE UNS DIREKT</h3>
          
                    <div className={css.contactGrid}>
                        <div className={css.contactCard}>
                            <div className={css.iconWrapper}>
                                <FaPhoneAlt className={css.reactIcon} />
                            </div>
                            <h4 className={css.cardTitle}>TELEFON</h4>
                            <a href="tel:022129276970" className={css.link}>0221 2927 6970</a>
                            <p className={css.time}>Mo-Fr: 9:00 bis 17:00 Uhr</p>
                            <p className={css.time}>Sa: 10:00 bis 17:00 Uhr</p>
                        </div>

                        <div className={css.contactCard}>
                            <div className={css.iconWrapper}>
                                <IoLogoWhatsapp className={css.reactIcon} />
                            </div>
                            <h4 className={css.cardTitle}>WHATSAPP</h4>
                            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className={css.link}>
                                0157 85616105
                            </a>
                            <p className={css.time}>Jederzeit</p>
                        </div>

                        <div className={css.contactCard}>
                            <div className={css.iconWrapper}>
                                <FaRegEnvelope className={css.reactIcon} />
                            </div>
                            <h4 className={css.cardTitle}>E-MAIL</h4>
                            <a href="mailto:kontakt@greenfeast-catering.de" className={css.link}>
                                kontakt@greenfeast-catering.de
                            </a>
                            <p className={css.time}>Jederzeit</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}