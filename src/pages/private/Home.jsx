import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { MyContext } from "../../Services/Context";
import { useNavigate } from "react-router-dom";
import { dashboardDataUrl } from "../../../Utils/Constants";
import { ApiCall } from "../../Services/Api";

function Home() {
  const navigate = useNavigate();
  const {} = useContext(MyContext);
  const [dashboardData, SetDashBoardData] = useState();
  console.log(dashboardData, "dashboardData");
  const [isLoading, setIsLoading] = useState(false);

  //get all dashboard data
  const getAllDashboard = async () => {
    try {
      setIsLoading(true);
      const response = await ApiCall("get", dashboardDataUrl);
      console.log(response, "response");
      if (response.status === 200) {
        SetDashBoardData(response?.data);
        setIsLoading(false);
      } else {
        console.error("Error fetching data list. Unexpected status:");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data list:", error);
    }
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }
    getAllDashboard();
  }, []);

  return (
    <div>
      {/* Start Content*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="card" style={{background:"#001529"}}>
              <div className="card-body">
                <h4 className="header-title mt-0 mb-4" style={{height:'70%',color:"white"}}>Total Categories</h4>
                <div className="widget-chart-1">
                  <div className="widget-detail-1 text-end">
                    <h2 className="fw-normal pt-2 mb-1" style={{color:"white"}}>
                      {dashboardData?.totalCategories}{" "}
                    </h2>
                    <div className="progress progress-bar-alt-success progress-sm">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={77}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      >
                        <span className="visually-hidden" >77% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
          <div className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body"  style={{background:"#001529"}}>
                <h4 className="header-title mt-0 mb-4" style={{height:'70%',color:"white"}}>Total Franchise</h4>
                <div className="widget-chart-1">
                  <div className="widget-detail-1 text-end">
                    <h2 className="fw-normal pt-2 mb-1" style={{color:"white"}}>
                      {dashboardData?.totalfranchise}{" "}
                    </h2>
                    <div className="progress progress-bar-alt-success progress-sm">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={77}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      >
                        <span className="visually-hidden">77% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
          <div className="col-xl-4  col-md-6">
            <div className="card">
              <div className="card-body"  style={{background:"#001529"}}>
                <h4 className="header-title mt-0 mb-4" style={{height:'70%',color:"white"}}>Total products</h4>
                <div className="widget-chart-1">
                  <div className="widget-detail-1 text-end">
                    {/* <span className="badge bg-success rounded-pill float-start mt-3">
                      <i
                        className="mdi mdi-trending-up"
                        style={{ height: "100px" }}
                      />{" "}
                    </span> */}

                    <h2 className="fw-normal pt-2 mb-1" style={{color:"white"}}>
                      {dashboardData?.totalProducts}{" "}
                    </h2>
                    <div className="progress progress-bar-alt-success progress-sm">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={77}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      >
                        <span className="visually-hidden">77% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>

      <Helmet>
        <script src="/assets/libs/jquery/jquery.min.js"></script>
        <script src="/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="/assets/libs/node-waves/waves.min.js"></script>
        <script src="/assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="/assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
        <script src="/assets/libs/feather-icons/feather.min.js"></script>

        <script src="/assets/libs/jquery-knob/jquery.knob.min.js"></script>

        <script src="/assets/libs/morris.js06/morris.min.js"></script>
        <script src="/assets/libs/raphael/raphael.min.js"></script>
        <script src="/assets/js/pages/dashboard.init.js"></script>

        <script src="/assets/js/app.min.js"></script>
      </Helmet>
    </div>
  );
}

export default Home;
