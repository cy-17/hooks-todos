import { FORM_INITIAL_STATE } from '../constants/INITIAL_STATE';

export const setData=(data)=>{
  window.localStorage.setItem('FORM_INITIAL_STATE',JSON.stringify(data))
}

export const getData=() => {
  let data=JSON.parse(window.localStorage.getItem('FORM_INITIAL_STATE'))
  return data===null?FORM_INITIAL_STATE:data
}