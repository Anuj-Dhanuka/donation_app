import { createSlice } from "@reduxjs/toolkit";

//utils
import { donationItemsData } from "../../utils/donationItemsData";

const initialState = {
    items: donationItemsData,
    selectedDonationId: null,
    selectedDonationInformation: [],
}

const DonationReducer = createSlice({
    name: 'donations',
    initialState: initialState,
    reducers : {
        resetDonations : () => {
            return initialState
        },
        updateSelectedDonationId: (state, action) => {
            state.selectedDonationId = action.payload
            state.selectedDonationInformation = state.items.find((item) => item.donationItemId === action.payload)
        }
    }
})

export const {resetDonations, updateSelectedDonationId} = DonationReducer.actions

export default DonationReducer.reducer