import firebase from 'firebase/app'

export default {
    state: {
        startups: []
    },
    mutations: {
        setStartups(state, startups) {
            state.startups = startups
        },
        clearStartups(state) {
            state.startups = []
        },
        addStartup(state, startup) {
            state.startups =  state.startups || [];
            state.startups.push(startup)
            console.log(state.startups)
        }
    },
    actions: {
        async fetchStartups({ dispatch, commit }) {
            var uid = await dispatch('getUid')
            try {
                var startups = (await firebase.database().ref('users/' + uid + '/startups').once('value')).val()
                commit('setStartups', startups)
                return Object.keys(startups).map(key => ({...startups[key], id: key}))
            }
            catch (e) {
                console.log(e)
            }
        },
        async createStartup({dispatch, commit}, { title, description }) {
            var uid = await dispatch('getUid')
            try {
                await firebase.database().ref('users/' + uid + '/startups').push({
                    title,
                    description
                })
            }
            catch (e) {
                console.log(e)
            }
            commit('addStartup', {
                title,
                description
            })
        }
    },
    getters: {
        startups: state => state.startups
    }
}