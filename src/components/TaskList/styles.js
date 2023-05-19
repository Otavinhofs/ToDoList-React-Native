import { StyleSheet } from "react-native"

export const stylesTaskList = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 7,
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 3,
        },
    },
    buttonCheck: {
        height: 30,
        width: 30,
    },
    task: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 8,
        paddingRight: 20,
    }
})