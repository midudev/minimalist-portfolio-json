import Pencil from "@/icons/Pencil";
import Plus from "@/icons/Plus";
import Trash from "@/icons/Trash";
import { useProfileStore } from "@/store";
import { useState } from "react";
import ProfileForm from "./ProfileForm";

interface Props {}

const Profiles = ({}: Props) => {
  const profiles = useProfileStore((state) => state.profiles);
  const deleteProfile = useProfileStore((state) => state.deleteProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [indexSelected, setIndexSelected] = useState(0);

  const closeModal = () => {
    setIsModalOpen(false);
    setOpenAddForm(false);
    setOpenEditForm(false);
  };

  const handleDeleteProfile = (index: number) => {
    deleteProfile(index);
  };

  return (
    <>
      <div onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
        <Pencil />
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              x
            </span>
            <div className="profile">
              <div>
                <h3>Profiles</h3>
                {!openAddForm && profiles.length < 4 && (
                  <Plus onClick={() => setOpenAddForm(true)} />
                )}
              </div>
              {profiles.map((profile, index) => (
                <div key={index}>
                  {openEditForm && index === indexSelected ? (
                    <ProfileForm
                      onClick={() => setOpenEditForm(false)}
                      type="edit"
                      index={index}
                    />
                  ) : (
                    <>
                      <select
                        disabled={true}
                        name="network"
                        value={profile.network}
                      >
                        <option value="GitHub">GitHub</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Mail">Mail</option>
                        <option value="X">X</option>
                      </select>

                      <input
                        disabled={true}
                        type="text"
                        placeholder="username"
                        value={profile.username}
                      />

                      <input
                        disabled={true}
                        type="text"
                        placeholder="url"
                        value={profile.url}
                      />
                      <Pencil
                        onClick={() => {
                          setOpenEditForm(true);
                          setIndexSelected(index);
                        }}
                      />
                      <Trash onClick={() => handleDeleteProfile(index)} />
                    </>
                  )}
                </div>
              ))}
              {openAddForm && (
                <ProfileForm onClick={() => setOpenAddForm(false)} />
              )}
            </div>
          </div>
        </div>
      )}

      <style>
        {`
            .profile{
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: 8px;
            }

            input, select{
                padding: 8px;
                border-radius: 5px;
                border: 1px solid #ddd;
            }
                    .modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .modal-content {
                        position: relative;
                        background-color: white;
                        padding: 20px;
                        border-radius: 5px;
                    }
                    
                    .close {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        cursor: pointer;
                    }
                    `}
      </style>
    </>
  );
};

export default Profiles;
