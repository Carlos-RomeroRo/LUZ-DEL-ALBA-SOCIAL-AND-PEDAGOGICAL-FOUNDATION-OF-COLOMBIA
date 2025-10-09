function ContactButton() {
  const email = "fundacionluzdelalba2023@hotmail.com"; // 📩 destinatario fijo
  const subject = "QUIERO CONTACTARME CON LA FUNDACIÓN LUZ DEL ALBA PARA ...";
  const body = "Hola, me gustaría hablar contigo sobre...";

  return (
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Enviar correo a Fundación Luz del Alba"
      className="flex items-center p-1 text-white hover:text-red-500 transition-colors"
    >
      {/* Ícono Gmail */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-5 h-5"
      >
        <path
          fill="#EA4335"
          d="M24 24L4 10v28h8V21l12 9 12-9v17h8V10z"
        />
        <path fill="#FBBC05" d="M4 10l20 14L24 24l4-2L44 10z" />
        <path fill="#4285F4" d="M36 10L24 19 12 10z" />
      </svg>
    </a>
  );
}

export default ContactButton;
