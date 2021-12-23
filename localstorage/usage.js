//import module
import {LocalStorage} from 'node-localstorage'

export function function getItem(){
    // constructor function to retrieve localStorage Items from the previously declared directory.
    const localStorage = new LocalStorage('./scratch')
    console.log(localStorage.getItem('Name'))
}
