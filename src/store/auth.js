import firebase from 'firebase';

export default {
    actions: {
        async login(ctx, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (error) {
                console.log(error)
                throw error
            }
        },
        async register({dispatch}, { email, password, name }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref("/users/" + uid + "/info").set({
                    name: name,
                    role: 'investor'
                })

            } catch (error) {
                console.log(error)
                throw error
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut()
            commit('clearInfo')
        }
    }
}