import TextField from "@/components/TextField";
import WorldMap from "@/icons/WorldMap";

import { useProfileStore } from "@/store";

interface InfoProps {
  readOnly?: boolean;
}

const Info = ({readOnly = false}: InfoProps) => {
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
  }

  return (
    <>
      <TextField name="name" value={name} onChange={handleBasic} readOnly={readOnly}>
        <h1>{name}</h1>
      </TextField>
      <TextField name="label" value={label} onChange={handleBasic} readOnly={readOnly}>
        <h2>{label}</h2>
      </TextField>
      <div style={{ display: 'flex'}}>
        <WorldMap />
        <TextField name="city" value={city} onChange={handleLocation} readOnly={readOnly}>
          <span>{city}</span>
        </TextField>
        <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem'}}>-</span>
        <TextField name="region" value={region} onChange={handleLocation} readOnly={readOnly}>
          <span>{region}</span>
        </TextField>
      </div>
    </>
  );
};

export default Info;
