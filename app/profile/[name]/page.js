import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function page({ params }) {
  const Users = {
    paulo: {
      facebook: "https://www.facebook.com/profile.php?id=100005829186424",
      instagram: "https://www.instagram.com/soares_paulo555/",
      WhatsApp: "https://wa.me/+447756598927",
      image: "/paulo.jpg",
    },
  }[params.name.toLowerCase()];

  return (
    <div>
      <div className="flex flex-col items-center p-10 gap-8 justify-center">
        <h1 className="flex flex-col gap-4">
          <Image
            src={Users.image}
            width={100}
            height={100}
            className="rounded-full"
            alt="profile"
          />
          Paulo Ricardo
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <Link href={Users.facebook} className="buttons">
            <FaFacebookSquare className="icons text-[#0866FF]"></FaFacebookSquare>
          </Link>
          <Link href={Users.instagram} className="buttons">
            <Image src="/instagram.png" width={37} height={37}></Image>
          </Link>
          <Link href={Users.WhatsApp} className="buttons">
            <FaWhatsapp className="icons text-[#25d366]"></FaWhatsapp>
          </Link>
        </div>
      </div>
    </div>
  );
}
