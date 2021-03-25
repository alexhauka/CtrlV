import React from 'react'; 
import { Route, Redirect } from 'react-router-dom'


export default function ProtectedRoute(props) {
  if (props.isLoggingIn) {
    return null 
  } 
  if (props.user) {
    return <Route {...props}>{props.children}</Route> 
  }
  return <Redirect to="/login" /> 
}