import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {       
        key: '6e7858ef259844fdbbeb03ac0951efba'
    }
})