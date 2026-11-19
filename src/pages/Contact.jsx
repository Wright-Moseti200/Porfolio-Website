import { useState } from 'react';
import { ArrowUpRight, Check, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { profile } from '../lib/site';
import { Reveal, SplitHeading, Stagger, StaggerItem, WordsReveal } from '../components/motion/Reveal';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '47bd7ea9-4143-497b-86c1-a3b133f7f8fc');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast('Message sent successfully', {
          description:
            'Thank you for reaching out! I will get back to you as soon as possible.',
          action: { label: 'Close', onClick: () => {} },
        });
        form.reset();
        setStatus('sent');
        window.setTimeout(() => setStatus('idle'), 4000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
        toast('Failed to send message', {
          description: data.message || 'An error occurred while sending your message.',
        });
        setStatus('idle');
      }
    } catch {
      setError('Network error. Please try again in a moment.');
      toast('Failed to send message', {
        description: 'Please check your connection and try again.',
      });
      setStatus('idle');
    }
  };

  return (
    <section className="section-pad pb-[clamp(1rem,3vw,2rem)]" id="contact">
      <Reveal amount={0.12} animation="fade-zoom-in">
        <div className="contact-panel">
          <div
            className="blob"
            style={{ width: 340, height: 340, background: '#b3a1ff', top: -110, left: -80 }}
          />
          <div
            className="blob"
            style={{
              width: 420,
              height: 420,
              background: '#a9c6ff',
              bottom: -160,
              right: -110,
              animationDelay: '-6s',
            }}
          />
          <div
            className="blob"
            style={{
              width: 230,
              height: 230,
              background: '#f0c6ff',
              top: '34%',
              right: '22%',
              animationDelay: '-3s',
              opacity: 0.45,
            }}
          />

          <div className="relative z-10 mx-auto max-w-[44rem] text-center">
            <span className="eyebrow !text-[#4b4577]">
              <span className="h-1 w-1 rounded-full bg-[#4b4577]" />
              Contact
            </span>

            <SplitHeading
              as="h2"
              inView
              className="display mt-4 text-[clamp(2.05rem,4.7vw,3.6rem)] text-[#221d3d]"
              lines={[
                { text: 'Contact with me to' },
                { text: 'sizzle your project', color: '#6f68a3' },
              ]}
            />

            <WordsReveal
              className="mx-auto mt-4 max-w-[31rem] text-[0.95rem] leading-relaxed text-[#4c4777]"
              text="Feel free to contact me if you have any questions. I'm available for new projects or just for chatting."
              stagger={0.016}
              delay={0.06}
            />

            <Stagger
              className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
              variants={['fade-up', 'fade-left']}
              amount={0.3}
            >
              <StaggerItem index={0}>
                <a href={`mailto:${profile.email}`} className="contact-chip">
                  <Mail size={14} strokeWidth={1.9} />
                  {profile.email}
                </a>
              </StaggerItem>
              <StaggerItem index={1}>
                <a href={`tel:${profile.phoneHref}`} className="contact-chip">
                  <Phone size={14} strokeWidth={1.9} />
                  {profile.phoneDisplay}
                </a>
              </StaggerItem>
            </Stagger>

            <form onSubmit={onSubmit} className="mt-7 text-left">
              <Stagger
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                variants={['fade-up', 'fade-up-right']}
                amount={0.25}
                delay={0.08}
              >
                <StaggerItem index={0}>
                  <label htmlFor="name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="contact-field"
                    autoComplete="name"
                  />
                </StaggerItem>
                <StaggerItem index={1}>
                  <label htmlFor="email" className="sr-only">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className="contact-field"
                    autoComplete="email"
                  />
                </StaggerItem>
              </Stagger>

              <Reveal animation="fade-up-left" className="mt-3" amount={0.25}>
                <label htmlFor="message" className="sr-only">
                  Work description
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project"
                  className="contact-field resize-none"
                />
              </Reveal>

              <Reveal animation="fade-zoom-in" className="mt-3" amount={0.25}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-dark w-full !py-3 disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Submit'}
                  {status === 'sent' ? (
                    <Check size={15} />
                  ) : (
                    <ArrowUpRight size={15} className="opacity-80" />
                  )}
                </button>
              </Reveal>

              {error && (
                <Reveal className="mt-2" amount={0.3} animation="fade-up">
                  <p className="text-center text-[0.7rem] font-medium text-[#7c2340]">
                    {error}
                  </p>
                </Reveal>
              )}
            </form>

            <Reveal className="mt-5" animation="fade-up-left" amount={0.3}>
              <p className="text-center text-[0.78rem] text-[#4c4777]/80">
                Usually replies within 24 hours ·{' '}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold underline decoration-[#4c4777]/30 underline-offset-4 transition-colors hover:text-[#221d3d]"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
