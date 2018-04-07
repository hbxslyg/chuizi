import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    debug: true,
    state: {
        cartPanelData:[]
    },
    mutations: {
        addCartPanelData(state,data) {
            let isOK = false
            state.cartPanelData.forEach(item =>{
                console.log(item.sku_id,data.sku_id)
                if (item.sku_id===data.sku_id){
                    item.count++;
                    isOK = true;
                    return
                }

            });

            if (isOK)return;
            state.cartPanelData.push(
                {
                    ...data,
                    count:1
                }
            );
            console.log(state.cartPanelData)
        }
    }
});


