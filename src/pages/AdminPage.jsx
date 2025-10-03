import React from "react";
import AdminDashboard from "../components/Admin/AdminDash";
import { Helmet } from "react-helmet";

const AdminPage = () => {
  return (
    <>
     <Helmet>
        <title>Estate | Admin Dashboard </title>
        <meta name="adminpage" content="admin page content" />
      </Helmet>
      <AdminDashboard />
    </>
  );
};

export default AdminPage;
