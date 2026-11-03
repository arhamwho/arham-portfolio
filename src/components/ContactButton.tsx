import { useNavigate } from 'react-router-dom';

interface ContactButtonProps {
  label?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export default function ContactButton({
  label = 'Contact Me',
  type = 'button',
  onClick,
  disabled,
}: ContactButtonProps) {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    else navigate('/#contact');
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick ?? (type === 'button' ? scrollToContact : undefined)}
      className="rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] disabled:opacity-60"
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  );
}
