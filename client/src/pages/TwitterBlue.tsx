import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const TwitterBlue: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_u96ktuk',
        'template_3dsy6sq',
        {
          from_name: form.name,
          to_name: 'Cloudcore',
          from_email: form.email,
          to_email: 'carnageitself@gmail.com',
          message: form.message,
        },
        'oiyK82ekyOKggogpg'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you, I will get back to you ASAP !');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong !');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="contact w-[50%]">
      <div className="contactContainer flex mx-10 justify-between items-center mt-5">
        <h1 className="text-2xl font-semibold cursor-pointer">Contact</h1>
        <Link to="/settings">
          <SettingsOutlinedIcon className="hover:bg-gray-200 cursor-pointer hover:rounded-full" />
        </Link>
      </div>
      <hr className="w-full mt-10" />
      <div className="form mx-5">
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Name</span>
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-transparent py-4 px-6 placeholder:text-gray-500 text-black text-sm rounded-lg outline-none font-medium border relative w-full shadow-lg"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your email</span>
            <div className="relative group">
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-transparent py-4 px-6 placeholder:text-gray-500 text-black text-sm rounded-lg outline-none font-medium border relative w-full shadow-lg"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Message</span>
            <div className="relative group">
              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello there, how can I help you?"
                className="bg-transparent py-4 px-6 placeholder:text-gray-500 text-black text-sm rounded-lg outline-none font-medium border relative w-full shadow-lg resize-none"
              />
            </div>
          </label>

          <div className="relative group">
            <button
              type="submit"
              className="bg-transparent px-2 placeholder:text-gray-500 text-black text-sm rounded-lg outline-none font-medium border relative w-24 h-12 shadow-lg"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TwitterBlue;
