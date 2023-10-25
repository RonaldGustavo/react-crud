import { useState } from "react";
import { CreateNewUserAction } from "../../Features/UserCRUD/Actions";
import { useDispatch } from "react-redux";

export const ModalCreate = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [noHp, setnoHp] = useState("");
  const [customerId, setCustomerId] = useState("");

  const dispatch = useDispatch();

  const body = {
    name: name,
    email: email,
    address: address,
    gender: gender,
    no_hp: noHp,
    customer_id: customerId,
  };

  const handleCreateUser = async () => {
    try {
      const create = dispatch(CreateNewUserAction(body));
      console.log("success", create);
      alert("berhasil simpan user!");
      return create;
    } catch (error) {
      console.log("submit user:", error.message);
    }
  };

  return (
    <>
      {
        <div
          className="modal fade"
          id="modalCreate"
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
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={name}
                      className="input__detail"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="input Name"
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
                      placeholder="input Address"
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
                      placeholder="input Email"
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
                      placeholder="input CustomerId"
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
                      placeholder="input Gender"
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
                      placeholder="input NoHp"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={handleCreateUser}
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
