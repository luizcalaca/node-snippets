//import module
import {LocalStorage} from 'node-localstorage' 

export function setItem() {
        // constructor function to create a storage directory inside our project for all our localStorage setItem.
        let localStorage = new LocalStorage('./scratch')
        localStorage.setItem('Name', 'Luiz Calaça')
}

