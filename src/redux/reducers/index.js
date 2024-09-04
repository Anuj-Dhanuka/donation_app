import { combineReducers } from "@reduxjs/toolkit";

import  UserReducer  from "./UserReducer";
import CategoriesReducer from "./CategoriesReducer";
import DonationsReducer from "./DonationsReducer";

const  rootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer,
    donations: DonationsReducer
})

export default rootReducer