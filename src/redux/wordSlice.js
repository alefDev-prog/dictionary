import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    information: null,
    isLoading:false
}

export const getWordInfo = createAsyncThunk('info/getWordInfo', async (word, thunkAPI) => {
    
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
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
        })
        .addCase(getWordInfo.rejected, (state, action) => {
            state.isLoading=false;
        })
        .addCase(getWordInfo.fulfilled, (state, action) => {
            state.isLoading=false;
            state.information=action.payload;
        })
        
    }
});

export const {setInformation} = infoSlice.actions;

export const infoReducer = infoSlice.reducer;