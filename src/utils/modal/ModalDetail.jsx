import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ModalView = () => {
  const { isLoadingDetail, dataDetailUser } = useSelector((data) => data.users);

  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    setDataUser(dataDetailUser);
  }, [dataDetailUser]);

  console.log("loading detail:", isLoadingDetail);
  return (
    <>
      <div
        className="modal fade"
        id="modalDetail"
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
                      value={dataUser.id}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={dataUser.name}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      value={dataUser.address} // Perbaiki dari dataUser.addres
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      value={dataUser.email}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Customer_id</label>
                    <input
                      type="text"
                      value={dataUser.customer_id}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      type="text"
                      value={dataUser.gender}
                      className="input__detail"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>No_HP</label>
                    <input
                      type="text"
                      value={dataUser.no_hp}
                      className="input__detail"
                      disabled
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
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
