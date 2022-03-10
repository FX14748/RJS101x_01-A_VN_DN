import * as ActionTypes from './ActionTypes';

export const addStaff = (values) => ({
    type: ActionTypes.ADD_STAFF,
    payload: {
        name: values.name,
        doB: values.doB,
        salaryScale: values.salaryScale,
        startDate: values.startDate,
        department: {name:values.department},
        annualLeave: values.annualLeave,
        overTime: values.overTime,
        image: '/assets/images/alberto.png',
    }
});
/*
export const searchStaff = (values) => ({
    type: ActionTypes.SEARCH_STAFF,
    payload: values
}); */