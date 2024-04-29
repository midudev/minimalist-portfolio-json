import Cancel from "@/icons/Cancel";
import Check from "@/icons/Check";
import { useProfileStore } from "@/store";
import type { Profile } from "@/store/hero.slice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Props {
  onClick: () => void;
  type?: "add" | "edit";
  index?: number;
}

const Options = ["GitHub", "LinkedIn", "Mail", "X"];

const ProfileForm = ({ onClick, type = "add", index }: Props) => {
  const profiles = useProfileStore((state) => state.profiles);
  const addProfile = useProfileStore((state) => state.addProfile);
  const editProfile = useProfileStore((state) => state.editProfile);
  const { register, handleSubmit, setValue } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    if (type === "edit" && index !== undefined) {
      editProfile(data, index);
    } else {
      addProfile(data);
    }
    onClick();
  });

  const filteredOptions = Options.filter(
    (option) => !profiles.some((profile) => profile.network === option)
  );

  useEffect(() => {
    if (type === "edit" && index !== undefined) {
      const profile = useProfileStore.getState().profiles[index];
      setValue("network", profile.network);
      setValue("username", profile.username);
      setValue("url", profile.url);
    }
  }, [type]);

  return (
    <form onSubmit={onSubmit}>
      <select {...register("network")} name="network">
        {filteredOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        {type === "edit" && index !== undefined && (
          <option value={profiles[index].network}>
            {profiles[index].network}
          </option>
        )}
      </select>

      <input {...register("username")} type="text" placeholder="username" />

      <input {...register("url")} type="text" placeholder="url" />

      <button
        type="submit"
        style={{ background: "transparent", border: "0px solid transparent" }}
      >
        <Check />
      </button>
      <Cancel onClick={onClick} />
    </form>
  );
};

export default ProfileForm;
