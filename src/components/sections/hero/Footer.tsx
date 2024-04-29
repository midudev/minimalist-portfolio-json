import { useProfileStore } from "@/store";
import type { SocialIcon } from "@/types";

/* const SOCIAL_ICONS: SocialIcon = {
    GitHub,
    LinkedIn,
    X,
  }; */

const Footer = () => {

    const basics = useProfileStore(state => state.basic);
    const profiles = useProfileStore(state => state.profiles);

    const { name, email, phone } = basics;

  return (
    <footer className="no-print">
       {/*  {
          email && (
            <a
              href={`mailto:${email}`}
              title={`Enviar un correo electrónico a ${name} al correo ${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
          )
        }
        {
          phone && (
            <a
              href={`tel:${phone}`}
              title={`Llamar por teléfono a ${name} al número ${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone />
            </a>
          )
        } */}
        {/* {
          profiles.map(({ network, url }) => {
            const Icon = SOCIAL_ICONS[network];

            return (
              <a
                href={url}
                title={`Visitar el perfil de ${name} en ${network}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            );
          })
        } */}
      </footer>
  )
}

export default Footer