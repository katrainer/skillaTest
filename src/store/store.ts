import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {callsReducer, CallsReducerActionType} from './reducers/callsReducer'

const rootReducer = combineReducers({
	calls: callsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


//Свой диспатч и селектор
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => {
	return useDispatch() as ThunkDispatch<AppRootStateType, unknown, AppActionType>
}

//Типизация стора
export type AppRootStateType = ReturnType<typeof rootReducer>

//Типизация санок
export type AppActionType = CallsReducerActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

//@ts-ignore
window.store = store