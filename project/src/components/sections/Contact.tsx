import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out if you have any questions or want to work together on a project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-green-500 mb-4">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                      placeholder="Shubhanshu"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                      placeholder="shubhsriv34@gmail.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium transition-all ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:from-purple-700 hover:to-blue-600 active:scale-98'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div 
              className="flex flex-col justify-between"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                      <a href="mailto:john.doe@example.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        shubhsriv34@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                      Varanasi Uttar Pradesh, INDIA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                      <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        +91-7355125762
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Available For</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-white">Freelance Projects</h5>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-white">Full-time Positions</h5>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-white">Hybrid Positions</h5>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-white">Remote Work</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;