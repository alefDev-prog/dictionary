import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    information: "test",
    isLoading:false
}

export const getWordInfo = createAsyncThunk('info/getWordInfo', async () => {
    try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello', {
        method:"GET",
        headers: {
            'content-type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
    } catch(e) {
        console.log(e);
    }
    
})

const infoSlice = createSlice({
    name:'info',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(getWordInfo.pending, (state, action) => {
            state.isLoading=true;
        })
        .addCase(getWordInfo.fulfilled, (state, action) => {
            state.isLoading=false;
            state.information=action.payload;
        })
        .addCase(getWordInfo.rejected, (state, action) => {
            state.isLoading=false;
            console.log(action.payload);
        })
    }
});

export const infoReducer = infoSlice.reducer;