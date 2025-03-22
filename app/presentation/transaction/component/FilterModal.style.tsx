import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)', 
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
      filterButton: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 8,
        borderRadius: 8,
      },
      closeButton: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
      },
      rowSelection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:12
      },
      filterText: {
        marginLeft: 10,
        fontSize: 16,
      },

});