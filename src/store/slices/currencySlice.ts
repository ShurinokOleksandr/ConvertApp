import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


interface initialStateType {
    data: getCovertValueType[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export interface getCovertValueType{
    cc:string;
    rate:number;
}

export const fetchCurrencyData = createAsyncThunk<getCovertValueType[]>(
    'currency/data',
    async () => {
        const response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
        const data:getCovertValueType[]  = await response.json();
        return data;
    }
)

const initialState:initialStateType =  {
    data:[{
        cc:'',
        rate:0,
    }],
    loading:'idle',
}
const currencySlice = createSlice({
    name:'currencySlice',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrencyData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchCurrencyData.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchCurrencyData.rejected, (state) => {
                state.loading = 'failed';
            })

    },
})
export default currencySlice.reducer