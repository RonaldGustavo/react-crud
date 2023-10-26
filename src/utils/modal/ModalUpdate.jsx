import { useEffect, useState } from "react";
import { updateUserAction } from "../../Features/UserCRUD/Actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { GET_DETAIL_DATA_USER } from "../../Constant";

export const ModalUpdate = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [noHp, setnoHp] = useState("");
  const [customerId, setCustomerId] = useState("");
  // const [isModal, setIsModal] = useState("noModal");

  const dispatch = useDispatch();

  const body = {
    name: name,
    email: email,
    address: address,
    gender: gender,
    no_hp: noHp,
    customer_id: customerId,
  };

  const handleClear = () => {
    setName("");
    setemail("");
    setaddress("");
    setnoHp("");
    setgender("");
    setgender("");
  };

  const handleUpdateUser = async (id) => {
    try {
      const update = dispatch(updateUserAction(id, body));
      console.log("success", update);
      toast.success(`berhasi update user`);

      //   if (update.status === 200) {
      //     dispatch({
      //       type: GET_DETAIL_DATA_USER,
      //       payload: {
      //         dataDetailUser: {},
      //       },
      //     });
      //   }

      return update;
    } catch (error) {
      console.log("update user:", error.message);
    }
  };

  return (
    <>
      {
        <div
          className="modal fade"
          id="modalUpdate"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Detail User
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClear}
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      type="text"
                      value={data.id}
                      className="input__detail"
                      disabled
                      placeholder={data.id}
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={name}
                      className="input__detail"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder={data.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      value={address}
                      className="input__detail"
                      onChange={(e) => {
                        setaddress(e.target.value);
                      }}
                      placeholder={data.address}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      value={email}
                      className="input__detail"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      placeholder={data.email}
                    />
                  </div>
                  <div className="form-group">
                    <label>Customer_id</label>
                    <input
                      type="text"
                      value={customerId}
                      className="input__detail"
                      onChange={(e) => {
                        setCustomerId(e.target.value);
                      }}
                      placeholder={data.customerId}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      type="text"
                      value={gender}
                      className="input__detail"
                      onChange={(e) => {
                        setgender(e.target.value);
                      }}
                      placeholder={data.gender}
                    />
                  </div>
                  <div className="form-group">
                    <label>No_HP</label>
                    <input
                      type="text"
                      value={noHp}
                      className="input__detail"
                      onChange={(e) => {
                        setnoHp(e.target.value);
                      }}
                      placeholder={data.noHp}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClear}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleUpdateUser(data.id)}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
