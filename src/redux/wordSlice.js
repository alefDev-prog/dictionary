import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    information: null,
    isLoading:false,
    error: null
}

export const getWordInfo = createAsyncThunk('info/getWordInfo', async (word, thunkAPI) => {
    
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    console.log(response.data)
    return response.data;
    
})

const infoSlice = createSlice({
    name:'info',
    initialState,
    reducers: {
        setInformation: (state) => {
            state.information= null;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(getWordInfo.pending, (state, action) => {
            state.isLoading=true;
            state.error = null;
        })
        .addCase(getWordInfo.rejected, (state, action) => {
            state.isLoading=false;
            state.error=action.error.message;
        })
        .addCase(getWordInfo.fulfilled, (state, action) => {
            state.isLoading=false;
            state.information=action.payload;
            state.error = null;
        })
        
    }
});

export const {setInformation} = infoSlice.actions;

export const infoReducer = infoSlice.reducer;