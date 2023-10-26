import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ModalView = ({ data }) => {
  // const {dataDetailUser: data} = useSelector((data) => data.users);

  return (
    <>
      {data && (
        <div
          className="modal fade"
          id="modalDetail"
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
                    <label>ID</label>
                    <input
                      type="text"
                      value={data.id}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={data.name}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      value={data.address}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      value={data.email}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Customer_id</label>
                    <input
                      type="text"
                      value={data.customerId}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      type="text"
                      value={data.gender}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>No_HP</label>
                    <input
                      type="text"
                      value={data.noHp}
                      className="input__detail"
                      disabled
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
