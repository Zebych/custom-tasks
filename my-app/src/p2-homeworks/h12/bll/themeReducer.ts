import {ThemesType} from "../HW12";

type InitStateType={
    theme:string
}
const initState:InitStateType = {
    theme:'dark',
};

export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "THEMES": {
            return {...state,theme:action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:ThemesType): any => ({type:'THEMES',theme}as const); // fix any


type ActionType= ReturnType<typeof changeThemeC>