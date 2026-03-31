import { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';
import styles from './ContactPage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`Contato via Portfólio — ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <motion.div
      className={styles.contact}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      id="page-contact"
    >
      {/* Header */}
      <motion.div className={styles.header} variants={fadeUp}>
        <span className={styles.sectionLabel}>Contato</span>
        <h2 className={styles.sectionTitle}>Vamos Conversar?</h2>
        <p className={styles.sectionSubtitle}>
          Estou disponível para projetos freelance e oportunidades
        </p>
      </motion.div>

      {/* Contact Grid */}
      <motion.div className={styles.contactGrid} variants={fadeUp}>
        {/* Info */}
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>✉</div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{PERSONAL_INFO.email}</span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📍</div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Localização</span>
              <span className={styles.infoValue}>{PERSONAL_INFO.location}</span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>💼</div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Status</span>
              <span className={styles.infoValue}>Disponível para projetos</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-name">Nome</label>
            <input
              id="contact-name"
              className={styles.input}
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              className={styles.input}
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              className={styles.textarea}
              name="message"
              placeholder="Como posso ajudar?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {sent ? '✓ Abrindo email...' : 'Enviar Mensagem →'}
          </motion.button>
        </form>
      </motion.div>

      {/* CTA */}
      <motion.div className={styles.ctaMessage} variants={fadeUp}>
        <p className={styles.ctaText}>
          Prefere um contato direto? Envie um email para{' '}
          <a href={`mailto:${PERSONAL_INFO.email}`} className={styles.ctaEmail}>
            {PERSONAL_INFO.email}
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
