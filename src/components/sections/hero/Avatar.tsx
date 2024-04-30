import { useProfileStore } from "@/store";

interface Props {
  readOnly?: boolean;
}

const Avatar = ({ readOnly = false }: Props) => {
  const basic = useProfileStore((state) => state.basic);
  const setBasic = useProfileStore((state) => state.setBasic);
  const { image } = basic;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (typeof data === "string") {
          setBasic("image", data);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <>
      <div className="image-container">
        <label
          htmlFor="avatar-image"
          style={{ cursor: readOnly ? "default" : "pointer" }}
        >
          <figure>
            <img src={image} alt="Avatar" className="h-96 w-96 rounded-full" />
          </figure>
        </label>

        {!readOnly && (
          <input id="avatar-image" type="file" onChange={handleImageChange} />
        )}
      </div>

      <style>
        {`

        .image-container{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #avatar-image{
          display: none;
        }


        img {
            aspect-ratio: 1 / 1;
            object-fit: cover;
            width: 128px;
            border-radius: 16px;
          }
        `}
      </style>
    </>
  );
};

export default Avatar;
