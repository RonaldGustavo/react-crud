import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetListUsersAction,
  deleteUserDataAction,
  getDetailUserAction,
} from "../Actions";
import { ModalView } from "../../../utils/modal/ModalDetail";
import { ModalCreate } from "../../../utils/modal/ModalCreate";
import { toast } from "react-toastify";

const UserComponent = () => {
  const dispatch = useDispatch();
  const { dataUser, isLoading, isError } = useSelector((data) => data.users);
  const { dataDetailUser } = useSelector((data) => data.users);

  useEffect(() => {
    dispatch(GetListUsersAction());
  }, [dispatch]);

  //   console.log("data:", dataUser, "error", isError, "loading", isLoading);

  const handleViewDetail = (id) => {
    dispatch(getDetailUserAction(id));
    toast.info(`View detail id ${id}`);
  };

  console.log("detailCompt: ", dataDetailUser);

  const dataDetail = {
    name: dataDetailUser.name,
    id: dataDetailUser.id,
    email: dataDetailUser.email,
    address: dataDetailUser.address,
    noHp: dataDetailUser.no_hp,
    customerId: dataDetailUser.customer_id,
    gender: dataDetailUser.gender,
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUserDataAction(id));
    toast.success(`berhasi hapus id ${id}`);
  };

  return (
    <>
      <ModalCreate />
      {dataDetailUser && <ModalView data={dataDetail} />}
      <h1>User component</h1>
      {isError && <p style={{ color: "red" }}>{isError}</p>}
      <button
        className="btn btn-primary"
        style={{ margin: "10px 0px" }}
        data-bs-target="#modalCreate"
        data-bs-toggle="modal"
      >
        Create
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Customer_id</th>
            <th>Gender</th>
            <th>No_hp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <p>loading..</p>
          ) : (
            dataUser &&
            dataUser.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.email}</td>
                  <td>{data.customer_id}</td>
                  <td>{data.gender}</td>
                  <td>{data.no_hp}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        height: "100%",
                      }}
                    >
                      <button
                        onClick={() => handleViewDetail(data.id)}
                        className="btn btn-primary btn-sm"
                        data-bs-target="#modalDetail"
                        data-bs-toggle="modal"
                      >
                        View
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteUser(data.id)}
                      >
                        Delete
                      </button>
                      <button className="btn btn-secondary btn-sm">
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserComponent;
