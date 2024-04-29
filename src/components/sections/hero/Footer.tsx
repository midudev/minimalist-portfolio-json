import GitHub from "@/icons/GitHub";
import LinkedIn from "@/icons/LinkedIn";
import Mail from "@/icons/Mail";
import X from "@/icons/X";
import { useProfileStore } from "@/store";
import type { SocialIcon } from "@/types";
import Profiles from "./Profiles";

export const SOCIAL_ICONS: SocialIcon = {
  Mail,
  GitHub,
  LinkedIn,
  X,
};

interface Props {
  readOnly?: boolean;
}

const Footer = ({ readOnly = false }: Props) => {
  const basics = useProfileStore((state) => state.basic);
  const profiles = useProfileStore((state) => state.profiles);

  const { name } = basics;

  return (
    <>
      <footer className="no-print">
        {profiles.map(({ network, url }) => {
          const Icon = SOCIAL_ICONS[network];

          return (
            <a
              key={network}
              href={url}
              title={`Visitar el perfil de ${name} en ${network}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          );
        })}
        {!readOnly && <Profiles/>}
      </footer>
      
      <style>
        {`
        footer {
          color: #555;
          font-size: 0.65rem;
          display: flex;
          gap: 4px;
          margin-top: 8px;
        }
      
        footer a {
          color: #777;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #eee;
          padding: 4px;
          height: 32px;
          width: 32px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
      
        footer a:hover {
          background: #eee;
          border: 1px solid #ddd;
        }
        `}
      </style>
    </>
  );
};

export default Footer;
