import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import CustomAlert from './CustomAlert'; // Ensure this import is correct
import './App.css'; // Import custom CSS for footer styling

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [alertMessage, setAlertMessage] = useState(null);

  const footerRef = useRef();
  const containerRef = useRef();

  // GSAP animation on initial load
  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' }
    );
  }, []);

  // Click animation
  const handleFooterClick = () => {
    gsap.fromTo(
      footerRef.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.2, ease: 'power1.out', yoyo: true, repeat: 1 }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_imojp2i', 'template_cb19p5k', formData, 'PUHlyKsNFEnoQvLkj')
      .then((response) => {
        setAlertMessage('Feedback submitted successfully!');
        setFormData({
          name: '',
          email: '',
          feedback: ''
        });
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
      })
      .catch((error) => {
        setAlertMessage('Failed to submit feedback. Please try again.');
        setTimeout(() => {
          setAlertMessage(null);
        }, 5000);
      });
  };

  const closeAlert = () => {
    setAlertMessage(null);
  };

  return (
    <>
      {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert} />}
      <footer
        ref={footerRef}
        onClick={handleFooterClick}
        className="footer bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-light py-8"
        style={{
          color: '#fff',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div ref={containerRef} className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-2xl font-bold mb-4">Contact Information</h5>
              <p className="mb-2">
                <strong>Name:</strong> Saurav Kumar Meena
              </p>
              <p className="mb-2">
                <a href="mailto:sauravng1844@gmail.com" className="hover:underline text-light">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  harshitgoyal0810@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <a href="https://www.linkedin.com/in/harshit-goyal-b2aaa6214" className="hover:underline text-light">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  saurav kumar meena
                </a>
              </p>
              <p className="mb-2">
                <a href="https://github.com/sauravjorwal" className="hover:underline text-light">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  Saurav kumar Meena
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-2xl font-bold mb-4">Send Feedback</h5>
              <form onSubmit={handleSubmit} className="form">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label text-light">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-md"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-light">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-md"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="feedback" className="form-label text-light">
                    Feedback
                  </label>
                  <textarea
                    className="form-control rounded-md"
                    id="feedback"
                    name="feedback"
                    rows="3"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-light text-dark hover:bg-indigo-600 hover:text-white transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm font-light">
            © 2024 <span className="font-semibold">Saurav Kumar Meena </span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
