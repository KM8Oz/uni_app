import * as stringSimilarity from 'string-similarity';
import { Cookies, Notify, SessionStorage } from 'quasar';
export default ()=>({
    getCoockies:function(state, payload){
        let cr = Cookies.get('ssuni')
        if (cr) {
          state.user = {
            tk: cr?.sstk,
            id: cr?.ssuid,
            un: cr?.ssun,
            auth: cr?.ssauth,
            nm:cr?.ssnm
          }
        }
    }
})
