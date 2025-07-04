import React from "react";

function contactus() {
  return (
    <div className="my-32"  >
      {/* Contact Form */}
      <div />
      <section className="my-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Contáctanos</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-700">
          <p>
            <strong>Correo:</strong> TECNOLOGIAINDUSTRIAL.HCO@GMAIL.COM
          </p>
          <p>
            <strong>Tel 1:</strong> +52 868 299 0165
          </p>
          <p>
            <strong>Tel 2:</strong> +52 868 161 9773
          </p>
          <p>
            <strong>Dirección:</strong> Hacienda Quinta Real, H. Matamoros, Tam.
            MX. CP 87345
          </p>
        </div>
      </section>
      {/* Map Section */}
      <section className="my-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Ubicación</h2>
        <div className="w-full h-64 max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.7461686550155!2d-97.53372289190573!3d25.861935792701182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f939c341b717b%3A0x6938c700ff653bef!2sFraccionamiento%20Hacienda%20Quinta%20real!5e0!3m2!1ses-419!2smx!4v1749599637687!5m2!1ses-419!2smx"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default contactus;
