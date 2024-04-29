import TextField from "@/components/TextField";
import WorldMap from "@/icons/WorldMap";

import { useProfileStore } from "@/store";

interface Props {
  readOnly?: boolean;
}

const Info = ({ readOnly = false }: Props) => {
  const basic = useProfileStore((state) => state.basic);
  const location = useProfileStore((state) => state.location);
  const { name, label } = basic;
  const { city, region } = location;

  const setBasic = useProfileStore((state) => state.setBasic);
  const setLocation = useProfileStore((state) => state.setLocation);

  const handleBasic = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setBasic(event.target.name, event.target.value);
  };

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocation(event.target.name, event.target.value);
  };

  return (
    <>
      <TextField
        name="name"
        value={name}
        onChange={handleBasic}
        readOnly={readOnly}
      >
        <h1>{name}</h1>
      </TextField>
      <TextField
        name="label"
        value={label}
        onChange={handleBasic}
        readOnly={readOnly}
      >
        <h2>{label}</h2>
      </TextField>
      <div style={{ display: "flex" }}>
        <WorldMap />
        <TextField
          name="city"
          value={city}
          onChange={handleLocation}
          readOnly={readOnly}
        >
          <span>{city}</span>
        </TextField>
        <span style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>-</span>
        <TextField
          name="region"
          value={region}
          onChange={handleLocation}
          readOnly={readOnly}
        >
          <span>{region}</span>
        </TextField>
      </div>

      <style>
        {`
          h1 {
            font-size: 2rem;
          }
        
          h2 {
            color: #444;
            font-weight: 500;
            font-size: 1.1rem;
            text-wrap: balance;
          }

          span {
            color: #666;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.85rem;
            letter-spacing: -0.05rem;
          }
          `}
      </style>
    </>
  );
};

export default Info;
