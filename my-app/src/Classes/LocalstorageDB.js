
// const itemLocalstorage = 'listTask'
import React from "react";

class LocalstorageDB extends React.Component {
    static itemLocalstorage = 'listTask';
    static setNewDataRow(value){
        this.id = new Date().getUTCMilliseconds();
        this.value = value;
        this.dateAdd = new Date().toLocaleDateString('en-GB');
        this.timeAdd = new Date().toLocaleTimeString();
        this.dataRow = {
            'id': this.id,
            'value':  this.value,
            'timeAdd': this.timeAdd,
            'dateAdd': this.dateAdd
        }
    }
    static save(){

        let localStorageData = []
        if (LocalstorageDB.hasLocalStorageData()){
                localStorageData = LocalstorageDB.getLocalstorageData(LocalstorageDB.itemLocalstorage)
        }
        localStorageData = [this.dataRow, ...localStorageData]
        localStorage.setItem(this.itemLocalstorage,JSON.stringify(localStorageData))
    }
    static hasLocalStorageData(){
        return localStorage.getItem(LocalstorageDB.itemLocalstorage) && true
    }
   static getLocalstorageData(){
        return LocalstorageDB.hasLocalStorageData() && JSON.parse(localStorage.getItem(LocalstorageDB.itemLocalstorage))
    }
    static getLocalstorageItemById(id){
        return  LocalstorageDB.hasLocalStorageData() && (LocalstorageDB.getLocalstorageData().filter((data) => data.id === parseInt(id)))
    }
    static updateData(id, newData) {
       const newLocalstorage =  LocalstorageDB.getLocalstorageData()
        newLocalstorage.forEach((data) => {
           (data.id === id) && (data.value = newData)
        })
        LocalstorageDB.setNewLocalstorageData(newLocalstorage)
    }
    static setNewLocalstorageData(newLocalstorageData){
        localStorage.removeItem(this.itemLocalstorage)
        localStorage.setItem(this.itemLocalstorage,JSON.stringify(newLocalstorageData))
    }
    static showDescriptionBlock() {
        return true;
    }
    static deleteItem(idElement){
        const cleanedDB = LocalstorageDB.removeLocalstorageRowById(idElement)

        localStorage.removeItem(this.itemLocalstorage)
        localStorage.setItem(this.itemLocalstorage,JSON.stringify(cleanedDB))
    }
    static removeLocalstorageRowById(id){
        return LocalstorageDB.getLocalstorageData().filter((data) => data.id !== parseInt(id))
    }
}

export default LocalstorageDB