import { useState } from "react";
import { updateUserAction } from "../../Features/UserCRUD/Actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const ModalUpdate = () => {
  const { isLoadingDetail, dataDetailUser } = useSelector((data) => data.users);

  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [noHp, setnoHp] = useState("");
  const [gender, setgender] = useState("");
  const [customerId, setcustomerId] = useState("");

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
    setaddress("");
    setemail("");
    setcustomerId("");
    setgender("");
    setnoHp("");
  };

  const handleUpdateUser = async (id) => {
    try {
      const update = dispatch(updateUserAction(id, body));
      handleClear();
      console.log("success", update);
      toast.success(`berhasi update user`);

      return update;
    } catch (error) {
      console.log("update user:", error.message);
    }
  };
  console.log("loading detail:", isLoadingDetail);

  return (
    <>
      {
        <div
          className="modal fade"
          id="modalUpdate"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
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
                {isLoadingDetail ? (
                  <p>is Loading...</p>
                ) : (
                  <form>
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        type="text"
                        value={dataDetailUser.id}
                        className="input__detail"
                      />
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        value={name}
                        className="input__detail"
                        placeholder={dataDetailUser.name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        value={address}
                        className="input__detail"
                        placeholder={dataDetailUser.address}
                        onChange={(e) => setaddress(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        value={email}
                        className="input__detail"
                        placeholder={dataDetailUser.email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Customer_id</label>
                      <input
                        type="text"
                        value={customerId}
                        className="input__detail"
                        placeholder={dataDetailUser.customer_id}
                        onChange={(e) => setcustomerId(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Gender</label>
                      <input
                        type="text"
                        value={gender}
                        className="input__detail"
                        placeholder={dataDetailUser.gender}
                        onChange={(e) => setgender(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>No_HP</label>
                      <input
                        type="text"
                        value={noHp}
                        className="input__detail"
                        placeholder={dataDetailUser.no_hp}
                        onChange={(e) => setnoHp(e.target.value)}
                      />
                    </div>
                  </form>
                )}
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
                  onClick={() => handleUpdateUser(dataDetailUser.id)}
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
