import { BrowserRouter, Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { CryptoDetails, Cryptocurrencies, Exchanges, HomePage, Navbar, News } from "./components";
import { Layout, Space } from "antd";
import Typography from "antd/es/typography/Typography";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children:[
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "exchanges",
          element: <Exchanges />,
        },
        {
          path: "cryptocurrencies",
          element: <Cryptocurrencies />,
        },
        {
          path: "crypto/:coinId",
          element: <CryptoDetails />,
        },
        {
          path: "news",
          element: <News />,
        }

      ]
    },
    
  ]);

  return (
      <div className="App">
      <div className="containe">
        <div className="main">
         <RouterProvider router={appRouter}/>
        </div></div>
        <div className="footer">
        <Typography.Title level={5} style={{color:'black',textAlign:'center'}}>
          Rupadravya<br/>
          All Rights Reserved
        </Typography.Title>
        {/* <Space>
          <Link to="/">Home</Link>
          <Link to="exchanges">Exchanges</Link>
          <Link to="news">News</Link>
        </Space> */}
        </div>
      </div>
    
  );
}

export default App;
