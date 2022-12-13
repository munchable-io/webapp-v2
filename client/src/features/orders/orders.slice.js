import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
	order: [],
	orders: [],
	status: "idle", // idle | loading | succeeded | failed
	error: null,
	subTotalAmount: 0,
	taxAmount: 0,
	tipAmount: 0,
	feeAmount: 0,
	totalAmount: 0,
};

// async thunks
export const updateOrder = createAsyncThunk(
	"orders/updateOrder",
	async (data) => {
		try {
			const response = await axios.put(`/orders/${data.id}`, data.body);
			return response.data;
		} catch (err) {
			return err.message;
		}
	}
);

export const createOrder = createAsyncThunk(
	"orders/createOrder",
	async (order) => {
		try {
			const response = await axios.post("/orders", order);
			return response.data;
		} catch (err) {
			return err.message;
		}
	}
);

export const getOrdersByUser = createAsyncThunk(
	"orders/orders/user",
	async (id) => {
		try {
			const response = await axios.get(`orders/user/${id}`);
			return response.data;
		} catch (err) {
			console.log(err);
			return err.message;
		}
	}
);

// orders slice
const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		setSubTotalAmount(state, action) {
			state.subTotalAmount = action.payload;
		},
		setTaxAmount(state, action) {
			state.taxAmount = action.payload;
		},
		setTipAmount(state, action) {
			state.tipAmount = action.payload;
		},
		setFeeAmount(state, action) {
			state.feeAmount = action.payload;
		},
		setTotalAmount(state, action) {
			state.totalAmount = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(updateOrder.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(updateOrder.fulfilled, (state, action) => {
				state.status = "succeeded";
			})
			.addCase(updateOrder.rejected, (state, action) => {
				state.status = "failed";
			})
			.addCase(getOrdersByUser.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(getOrdersByUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.orders = action.payload; // orders are returned from [baseUrl]/orders/user/:id
			})
			.addCase(getOrdersByUser.rejected, (state, action) => {
				state.status = "failed";
			});
	},
});

// functions
export const getOrder = (state) => state.orders.order;
export const getSubTotalAmount = (state) => state.orders.subTotalAmount;
export const getTaxAmount = (state) => state.orders.taxAmount;
export const getTipAmount = (state) => state.orders.tipAmount;
export const getFeeAmount = (state) => state.orders.feeAmount;
export const getTotalAmount = (state) => state.orders.totalAmount;
export const getOrders = (state) => state.orders.orders;

// actions
export const {
	setSubTotalAmount,
	setTaxAmount,
	setTipAmount,
	setFeeAmount,
	setTotalAmount,
} = ordersSlice.actions;

// export reducer
export default ordersSlice.reducer;
