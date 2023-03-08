import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Get from "./reqs/Get";
import Post from "./reqs/Post";
import GetSingle from "./reqs/GetSingle";
import {
	createBrowserRouter,
	BrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Put from "./reqs/Put";
import Delete from "./reqs/Delete";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/getCustomers",
				element: <Get />,
			},
			{
				path: "/postCustomer",
				element: <Post />,
			},
			{
				path: "/getSingleCustomer",
				element: <GetSingle />,
			},
			{
				path: "/editCustomer",
				element: <Put />,
			},
			{
				path: "/deleteCustomer",
				element: <Delete />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
