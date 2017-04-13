/**
 * Created by nguyenle on 4/13/17.
 */
import {combineReducers} from 'redux';
import todo from './todo'

const todoApp = combineReducers({
    todo
})

export default todoApp
