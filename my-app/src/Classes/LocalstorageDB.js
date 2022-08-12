
// const itemLocalstorage = 'listTask'
class LocalstorageDB {
    // constructor(value) {
    //     this.id = new Date().getUTCMilliseconds();
    //     this.value = value;
    //     this.dateAdd = new Date().toLocaleDateString('en-GB');
    //     this.timeAdd = new Date().toLocaleTimeString();
    //     this.dataRow = {
    //         'id': this.id,
    //         'value':  this.value,
    //         'timeAdd': this.timeAdd,
    //         'dateAdd': this.dateAdd
    //     }
    // }

    static itemLocalstorage = 'listTask';
    static save(value){
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

        let localStorageData = []
        if (LocalstorageDB.hasLocalStorageData()){
                localStorageData = LocalstorageDB.getLocalstorageData(LocalstorageDB.itemLocalstorage)
        }
        localStorageData.push(this.dataRow)
        localStorage.setItem('listTask',JSON.stringify(localStorageData))
    }

    static hasLocalStorageData(){
        console.log(localStorage.getItem(LocalstorageDB.itemLocalstorage ) && true)
        return localStorage.getItem(LocalstorageDB.itemLocalstorage) && true
    }

   static getLocalstorageData(){
       console.log((localStorage.getItem('listTask')))
        return LocalstorageDB.hasLocalStorageData() && JSON.parse(localStorage.getItem(LocalstorageDB.itemLocalstorage))
    }

    static getLocalstorageItemById(id){
        return  LocalstorageDB.hasLocalStorageData() && LocalstorageDB.getLocalstorageData().find(data => data.id === id)
    }

    static showDescriptionBlock() {
        return true;
    }

    static editItem(id){
        console.log(id)
    }

    static deleteItem(id){
        console.log(id)
    }
}

export default LocalstorageDB