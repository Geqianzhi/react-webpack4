import {observable,action} from 'mobx';


class state {
    @observable num = 1;
    @observable activeRoutes = [];

    @action
    changeRoutes = route =>{
        if(this.activeRoutes.length>0){
            let flag = this.activeRoutes.some(e => e.name === route.name);
            if(!flag){
                this.activeRoutes.push({...route});
            }
            
        }else{
            this.activeRoutes.push({...route});
        }
    }
}
const store = new state();
export default store