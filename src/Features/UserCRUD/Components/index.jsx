import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import {
  GetListUsersAction,
  deleteUserDataAction,
  getDetailUserAction,
} from "../Actions";

//modal
import { ModalView } from "../../../utils/modal/ModalDetail";
import { ModalCreate } from "../../../utils/modal/ModalCreate";
import { ModalUpdate } from "../../../utils/modal/ModalUpdate";

const UserComponent = () => {
  const dispatch = useDispatch();
  const { dataUser, isLoading, isError, dataDetailUser } = useSelector(
    (data) => data.users
  );
  const [itemOffset, setItemOffset] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const filteredData = dataUser.filter((item) => {
    if (isSearchClicked) {
      return (
        item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.email.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.address.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.customer_id.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.id.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.no_hp.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.gender.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }
    return true;
  });
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentUserAfterPaginate = filteredData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const initialPage = Math.floor(itemOffset / itemsPerPage);

  const handlePageClick = (event) => {
    console.log(`event ${event}`);
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleSearchClick = () => {
    // setCurrentSearchKeyword(searchKeyword);
    setIsSearchClicked(true);
    toast.info(`anda search keyword: ${searchKeyword}`);

    // Lakukan pencarian berdasarkan searchKeyword di sini
    // Anda dapat mengakses nilai searchKeyword untuk melakukan pencarian
    console.log("Kata kunci pencarian:", searchKeyword);

    // Atur ulang itemOffset ke 0 untuk kembali ke halaman pertama
    setItemOffset(0);
  };

  // useEffect(() => {
  //   if (isSearchClicked) {
  //     // Lakukan logika pencarian
  //     // Setelah selesai, atur kembali isSearchClicked menjadi false
  //     setIsSearchClicked(false);
  //   }
  // }, [isSearchClicked]);

  console.log("button search clicked", isSearchClicked);

  useEffect(() => {
    dispatch(GetListUsersAction());
  }, [dispatch]);

  //   console.log("data:", dataUser, "error", isError, "loading", isLoading);
  const handleViewDetail = (id) => {
    dispatch(getDetailUserAction(id));
    toast.info(`View detail id ${id}`);
  };
  const handleUpdate = (id) => {
    dispatch(getDetailUserAction(id));
    toast.info(`View detail id ${id}`);
  };

  console.log("detailCompt: ", dataDetailUser);

  const handleDeleteUser = (id) => {
    dispatch(deleteUserDataAction(id));
    toast.success(`berhasi hapus id ${id}`);
  };

  return (
    <>
      {dataDetailUser && <ModalUpdate />}
      <ModalCreate />
      {dataDetailUser && <ModalView />}
      <h1>User component</h1>
      {isError && <p style={{ color: "red" }}>{isError}</p>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 5px",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-primary"
          style={{ margin: "10px 0px" }}
          data-bs-target="#modalCreate"
          data-bs-toggle="modal"
        >
          Create
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            style={{ padding: "5px 10px" }}
            placeholder="Cari..."
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
              setIsSearchClicked(false);
            }}
          />
          <button className="btn btn-success" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
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
            currentUserAfterPaginate &&
            currentUserAfterPaginate.map((data) => {
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
                      <button
                        className="btn btn-secondary btn-sm"
                        data-bs-target="#modalUpdate"
                        data-bs-toggle="modal"
                        onClick={() => handleUpdate(data.id)}
                      >
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

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        initialPage={initialPage}
        forcePage={initialPage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__countpage--disabled"}
        activeClassName={"pagination__countpage--active"}
      />
    </>
  );
};

export default UserComponent;
