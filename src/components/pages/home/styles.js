import { StyleSheet } from "react-native"

export const stylesHome = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#171d31'
    },
    title: {
        marginTop: 10,
        paddingBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    plusButton: {
        position: 'absolute',
        width:60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 25,
        zIndex: 9,
    },
    backButton: {
        height: 40,
        width: 40,
        top: 10,
        left: 10,
        tintColor: '#fff',
    },
    modal: {
        flex: 1,
        backgroundColor: '#171d31'
    },
    header: {
       marginLeft: 10,
       marginTop: 20,
       flexDirection: 'row',
       alignItems: 'center',
    },
    body: {
        marginTop: 20,
    },
    input: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        backgroundColor: '#ccc',
        height: 80,
        padding: 9,
        textAlignVertical: 'top',
        color: '#000',
        borderRadius: 5,
    },
    title: {
        left: 35,
        top: 18,
        fontSize: 23,
        color: '#fff',
    },
    handleAdd: {
        backgroundColor: '#ccc',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 10,
    },
    handleAddText: {
        fontSize: 20,
        color: '#000'
    },
})