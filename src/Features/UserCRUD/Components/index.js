import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListUsersAction, getDetailUserAction } from "../Actions";
import { ModalView } from "../../../utils/modal";

const UserComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListUsersAction());
  }, [dispatch]);

  const { dataUser, isLoading, isError } = useSelector((data) => data.users);

  //   console.log("data:", dataUser, "error", isError, "loading", isLoading);

  const handleViewDetail = (id) => {
    return dispatch(getDetailUserAction(id));
  };

  const { dataDetailUser } = useSelector((data) => data.users);

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

  return (
    <>
      {dataDetailUser && <ModalView data={dataDetail} />}
      <h1>User component</h1>
      {isError && <p style={{ color: "red" }}>{isError}</p>}

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
                        className="btn btn-primary btn-sm"
                        data-bs-target="#exampleModal"
                        data-bs-toggle="modal"
                        onClick={() => handleViewDetail(data.id)}
                      >
                        View
                      </button>
                      <button className="btn btn-danger btn-sm">Delete</button>
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
