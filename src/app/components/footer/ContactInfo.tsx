import Image from "next/image";

const contactInfo = [
  {
    imageUrl: "/locate-svgrepo-com.svg",
    alt: "locate",
    width: 30,
    height: 30,
    text: (
      <span>
        Calle Tagara 16 Res <br /> Las Torres Local 7,38670 Adeje, TF.
      </span>
    ),
    textSize: "",
    redirect: "https://artgoma.com/contacto/",
  },
  {
    imageUrl: "/mail-svgrepo-com.svg",
    alt: "mail",
    width: 30,
    height: 30,
    text: "info@artgoma.com",
    textSize: "",
    redirect: "https://artgoma.com/contacto/",
  },
  {
    imageUrl: "/phone-flip-svgrepo-com.svg",
    alt: "phone",
    width: 30,
    height: 30,
    text: "+34 722 335 337",
    textSize: "",
  },
  {
    imageUrl: "/worldwide-internet-svgrepo-com.svg",
    alt: "worldwide",
    width: 30,
    height: 30,
    text: "artgoma.com",
    textSize: "",
    redirect: "https://artgoma.com/",
  },
];

const ContactInfo = () => {
  return (
    <div>
      <div className="bg-white/20 backdrop-blur-sm w-12 h-72 absolute -z-0 rounded-t-xl"></div>
      <div className="translate-y-4 flex flex-col gap-3">
        {contactInfo.map((item, i) =>
          item.redirect ? (
            <a
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              href={`${item.redirect}`}
              className="flex gap-5 relative z-20 pl-2 group"
            >
              <Image
                className="scale-75 group-hover:scale-90"
                src={item.imageUrl}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />

              <span className="text-white text-md lg:text-xl font-light group-hover:translate-x-2 transition-transform">
                {item.text}
              </span>
            </a>
          ) : (
            <div key={i} className="flex gap-5 relative z-20 pl-2 group">
              <Image
                className="scale-75 group-hover:scale-90"
                src={item.imageUrl}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />

              <span className="text-white text-md lg:text-xl font-light group-hover:translate-x-2 transition-transform">
                {item.text}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
