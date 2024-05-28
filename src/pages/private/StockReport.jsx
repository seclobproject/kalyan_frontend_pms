import React, { useEffect, useState } from 'react'
import { getAllStockUrl } from '../../../Utils/Constants';
import { ApiCall } from '../../Services/Api';
import { SlideMotion } from '../../Components/FramerMotion';
import Loader from '../../Components/Loader';
import { Button } from 'react-bootstrap';

function StockReport() {
  const [allStock, setAllStock] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


   //get all stock report 
   const getAllStock = async () => {
    setIsLoading(true);
    try {
      const response = await ApiCall("get", getAllStockUrl)
      console.log(response,"rwseponse");
      if (response.status === 200) {
        setAllStock(response?.data?.stock);
        setIsLoading(false);
      } else {
        console.error("Error fetching products list. Unexpected status:");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching products list:", error);
    }
  };

  useEffect(()=>{
    getAllStock();
  },[]);
  return (
    <>
      <SlideMotion>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom">
                <h3
                  className="card-title fw-semibold mb-0"
                  style={{ color: "#F7AE15", margin: 0 }}
                >
                  Stocks Report
                </h3>
              
              </div>
            </div>

            {isLoading ? (
              <Loader />
            ) : (
              <div className="table-responsive" style={{ padding: "12px" }}>
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Sl.no</th>
                      <th>Date</th>
                      <th>Product Code</th>
                      <th>Product Name</th>
                      <th>franchise</th>
                      <th>Quantity</th>
                      <th>Price</th>
                  
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStock?.length ? (
                      <>
                        {allStock.map(
                          (stocks, index) => (
                            console.log(stocks, "stocks from list "),
                            (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                  {moment(stocks?.createdAt).format(
                                    "MMMM Do YYYY"
                                  )}
                                </td>
                                <td>
                                  {stocks?.product?.productCode?.toUpperCase()}
                                </td>
                                <td>
                                  {stocks?.product?.productName?.toUpperCase()}
                                </td>
                                <td>
                                  {stocks?.franchise?.franchiseName?.toUpperCase()}
                                </td>
                                <td>
                                  {stocks?.quantity}
                                </td>
                                <td>
                                  {stocks?.price}
                                </td>
                          
                              </tr>
                            )
                          )
                        )}
                      </>
                    ) : (
                      <tr>
                        <td colSpan={20} style={{ textAlign: "center" }}>
                          <b>No Category Found</b>{" "}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
            {/* <div className="me-2 mt-3  mb-4 d-flex ms-auto">
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={params.page}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Stack>
            </div> */}
          </div>
        </div>
      </SlideMotion>
    
    </>
  )
}

export default StockReport